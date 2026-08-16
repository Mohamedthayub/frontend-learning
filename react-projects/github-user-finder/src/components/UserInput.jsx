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
        <form className="container" onSubmit={handleSubmit}>
            <div className="input-container">
                <input type="text"  value= {username} onChange={(e) => setUsername(e.target.value)} placeholder="Search Github Username"/>
                <button type="submit" disabled={loading}>{loading ? "Seaching ...": "Search"}</button>  
            </div>
            {
                loading && <Shimmer/>
            }
            {error && (
            <p className="error-msg">{error}</p>
            )}

            {!loading && userData && (
                <ProfileCard userdata = {userData}/>
            )}
       </form>
    )
}

export default SearchInput;