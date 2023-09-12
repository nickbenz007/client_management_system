import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PROJECTS } from "./queries/projectQueries";
import { GET_CLIENTS } from "./queries/clientQueries";
import { ADD_PROJECT } from "./mutations/projectMutations";

export const AddProjectModal = () => {
  const [name, setName] = useState("");
  const [clientId, setClientId] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("new");

  //    ADD PROJECT
  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, status, clientId },
    // update(cache, { data: { addProject } }) {
    //   const { projects } = cache.readQuery({ query: GET_PROJECTS });
    //   cache.writeQuery({
    //     query: GET_PROJECTS,
    //     data: { projects: [...projects, addProject] },
    //   });
    // },
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  //    GET CLIENTS for Selection in option
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) {
    return null;
  }

  if (error) {
    return <p>Error occured while fetching Clients</p>;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || description === "" || status === "") {
      return alert({ message: "Please fill all the fields" });
    }
    addProject(name, description, status, clientId);
    setName("");
    setDescription("");
    setStatus("new");
    setClientId("");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-dark my-3 rounded-2"
        data-bs-toggle="modal"
        data-bs-target="#AddProjectModal"
      >
        <div className="d-flex align-items-center justify-center text-center">
          <FaList className="icon" />
          <span className="fs-6 fw-bold text-center">Add Project</span>
        </div>
      </button>
      <div
        className="modal fade"
        id="AddProjectModal"
        tabIndex="-1"
        aria-labelledby="AddProjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="AddProjectModalLabel">
                New Project
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Project Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    className="form-control"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="new">Not Started</option>
                    <option value="progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-lable">Client</label>
                  <select
                    className="form-control"
                    id="clientId"
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                  >
                    <option value="">Select client</option>
                    {data.clients.map((client) => (
                      <option key={client.id} value={client.id}>
                        {client.name}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark my-4 px-4"
                  data-bs-dismiss={"modal"}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
