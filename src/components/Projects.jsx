import React from "react";
import project from "./Data/projects.json";

function Projects() {
  return (
    <>
      <div className="container projects my-5">
        <h1 className="text-center mb-4">PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => (
            <div key={data.id} className="col-sm-6 col-md-4 col-lg-4 my-3">
              <div className="card bg-dark text-light" style={{ border: "1px solid yellow", boxShadow: "5px 5px 10px 10px rgba(101,175,10,0.5)" }}>
                <div className="img d-flex justify-content-center align-content-center p-3">
                  <img src={data.imageSrc} className="card-img-top" alt={data.title} style={{ width: "100%", height: "200px", borderRadius: "10px" }} />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <a href={data.demo} className="btn btn-primary mx-2">
                    Demo
                  </a>
                  <a href={data.source} className="btn btn-warning mx-2">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
