import React from "react";
import linkedin from "./linkedin.svg";
import github from "./github-contact.svg";
import email from "./email.svg";

function Contact(props) {
  return (
    <section className="main">
      <h1 className="title">Contact</h1>
      <div className="pink-in-button contact">
        <h4>
          I'm currently seeking full time Full Stack Engineering opportunities. Please don't hesitate to contact me if you are interested in my work or skills!
        </h4>
        <a
          href="https://linkedin.com/in/olivia-felix"
          className="pink-out-button contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
          <img id="linkedin" src={linkedin} alt="linkedin logo"></img>
        </a>
        <a
          href="https://github.com/oliviaflexx"
          className="pink-out-button contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <img id="github" src={github} alt="github logo"></img>
        </a>
        <a
          href="mailto:oliviafelix360@gmail.com"
          className="pink-out-button contact-link"
        >
          Email
          <img id="email" src={email} alt="email logo"></img>
        </a>
      </div>
    </section>
  );
}

export default Contact;
