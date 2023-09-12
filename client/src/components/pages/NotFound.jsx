import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <FaExclamationTriangle className="text-danger" size={"6em"} />
      <h1 className="my-4">404</h1>
      <p className="lead fw-normal">
        Sorry the page you are looking for doesn't Exisit.!
      </p>
      <Link
        to={"/"}
        className="btn btn-light my-4 shadow border px-4 py-2 fs-5 fw-bold"
      >
        Go Back
      </Link>
    </div>
  );
};
