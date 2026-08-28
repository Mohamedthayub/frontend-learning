import { useLoaderData, Link } from "react-router-dom";

const Jobs = () => {
    const usersData = useLoaderData();
    return (
        <div>
            {console.log(usersData)}
        </div>
    );
};

export default Jobs;

export const getUsers = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/users');
    const data = await response.json();
    return data;
}


