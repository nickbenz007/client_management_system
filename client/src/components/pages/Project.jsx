import { useParams, Link } from "react-router-dom";
import { Spinner } from "../Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import { ClientInfo } from "../ClientInfo";
import { DeleteProjectButton } from "../DeleteProjectButton";
import { EditProjectForm } from "../EditProjectForm";

export const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Oops something went wrong</p>;
  }

  return (
    <>
      {!loading && !error && (
        <div className="card w-75 mx-auto p-5 mt-5">
          <Link
            to={"/"}
            className="btn btn-light fs-6 fw-bold btn-sm w-25 border py-2 my-4 rounded d-inline ms-auto"
          >
            Back
          </Link>
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>
          <h5 className="mt-5">Project Status:</h5>
          <p className="lead">{data.project.status}</p>
          <ClientInfo client={data.project.client} />
          <EditProjectForm project={data.project} />
          <DeleteProjectButton projectId={data.project.id} />
        </div>
      )}
    </>
  );
};
