import React from "react";
import Experience from "./Experience";

interface ProjectInt {
  route: boolean;
}

const Project: React.FC<ProjectInt> = ({ route }) => {
  return (
    <>
      {route && <Experience />}
      <div className="container text-center mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg border-0">
              <div className="card-body py-5">
                <h2 className="card-title fw-bold">🚀 Projects Coming Soon!</h2>
                <p className="card-text text-muted">
                  I'm currently working on my own project. Stay tuned for
                  exciting updates in this section!
                </p>
                <button className="btn btn-primary" disabled>
                  <i className="fas fa-spinner fa-spin"></i> In Progress
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
