import React, { useState, useEffect } from "react";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFolder,
  AiOutlineMail,
} from "react-icons/ai";

const Nav = () => {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = ["home", "about", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActive(`#${section}`);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { icon: <AiOutlineHome />, link: "#home", label: "Home" },
    { icon: <AiOutlineUser />, link: "#about", label: "About" },
    // { icon: <AiOutlineBook />, link: '#experience', label: 'Experience' },
    { icon: <AiOutlineFolder />, link: "#portfolio", label: "Portfolio" },
    { icon: <AiOutlineMail />, link: "#contact", label: "Contact" },
  ];

  const handleClick = (link) => {
    setActive(link);
    setMenuOpen(false);
    document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`nav ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
    >
      <div className="nav__container">
        <div className="nav__logo">
          <a href="#home">PL</a>
        </div>

        <div
          className="nav__menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`menu-bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`menu-bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`menu-bar ${menuOpen ? "open" : ""}`}></span>
        </div>

        <ul className={`nav__links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className={active === item.link ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.link);
                }}
              >
                <span className="nav__icon">{item.icon}</span>
                <span className="nav__label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
