import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>An error occured</h1>
            <p>{error.message}</p>
        </div>
    )
}
export default Error;