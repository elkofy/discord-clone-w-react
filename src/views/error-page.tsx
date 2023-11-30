import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError() as Record<string, never>;

    return (
        <div id="error-page">
            <h1>Désolé!</h1>
            <p className="text-7xl" >Cette page n'existe pas 😔</p>
            <p >
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}