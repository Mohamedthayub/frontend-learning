import { useState } from "react";
import thayub_profile from "../assets/thayub.jpg";
import twitter_icon from "../assets/icon-twitter.svg";
import location_icon from "../assets/icon-location.svg";
import website_icon  from "../assets/icon-website.svg";
import company_icon from "../assets/icon-company.svg";
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
                    <div>
                        <img src="../assets/icon-search.svg" alt="" />
                        <img src={thayub_profile}alt=""  className="profile-photo"/>
                    </div>
                    </div>
                   <div className="second-container">
                    <h2>Mohideen thayub</h2>
                    <h3>@Mohideenthayub</h3>
                    <p className="bio">this profile has no bio</p>
                   </div>
                </div>
                <div className="second-container">
                    <div className="small-container1">
                        <h3>Public Repositories</h3>
                        <p className="text">4</p>
                    </div>
                    <div className="small-container2">
                        <h3>Followers</h3>
                        <p className="text">5</p>
                    </div>
                    <div className="small-container3">
                        <h3>following</h3>
                        <p className="text">2</p>
                    </div>
                </div>
                <div className="third">
                    <div className="first-third-container">
                        <div className="third-small-container">
                            <img src={location_icon}  alt="" className='location-img'/>
                            <p className="third-text">Not available</p>
                        </div>
                        <div className="third-small-container">
                            <img src={twitter_icon} alt="" className="twitter-img"/>
                            <p className="third-text">Not available</p>
                        </div>
                    </div>
                    <div className="second-third-container">
                        <div className="third-small-container">
                            <img src={website_icon} alt="" className="website-img" />
                            <p className="third-text">Not available</p>
                        </div>
                        <div className="third-small-container">
                            <img src={company_icon} alt="" className="company-img" />
                            <p className="third-text">Not available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchInput;