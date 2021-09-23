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
            <div className="col-xl-4 col-lg-6 col-sm-12 projects">
              <div key="{project.id}" className="project-card blue-in-button">
                <Link
                  className="blue-out-button link"
                  to={`/project/${project.id}`}
                >
                  {project.name}
                </Link>
                <div className="blue-in-button short-descrip">
                  {project.short_descrip}
                </div>
                <a
                  href={project.github}
                  className="blue-out-button logo-link left"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="github"></img>
                </a>
                <a
                  href={project.live}
                  className="blue-out-button logo-link right"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img id="live" src={live} alt="live"></img>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
