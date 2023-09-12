import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "./mutations/clientMutations";
import { GET_CLIENTS } from "./queries/clientQueries";
import { GET_PROJECTS } from "./queries/projectQueries";

export const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });
  return (
    <>
      <tr>
        <td className="align-middle">{client.name}</td>
        <td className="align-middle">{client.email}</td>
        <td className="align-middle">{client.phone}</td>
        <td>
          <button
            onClick={deleteClient}
            className="btn btn-danger btn-lg border rounded-3 shadow-sm"
            style={{
              paddingInline: 10,
            }}
          >
            <FaTrash />
          </button>
        </td>
      </tr>
    </>
  );
};
