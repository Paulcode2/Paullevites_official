import React, { useEffect, useRef } from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaCode, FaPencilRuler } from "react-icons/fa";

const Exp = () => {
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

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const frontendSkills = [
    { name: "HTML", level: "Expert" },
    { name: "CSS", level: "Expert" },
    { name: "JavaScript", level: "Advanced" },
    { name: "SCSS/Sass", level: "Advanced" },
    { name: "React JS", level: "Advanced" },
    { name: "Firebase", level: "Intermediate" },
    { name: "WordPress", level: "Advanced" },
  ];

  const otherSkills = [
    { name: "Videography", level: "Intermediate" },
    { name: "Photography", level: "Intermediate" },
    { name: "UI/UX Design", level: "Intermediate" },
    { name: "Problem Solving", level: "Advanced" },
  ];

  return (
    <section id="experience" ref={sectionRef}>
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container container__experience">
        <div className="experience__card animate-on-scroll">
          <div className="experience__card-header">
            <div className="experience__card-icon">
              <FaCode />
            </div>
            <h3>Frontend Development</h3>
          </div>

          <div className="experience__content">
            {frontendSkills.map((skill, index) => (
              <article
                key={index}
                className="experience__details"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BsFillPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__card animate-on-scroll">
          <div className="experience__card-header">
            <div className="experience__card-icon">
              <FaPencilRuler />
            </div>
            <h3>Other Skills</h3>
          </div>

          <div className="experience__content">
            {otherSkills.map((skill, index) => (
              <article
                key={index}
                className="experience__details"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BsFillPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exp;
