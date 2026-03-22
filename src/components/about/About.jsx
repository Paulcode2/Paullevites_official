import React, { useEffect, useRef } from "react";
import "./about.css";
import Me from "../../assets/pic 1.jpg";
import { BiTime } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { AiFillFolderOpen } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    // Make section itself visible when scrolled into view
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me animate-on-scroll">
          <div className="about__me-wrapper">
            <div className="about__me-image">
              <img src={Me} alt="About-img" />
            </div>
            <div className="about__me-decoration"></div>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards animate-on-scroll">
            <article className="about__card">
              <div className="about__card-icon">
                <BiTime />
              </div>
              <h5>Experience</h5>
              <small>4+ years</small>
            </article>
            <article className="about__card">
              <div className="about__card-icon">
                <AiFillFolderOpen />
              </div>
              <h5>Github</h5>
              <small>
                <a
                  href="https://github.com/paulcode2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Me
                </a>
              </small>
            </article>
            <article className="about__card">
              <div className="about__card-icon">
                <FiUsers />
              </div>
              <h5>Projects</h5>
              <small>
                <a
                  href="https://linktr.ee/paullevites"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Me
                </a>
              </small>
            </article>
          </div>

          <div className="about__text animate-on-scroll">
            <p>
              I am a Dedicated and detail-oriented Frontend Engineer with years
              of experience in Web development and frontend technologies. With a
              goal to solve tech related problems in various institutions of the
              world.
            </p>
            <p className="about__text-highlight">
              My zeal to solve problems has resulted in me working on various
              projects, as well as consulting for tech startups and Educational
              bodies.
            </p>
          </div>

          <a
            href="#contact"
            className="btn btn-primary about__cta animate-on-scroll"
          >
            Let's Talk
            <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
