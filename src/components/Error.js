import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="error">
      <h1>Oops!!!...Something went wrong</h1>
      <h2>{error.statusText || error.message}</h2>
    </div>
  );
};
export default Error;
