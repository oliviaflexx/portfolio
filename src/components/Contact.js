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
          I’m open to working at internships, freelancing or working
          collaboratively with other developers
        </h4>
        <a
          href="https://linkedin.com/in/olivia-felix-b03586205"
          className="pink-out-button contact-link"
        >
          LinkedIn
          <img id="linkedin" src={linkedin} alt="linkedin logo"></img>
        </a>
        <a
          href="https://github.com/oliviaflexx"
          className="pink-out-button contact-link"
        >
          GitHub
          <img id="github" src={github} alt="github logo"></img>
        </a>
        <a
          href="mailto:oliviaflexx@gmail.com"
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
