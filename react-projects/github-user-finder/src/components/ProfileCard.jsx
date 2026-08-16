import twitter_icon from "../assets/icon-twitter.svg";
import location_icon from "../assets/icon-location.svg";
import website_icon  from "../assets/icon-website.svg";
import company_icon from "../assets/icon-company.svg";
import octocat from "../assets/octocat.png";
const  ProfileCard = ({userdata}) => {
    return (
           <div className="profile-card">
                <div className="first">
                    <div className="first-container">
                    <div>
                        <img src="../assets/icon-search.svg" alt="" />
                        <img src={userdata?.avatar_url || octocat } alt={octocat}  className="profile-photo"/>
                    </div>
                    </div>
                   <div className="second-container">
                    <h2>{userdata.name || "Name is not available"}</h2>
                    <h3>@{userdata.login || "username is not available"}</h3>
                    <p className="bio">{userdata.bio || "bio is not available"}</p>
                   </div>
                </div>
                <div className="second-container">
                    <div className="small-container1">
                        <h3>Public Repositories</h3>
                        <p className="text">{userdata.public_repos}</p>
                    </div>
                    <div className="small-container2">
                        <h3>Followers</h3>
                        <p className="text">{userdata.followers}</p>
                    </div>
                    <div className="small-container3">
                        <h3>following</h3>
                        <p className="text">{userdata.following}</p>
                    </div>
                </div>
                <div className="third">
                    <div className="first-third-container">
                        <div className="third-small-container">
                            <img src={location_icon}  alt="" className='location-img'/>
                            <p className="third-text">{userdata.location || "Not available"}</p>
                        </div>
                        <div className="third-small-container">
                            <img src={twitter_icon} alt="" className="twitter-img"/>
                            <p className="third-text">{userdata.twitter_username || "Not available"}</p>
                        </div>
                    </div>
                    <div className="second-third-container">
                        <div className="third-small-container">
                            <img src={website_icon} alt="" className="website-img" />
                            <p className="third-text">{userdata.url}</p>
                        </div>
                        <div className="third-small-container">
                            <img src={company_icon} alt="" className="company-img" />
                            <p className="third-text">{userdata.company || "Not available"}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ProfileCard;