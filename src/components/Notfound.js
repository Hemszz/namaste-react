import { useRouteError } from "react-router-dom";

const NotFound = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>{err.status} : {err.statusText}</p>
        </div>
    )
}

export default NotFound;