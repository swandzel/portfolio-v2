import WinePairing from "../assets/images/wine-pairing.webp";
import NextFitnessApp from "../assets/images/next-fitness-app.webp";
import SebsCafe from "../assets/images/sebs-cafe.webp";

export const projects = [
  {
    id: 1,
    title: "Wine Pairing App & API",
    about:
      "Wine Pairing App helps people choose the right wine for their meal. This is version 2.0 where I added my own API built with Node/Express and MongoDB. Types of food available in the database: pizza, pork, lamb, beef, burger, chicken, white fish, salad, cake. The first request may take up to 10 seconds because the API is hosted on free Heroku.",
    technologies: "React, CSS, Express, MongoDB",
    image: WinePairing,
    code: "https://github.com/swandzel/wine-pairing-app/",
    live: "https://wine-pairing-app.netlify.app/",
  },
  {
    id: 2,
    title: "Fitness App Landing Page",
    about: `Landing page for fake fitness app called NEXT. Inspired by real websites of real apps like FitOn, Sworkit, MapMyFitness.`,
    technologies: "React, Sass, Framer Motion",
    image: NextFitnessApp,
    code: "https://github.com/swandzel/fitness-app-landing/",
    live: "https://fitness-app-landing.netlify.app/",
  },
  {
    id: 3,
    title: "Seb's Cafe",
    about: `Website page for fake cafe called Seb's Cafe.`,
    technologies: "Vue 3, Sass, Vue-Router",
    image: SebsCafe,
    code: "https://github.com/swandzel/sebs-cafe-vue3/",
    live: "https://sebs-cafe.netlify.app/",
  },
];
