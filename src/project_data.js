export const data = [
  {
    id: 1,
    name: "Quizlet Clone",
  
    long_descrip:
      "Building a clone of the popular study web application called Quizlet. I used a microservices architecture to keep the different services independent of each other. Built a custom npm package for defining errors and middleware. Leveraged Docker, Kubernetes and Google Cloud Platform to run separate containers and NATS streaming server to communicate across services. Functionalities include create, read, update different resources like terms, sets and classes, creating tests for users to study, and user authentication",
    github: "https://github.com/oliviaflexx/quizlet-clone",
    live: "",
    techs: [
      "Backend: Typescript, NodeJS, Express, MongoDB, Docker, Kubernetes, Google Cloud Platform, NATS streaming server, JSON web tokens, Jest, Supertest",
      "Frontend: Javascript, NextJS, Axios, Styled Components",
    ],
  },
  {
    id: 2,
    name: "MATC English Department Website",

    long_descrip:
      "Currently working on a web application for the Milwaukee Area Technical College English department. The site is split into two different parts, one component to show off the department and the other component is for faculty in the department to access important documents. Creating the ability for admin users only to create, update and delete resources on the site.",
    github: "",
    live: "",
    techs: [
      "Backend: Typescript, NodeJS, Express, MongoDB, JSON web token, Jest, Supertest",
      "Frontend: Javascript, React, Axios, CSS, Cloudinary API",
    ],
  },
  {
    id: 3,
    name: "SpotifyMapp",

    long_descrip:
      "SpotifyMapp is a web app that allows users to add their favorite songs to a specific location in Montreal. Functionalities include registration, login, logout, adding songs to locations on a map, liking songs, leaving reviews of songs. I used Spotify's API because they have a cool embed feature so users can easily play the songs directly on the web app.",
    github: "https://github.com/oliviaflexx/spotifymapp",
    live: "https://spotifymapp.herokuapp.com/",
    techs: [
      "Backend: NodeJS, Javascript, MongoDB, Express, npm",
      "Frontend: EJS, Boostrap, CSS",
      "Deployed: Heroku",
    ],
  },
  {
    id: 4,
    name: "Milisti",

    long_descrip:
      "Full stack web app that lets users add ingredients they have at home and then finds recipes that best match. I started this project by web scraping BudgetBytes.com to get all of their recipes with their ingredients, calories, time and categories. I then cleaned the data to get rid of all the duplicates so it could fit nicely into a relational database. I learnd so much from this project about using AJAX to make async request and handling requests, interacting with the SQL database on the backend and deploying a full stack app onto a live server.",
    github: "https://github.com/oliviaflexx/recipe",
    live: "https://milisti.herokuapp.com/",
    techs: [
      "Backend: Python, Django, PostgresSQL, Selenium",
      "Frontend: Javascript, JQuery, HTML, CSS",
      "Deployed: Heroku",
    ],
  },
  {
    id: 5,
    name: "Mental Health Chat App",

    long_descrip:
      "Full stack app that allows users to create rooms for topics about mental heatlh and talk to other people anonymously and securely. Bi-directional real time messaging enabled by Socket.IO and message encryption done on client side using aes256.",
    github: "https://github.com/oliviaflexx/chat_app",
    live: "https://mental-health-chat.herokuapp.com/",
    techs: [
      "Backend: Javascript, NodeJS, MongoDB and Express, Socket.IO",
      "Frontend: React, CSS, Socket.IO, Axios",
      "Deployed: Heroku",
    ],
  },
  {
    id: 6,
    name: "craigfelix.com",
    tech: ["HTML", "CSS", "Javascript"],
    long_descrip:
      "Static photography and videography portfolio website for a client (my dad). I first made the site with vanilla Javascript but then decided to recreate it using React to make it's performance faster and utilize the Cloudinary API to host the images and videos.",
    github: "https://github.com/oliviaflexx/craigfelix-reboot",
    live: "http://www.craigfelix.com/index.html",
    techs: [
      "Frontend: Javascript, React, Cloudinary API, HTML, CSS",
      "Deployed: Netlify",
    ],
  },
  {
    id: 7,
    name: "dahnjohnson.com",

    long_descrip: "Portfolio website for a videographer/social media marketer.",
    github: "https://github.com/oliviaflexx/dahnjohnson",
    live: "http://www.dahnjohnson.com/",
    techs: ["Frontend: HTML, CSS, Javascript", "Deployed: AWS"],
  },
  {
    id: 8,
    name: "Online Exam Timer",

    long_descrip:
      "This is my first ever web project. The web app takes user input about how long the exam is and how many questions it has and then calculates how much time per question the user should take in order to finish on time. Then it shows the timer ticking down and what question the user should be on. There is also a manual option where the user can click next question so the timer shows an updated timer depending on how many questions are left and how much time is left.",
    github: "https://github.com/oliviaflexx/exam-timer",
    live: "https://exam-timer.herokuapp.com",
    techs: [
      "Backend: Python, Flask",
      "Frontend: HTML, CSS, Javascript",
      "Deployed: Heroku",
    ],
  },
];

