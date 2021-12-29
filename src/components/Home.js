import React from "react";
import { motion } from 'framer-motion';
import {skills} from "../skills";

function Home(props) {
  return (
    <section className="main">
      <div className="row">
        <motion.h2
          className="home"
          initial={{ x: -650, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: "2",
            delay: "1",
          }}
        >
          Hi, my name is
        </motion.h2>
        <motion.h1
          className="home"
          initial={{ scale: 0.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "tween",
            duration: "2",
            delay: "1",
          }}
        >
          Olivia Felix
        </motion.h1>
      </div>
      <div className="row home">
        <motion.div
          className="col-12 col-sm-6 black-in-button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "tween",
            duration: "2",
            delay: "2",
          }}
        >
          I love making websites and web applications.
          <br></br>
          Welcome to my portfolio!
        </motion.div>
      </div>
      <h1 className="top">Tech I love using!
      </h1>
      <div className="row skills">
        <h2>Backend</h2>
        {skills.backend.map((skill) => {
          return (
            <div className="skill-container">
              <img className="skill" src={skill.svg} alt={skill.title}></img>
            </div>
          );
        })}
      </div>
      <div className="row skills">
        <h2>Frontend</h2>
        {skills.frontend.map((skill) => {
          return (
            <div className="skill-container">
              <img className="skill" src={skill.svg} alt={skill.title}></img>
            </div>
          );
        })}
      </div>
      <div className="row skills">
        <h2>Databases</h2>
        {skills.databases.map((skill) => {
          return (
            <div className="skill-container">
              <img className="skill" src={skill.svg} alt={skill.title}></img>
            </div>
          );
        })}
      </div>
      <div className="row skills">
        <h2>DevOps</h2>
        {skills.devOps.map((skill) => {
          return (
            <div className="skill-container">
              <img className="skill" src={skill.svg} alt={skill.title}></img>
            </div>
          );
        })}
      </div>
      <div className="row skills">
        <h2>Tools</h2>
        {skills.tools.map((skill) => {
          return (
            <div className="skill-container">
              <img className="skill" src={skill.svg} alt={skill.title}></img>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Home;
