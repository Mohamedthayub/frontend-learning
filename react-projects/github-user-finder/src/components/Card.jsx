import { useState } from "react";
const SearchInput = () => {
    const [username,setUsername]  = useState("");

    return (
        <div className="container">
            <div className="input-container">
                <input type="text"  value= {username} onChange={(e) => setUsername(e.target.value)}/>
                <button onClick={() => console.log(username)}>Search</button>  
            </div>
            <div className="card">
                <div className="first">
                    <div className="first-container">
                    <img src="" alt="" />
                    </div>
                   <div className="second-container">
                    <h2>The Octocat</h2>
                    <h3>@octocat</h3>
                    <p>this profile has no bio</p>
                   </div>
                </div>
                <div className="second-contain">
                    <div>
                        <h3>Public Repositories</h3>
                        <p>4</p>
                    </div>
                    <div>
                        <h3>Followers</h3>
                        <p>5</p>
                    </div>
                    <div>
                        <h3>following</h3>
                        <p>2</p>
                    </div>
                </div>
                <div className="third">
                    <div>
                        <div>
                            <img src="../assets/icon-location.svg" alt="" />
                            <p>Not available</p>
                        </div>
                        <div>
                            <img src="../assets/icon-twitter.svg" alt="" />
                            <p>Not available</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="../assets/icon-website.svg" alt="" />
                            <p>Not available</p>
                        </div>
                        <div>
                            <img src="../assets/icon-company.svg" alt="" />
                            <p>Not available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchInput;