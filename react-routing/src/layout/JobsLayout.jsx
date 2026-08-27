import { Outlet } from "react-router-dom";
const JobsLayout = () => {
    return (
        <div>
            <div className="job-title">
                <h1>Job Openings</h1>
                <p>List of current  job opening in our company</p>
            </div>
            <Outlet/>
        </div>
    )
}
export default JobsLayout;