import React, { useState, useEffect } from "react";
import { data } from "../data";
import { Link, useParams } from "react-router-dom";

const Project = () => {
  const [name, setName] = useState("default name");
  const { id } = useParams();

  useEffect(() => {
    const newProject = data.find((project) => project.id === parseInt(id));
    setName(newProject.name);
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <Link to="/projects" className="btn">
        Back To Projects
      </Link>
    </div>
  );
};

export default Project;
