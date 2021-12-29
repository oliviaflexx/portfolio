import React, { useState} from "react";
import { data } from "../project_data";
import { Link } from "react-router-dom";
import github from "./github.svg";
import live from "./live.svg";

function Projects(props) {
  const [projects] = useState(data);
  return (
    <section className="main">
      <h1 className="title">Projects</h1>
      <div className="row projects">
        {projects.map( (project) => {
          return (
            <div className="col-12 col-lg-12">
              <div className="blue-in-button big-div">
                <div className="blue-out-button link">{project.name}</div>
                <div className="blue-in-button descrip">
                  {project.long_descrip}
                </div>
                <div className="blue-in-button descrip">
                  <h5>
                    <b>Tech used:</b>
                  </h5>
                  {project.techs.map(function (tech, index) {
                    return (
                      <p key={index} className="individual-tech">
                        {tech}
                      </p>
                    );
                  })}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    className="pink-out-button code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                    <img
                      className="project-logo"
                      src={github}
                      alt="github-logo"
                    ></img>
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    className="pink-out-button live"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                    <img
                      className="project-logo"
                      src={live}
                      alt="live-logo"
                      id="live"
                    ></img>
                  </a>
                )}
              </div>
            </div>
            // <div className="col-xl-4 col-lg-6 col-sm-12 projects">
            //   <div key="{project.id}" className="project-card blue-in-button">
            //     <Link
            //       className="blue-out-button link"
            //       to={`/project/${project.id}`}
            //     >
            //       {project.name}
            //     </Link>
            //     <div className="blue-in-button short-descrip">
            //       {project.short_descrip}
            //     </div>
            //     <a
            //       href={project.github}
            //       className="blue-out-button logo-link left"
            //       target="_blank"
            //       rel="noopener noreferrer"
            //     >
            //       <img src={github} alt="github"></img>
            //     </a>
            //     <a
            //       href={project.live}
            //       className="blue-out-button logo-link right"
            //       target="_blank"
            //       rel="noopener noreferrer"
            //     >
            //       <img id="live" src={live} alt="live"></img>
            //     </a>
            //   </div>
            // </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
