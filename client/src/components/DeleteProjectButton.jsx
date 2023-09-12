import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GET_PROJECTS } from "./queries/projectQueries";
import { DELETE_PROJECT } from "./mutations/projectMutations";
import { useMutation } from "@apollo/client";

export const DeleteProjectButton = ({ projectId }) => {
  const navigate = useNavigate();
  console.log(projectId, "This is Project ID");

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className="d-flex mt-5 ms-auto">
      <button
        className="btn btn-danger m-2 fs-6 fw-bold"
        onClick={deleteProject}
      >
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
};
