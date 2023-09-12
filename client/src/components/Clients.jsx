import { useQuery } from "@apollo/client";
import { Spinner } from "./Spinner";
import { ClientRow } from "./ClientRow";
import { GET_CLIENTS } from "./queries/clientQueries";

export const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>Oops something went wrong.~:</p>;
  }

  return (
    <>
      {!loading && !error && (
        <table className="table table-striped table-hover shadow-sm">
          <thead className="border">
            <tr>
              <th className="py-4" scope="col">
                Name
              </th>
              <th className="py-4" scope="col">
                Email
              </th>
              <th className="py-4" scope="col">
                Phone
              </th>
              <th className="py-4" scope="col"></th>
            </tr>
          </thead>
          <tbody className="table table-bordered border rounded">
            {data.clients.map((client) => {
              return <ClientRow key={client.id} client={client} />;
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
