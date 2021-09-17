import React from "react";
import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';

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
          initial={{opacity: 0 }}
          animate={{opacity: 1 }}
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
    </section>
  );
}

export default Home;
