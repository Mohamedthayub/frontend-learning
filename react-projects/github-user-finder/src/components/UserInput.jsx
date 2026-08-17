import { useState } from "react";
import Shimmer from "../utils/Shimmer";
import ProfileCard from "./ProfileCard";
const SearchInput = () => {
    const [username,setUsername]  = useState("");
    const [userData, setUserData] = useState(null);
    const [loading , setLoading] = useState(false);
    const [error,setError] = useState("");
    async function fetchUser(){
        if(username.trim() == ""){
            setError("Please enter a Github username");
            return ;
        }
        try{
            setLoading(true);
            setError("");
            setUserData(null)
            const response = await fetch(`https://api.github.com/users/${username.trim()}`);
            if(!response.ok){
                throw new Error("User not Found");
            }
            const data = await response.json();
            setUserData(data);   
        }
        catch(err){
            setError(err.message);
            setUserData(null);
        }
        finally{
            setLoading(false);
        }

    }
    function handleSubmit(e){
        e.preventDefault();
        fetchUser();
    }
    return (
        <form className="bg-zinc-800  w-1/3 h-18 rounded-lg px-2 py-2" onSubmit={handleSubmit}>
            <div className="flex justify-between">
                <input type="text"  value= {username} onChange={(e) => setUsername(e.target.value)} placeholder="Search Github Username" className="outline-0 font-semibold text-lg text-white"/>
                <button type="submit" disabled={loading} className="bg-zinc-700 text-white font-bold h-14 w-25 rounded-lg hover:bg-zinc-800">{loading ? "Seaching ...": "Search"}</button>  
            </div>
            {
                loading && <Shimmer/>
            }
            {error && (
            <p className="">{error}</p>
            )}

            {!loading && userData && (
                <ProfileCard userdata = {userData}/>
            )}
       </form>
    )
}

export default SearchInput;