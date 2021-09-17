export const data = [
  {
    id: 1,
    name: "SpotifyMapp",
    short_descrip:
      "Full stack web app that shows what songs people listen to and where they listen to them",
    tech: ["Node.js", "Javascript", "MongoDB", "Bootstrap"],
    long_descrip:
      "Functionalities include registration, login, logout, adding songs to locations on a map, liking songs, leaving reviews of songs. I used Spotify's API because they have a cool embed feature so users can easily play the songs directly on the site. This is my first time working with Node.js and Mongo.db",
    github: "https://github.com/oliviaflexx/spotifymapp",
    live: "https://spotifymapp.herokuapp.com/",
  },
  {
    id: 2,
    name: "Milisti",
    short_descrip:
      "Full stack web app that lets users add their ingredients and then finds recipes that best match",
    tech: ["Python", "Django", "Javascript", "PostgresSQL", "Web scraping"],
    long_descrip:
      "I started this project by web scraping BudgetBytes.com to get all of their recipes, ingredients, calories, time and categories. I then cleaned the data to get rid of all the duplicates so it could fit nicely into a relational database. I learnd so much from this project aboutSQL databases, using AJAX to make async request and handling requests and interacting with the database on the backend and deploying a full stack app onto a live server.",
    github: "https://github.com/oliviaflexx/recipe",
    live: "https://milisti.herokuapp.com/",
  },
  {
    id: 3,
    name: "craigfelix.com",
    short_descrip: "Static photography and videography portfolio website",
    tech: ["HTML", "CSS", "Javascript"],
    long_descrip:
      "I offered to make this site for my dad to show off his photography and drone videography skills. I decided to make it with only pure HTML, CSS and JS to really make sure I have the foundations solid in those languages before I move on to a framework like React. I also learned how to deploy using AWS and getting a domain name and linking it to a site",
    github: "https://github.com/oliviaflexx/craigfelix-reboot",
    live: "http://www.craigfelix.com/index.html",
  },
  {
    id: 4,
    name: "dahnjohnson.com",
    short_descrip: "Static videography portfolio website",
    tech: ["HTML", "CSS", "Javascript"],
    long_descrip: "This is a simple static porfolio site for a client. He told almost exactly me what kind of design he wanted and this is the final result. This project gave me more practice with deploying on AWS and linking domain names.",
    github: "https://github.com/oliviaflexx/dahnjohnson",
    live: "http://www.dahnjohnson.com/",
  },
  {
    id: 5,
    name: "Online Exam Timer",
    short_descrip: "Dynamic timer for online exams",
    tech: ["Python", "Flask", "Javascript"],
    long_descrip: "This is my first ever web project. It asks how long the exam is and how many questions it has and calculates how much time per question the user should take. Then it shows the timer ticking down and what question the user should be on. There is also a manual option where the user can click next question so the timer shows an updated timer depending on how many questions are left and how much time is left.",
    github: "https://github.com/oliviaflexx/exam-timer",
    live: "https://exam-timer.herokuapp.com",
  },
];

