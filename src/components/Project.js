import React, { useState, useEffect } from "react";
import { data } from "../project_data";
import { useParams } from "react-router-dom";
import github from "./github.svg";
import live from "./live.svg";

const Project = () => {
  const [project, setProject] = useState('default project');
  const [techs, setTechs] = useState("default tech");
  const { id } = useParams();

  useEffect(() => {
    const newProject = data.find((project) => project.id === parseInt(id));
    setProject(newProject);
    console.log('RAN USEFFECT')
    console.log("RAN USEFFECT", project);
    setTechs(newProject.tech.map(function (tech, index) {
      return (
        <p key={index} className="individual-tech">
          {tech}
        </p>
      );
    }))
  }, [id, project]);

  return (
    <section className="main">
      <h1 className="title">{project.name}</h1>
      <div className="row project">
        <div className="col-12 col-lg-8">
          <div className="pink-in-button big-div">
            <div className="pink-in-button descrip">{project.long_descrip}</div>
            <a href={project.github} className="pink-out-button code">
              View Code
              <img class="project-logo" src={github} alt="github-logo"></img>
            </a>
            <a href={project.live} className="pink-out-button live">
              View Live
              <img
                class="project-logo"
                src={live}
                alt="live-logo"
                id="live"
              ></img>
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="pink-in-button tech">
            <div className="pink-in-button tech-title">Tech Used</div>
            <div className="pink-in-button tech-stack">
              {techs}
              {console.log("HTML")}
              {console.log("HTML", project)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
