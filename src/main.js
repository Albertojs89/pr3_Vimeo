// src/main.js

import "./styles/bootstrap.scss";
import "./styles/custom.scss";

//efecto cortina reveal de las secciones

const sections = document.querySelectorAll(".article2");

const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  threshold: 0.2,
});

sections.forEach((article2) => {
  sectionObserver.observe(article2);
});