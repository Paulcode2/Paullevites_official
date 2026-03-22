import React, { useEffect, useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { FiSend, FiCheck, FiArrowRight } from "react-icons/fi";
import { useForm } from "@formspree/react";

const Contact = () => {
  const sectionRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [state, handleSubmit] = useForm("xbjedjzo");

  useEffect(() => {
    if (state.succeeded) {
      setIsSubmitted(true);
    }
  }, [state.succeeded]);

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

  const contactOptions = [
    {
      icon: <MdOutlineEmail />,
      title: "Email",
      detail: "Paullevites84@gmail.com",
      link: "mailto:Paullevites84@gmail.com",
      label: "Send A Mail",
    },
    {
      icon: <RiMessengerLine />,
      title: "Messenger",
      detail: "Paul Levites",
      link: "https://m.me/paul.Levite.73",
      label: "Send A Message",
    },
    {
      icon: <BsWhatsapp />,
      title: "WhatsApp",
      detail: "+2348136286614",
      link: "https://api.whatsapp.com/send?phone=+2348136286614",
      label: "Send A Message",
    },
  ];

  return (
    <section id="contact" ref={sectionRef}>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options animate-on-scroll">
          {contactOptions.map((option, index) => (
            <article
              key={index}
              className="contact__option"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="contact__option-icon">{option.icon}</div>
              <h4>{option.title}</h4>
              <h5>{option.detail}</h5>
              <a
                href={option.link}
                rel="noreferrer"
                target="_blank"
                className="btn btn-small"
              >
                {option.label}
              </a>
            </article>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="contact__form animate-on-scroll"
        >
          {isSubmitted ? (
            <div className="contact__success">
              <div className="success-icon">
                <FiCheck />
              </div>
              <h3>Thank You!</h3>
              <p>
                Your message has been sent successfully. I'll get back to you
                soon!
              </p>
            </div>
          ) : (
            <>
              <div className="form__group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div className="form__group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form__group">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send Message"}
                <FiSend />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
