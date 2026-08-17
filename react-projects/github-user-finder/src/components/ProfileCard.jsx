import twitter_icon from "../assets/icon-twitter.svg";
import location_icon from "../assets/icon-location.svg";
import website_icon from "../assets/icon-website.svg";
import company_icon from "../assets/icon-company.svg";
import octocat from "../assets/octocat.png";

const ProfileCard = ({ userdata }) => {
  return (
    <div className="w-full max-w-2xl rounded-2xl bg-zinc-800 p-6 text-white shadow-xl mt-10">
      
      {/* Profile Section */}
      <div className="flex flex-col gap-6 sm:flex-row">
        
        {/* Avatar */}
        <div className="shrink-0">
          <img
            src={userdata?.avatar_url || octocat}
            alt={userdata?.name || "GitHub user"}
            className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28"
          />
        </div>

        {/* User Info */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                {userdata?.name || "Name is not available"}
              </h2>

              <h3 className="mt-1 text-blue-400">
                @{userdata?.login || "username is not available"}
              </h3>
            </div>

            <p className="mt-2 text-sm text-slate-400 sm:mt-0">
              Joined recently
            </p>
          </div>

          <p className="mt-5 leading-relaxed text-slate-300">
            {userdata?.bio || "Bio is not available"}
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-6 grid grid-cols-3 rounded-xl bg-zinc-700 p-5 text-center">
        
        <div>
          <h3 className="text-sm text-slate-400">
            Public Repositories
          </h3>
          <p className="mt-1 text-xl font-bold">
            {userdata?.public_repos ?? 0}
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-400">
            Followers
          </h3>
          <p className="mt-1 text-xl font-bold">
            {userdata?.followers ?? 0}
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-400">
            Following
          </h3>
          <p className="mt-1 text-xl font-bold">
            {userdata?.following ?? 0}
          </p>
        </div>

      </div>

      {/* Additional Information */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:flex sm:justify-center items-center ">

        {/* Location */}
        <div className="flex items-center gap-3">
          <img
            src={location_icon}
            alt="Location"
            className="h-5 w-5"
          />
          <p className="truncate text-slate-300">
            {userdata?.location || "Not available"}
          </p>
        </div>

        {/* Twitter */}
        <div className="flex items-center gap-3">
          <img
            src={twitter_icon}
            alt="Twitter"
            className="h-5 w-5"
          />
          <p className="truncate text-slate-300">
            {userdata?.twitter_username || "Not available"}
          </p>
        </div>

        {/* Website */}
        <div className="flex items-center gap-3">
          <img
            src={website_icon}
            alt="Website"
            className="h-5 w-5"
          />
          <p className="truncate text-slate-300">
            {userdata?.blog || "Not available"}
          </p>
        </div>

        {/* Company */}
        <div className="flex items-center gap-3">
          <img
            src={company_icon}
            alt="Company"
            className="h-5 w-5"
          />
          <p className="truncate text-slate-300">
            {userdata?.company || "Not available"}
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProfileCard;