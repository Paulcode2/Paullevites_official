import React from "react";
import "./port.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Using placeholder images - replace with actual project screenshots
import project1Img from "../../assets/TFAWE.jpg";
import project2Img from "../../assets/Wholistic3.png";

const Port = () => {
  const projects = [
    {
      title: "TFAWE",
      // description:
      //   "A stunning e-commerce platform for a Canadian-based fashion brand.",
      image: project1Img,
      demo: "https://tfawecustom.com/",
      // github: "https://github.com/Paulcode2/User-Authentication",
    },
    {
      title: "Wholistic",
      // description:
      //   "An EdTech platform helping young people access quality education.",
      image: project2Img,
      demo: "https://wholisticeduconsult.com/",
      // github: "https://github.com/Paulcode2",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project, index) => (
          <article key={index} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={project.image} alt={project.title} />
              <div className="portfolio__item-overlay">
                <a
                  href={project.demo}
                  rel="noreferrer"
                  target="_blank"
                  className="btn"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <FaGithub /> Code
                  </a>
                )}
              </div>
            </div>
            <div className="portfolio__item-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="portfolio__more">
        <a
          href="https://github.com/Paulcode2"
          rel="noreferrer"
          target="_blank"
          className="btn"
        >
          View More on GitHub
        </a>
      </div>
    </section>
  );
};

export default Port;
