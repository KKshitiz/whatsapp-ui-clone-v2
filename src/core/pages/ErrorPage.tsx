import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  const error = useRouteError() as { message: string };

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>This page doesn't exist!</div>;
    }

    if (error.status === 401) {
      return <div>You aren't authorized to see this</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }
  }

  return (
    <div className={styles["error-page"]}>
      <h1>Oops</h1>
      <h3>{error.message}</h3>
    </div>
  );
};
export default ErrorPage;
