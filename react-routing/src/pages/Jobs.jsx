import { useLoaderData,Link } from "react-router-dom";
const Jobs = () => {
    const jobsData = useLoaderData();
    return (
        <div className="jobs-list-container">
            {
                jobsData.map((job) => {
                    return <Link className="job-item" to={`/jobs/${job.id}`} key={job.id}> 
                    <h3 className="job-title">{job.title}</h3>
                    <p className="job-location">{job.location}</p>
                    </Link>
                })
            }
        </div>
    )

}
export default Jobs;

export const jobsLoader = async () => {
    const res = await fetch("http://localhost:5000/jobs");
    return res.json();
}
