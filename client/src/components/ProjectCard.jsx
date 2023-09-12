import React from "react";

export const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <span className="fs-4 fw-bold">{project.name}</span>
            <a
              href={`/projects/${project.id}`}
              className="btn btn-light border shadow-sm fs-6 fw-bold px-4"
            >
              View
            </a>
          </div>
          <p className="small">
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
