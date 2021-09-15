import React from "react";
import headshot from './headshot.jpeg'

function About(props) {
  return (
    <section className="main">
      <h1 className="title">About me</h1>
      <div className="row about">
        <div className="col-12 col-lg-4">
          <div className="blue-in-button heady">
            <img id="headshot" src={headshot} alt="headshot"></img>
            <p className="blue-in-button">Hi, I'm Olivia!</p>
          </div>
        </div>
        <div className="col-12 col-lg-8 about">
          <div className="blue-in-button about-text">
            I’m a psych major at McGill University but in my third year I found
            an interest in programming. I was curious about coding so I took
            Harvard’s CS50 course online and immediately became addicted. Since
            then I’ve just been learning new tech, adding to my knowledge of the
            same tech and building as many projects as I can to apply that
            knowledge in a real way. Thanks for taking the time to see a bit of
            what I do!
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
