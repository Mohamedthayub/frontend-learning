import { useLoaderData } from "react-router-dom";
const JobDetails = () => {
    const jobDetailsData = useLoaderData();
    return (
        <div className="job-item">
            <h3 className="job-title">Job Tittle : {jobDetailsData.title}</h3>
            <p className="job-location">Job Location : {jobDetailsData.location}</p>
            <p className="job-salary">Job Salary : {jobDetailsData.salary}</p>
            <p className="job-description">{jobDetailsData.description}</p>
        </div>
    )
}
export default JobDetails;


export const jobDetailsLoader = async ({params}) => {
    const {id} = params;
    const res = await  fetch("http://localhost:5000/jobs/"+id);
    if(!res.ok){
        throw Error("could not find the page");
    }
    return res.json();
}
