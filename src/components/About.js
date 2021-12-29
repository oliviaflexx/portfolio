import React from "react";
// import headshot from './headshot.jpeg'

function About(props) {
  return (
    <section className="main">
      <h1 className="title">About me</h1>
      <div className="row about">
        {/* <div className="col-12 col-lg-4">
          <div className="blue-in-button heady">
            <img id="headshot" src={headshot} alt="headshot"></img>
            <p className="blue-in-button">Hi, I'm Olivia!</p>
          </div>
        </div> */}
        <div className="col-12 col-lg-12 about">
          <div className="blue-in-button about-text">
            Although my major at McGill is psychology, I was curious about coding so I took
            Harvard’s CS50 course online and immediately became addicted. I love the problem solving aspect of programming and I'm so grateful for that fact that there are infinite resources available online to learn whatever I want.
            The way I've learned web development is not just by reading tutorials and following online courses, but by building my own unique projects and trying to figure it out myself. Running into so many seemingly impossible errors and problems to solve has taught me
            that with enough effort, patience and passion I can meet any challenge that comes my way.
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
