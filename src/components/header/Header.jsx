import React, { useEffect, useState } from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/Main  (1).jpeg";
import Socials from "./Headersocials";

const Header = () => {
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <header
      style={{
        "--mouse-x": mousePosition.x + "px",
        "--mouse-y": mousePosition.y + "px",
      }}
    >
      <div className="header__bg-gradient"></div>
      <div className="header__particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>

      <div className={`container header__container ${loaded ? "loaded" : ""}`}>
        <div className="header__content">
          <h5 className="header__greeting">Hello, I'm</h5>
          <h1 className="header__name">Paul Levites,</h1>
          <h5 className="header__title">A Frontend Developer.</h5>
          <div className="header__description">
            <p>
              Building beautiful, responsive, and performant web experiences
            </p>
          </div>
          <CTA />
        </div>

        <div className="header__visual">
          <Socials />
          <div className="me">
            <div className="me__glow"></div>
            <img src={Me} alt="Paul Levites" />
            <div className="me__ring"></div>
          </div>
        </div>

        <a href="#about" className="scroll__down">
          <span>Scroll Down</span>
          <div className="scroll__arrow"></div>
        </a>
      </div>
    </header>
  );
};

export default Header;
