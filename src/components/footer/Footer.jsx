import React from "react";
import "./footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaFacebook />,
      link: "https://facebook.com/paul.Levite.73/",
      label: "Facebook",
    },
    {
      icon: <FaTwitter />,
      link: "https://X.com/curlyhair_dev",
      label: "Twitter",
    },
    {
      icon: <FaInstagram />,
      link: "https://instagram.com/curlyhair_dev",
      label: "Instagram",
    },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/paul-levites",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/paulcode2",
      label: "GitHub",
    },
  ];

  const quickLinks = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Experience", link: "#experience" },
    { label: "Portfolio", link: "#portfolio" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <footer id="footer">
      <div className="footer__bg">
        <div className="footer__wave"></div>
      </div>

      <div className="container footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <h3>Paul Levites</h3>
            <p>
              A passionate Frontend Developer creating beautiful web
              experiences.
            </p>
          </div>

          <div className="footer__quick-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__social">
            <h4>Connect</h4>
            <div className="social__links">
              {socialLinks.map((social, index) => (
                <a
                  href={social.link}
                  rel="noreferrer"
                  target="_blank"
                  aria-label={social.label}
                  key={index}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} Paul Levites. All rights reserved.</p>
          {/* <p className="footer__credit">
                        Built with <span className="heart">♥</span> using React
                    </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
