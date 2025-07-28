import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Error Occurred</h1>
      {error && (
        <p>Error: {JSON.parse(error.data).message || "Unknown error"}</p>
      )}
      <p>Status: {error.status || "Unknown status"}</p>
    </div>
  );
}

export default ErrorPage;
