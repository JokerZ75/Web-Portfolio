import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "gatsby";

const Contact: React.FC = () => {
  return (
    <section id="Contact">
      <div>
        <h2 className="code-font heading">Get In Touch</h2>
      </div>
      <div id="contact-form">
        <form
          action="https://getform.io/f/c8c40542-aa98-4433-804d-77a865303241"
          method="POST"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              required
            ></textarea>
            <input type="hidden" name="_gotcha" />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
        <div className="contact-icons">
          <Link to="https://www.linkedin.com/in/deacon-hughes-251621243/">
            <FaLinkedin className="contact-icon" />
          </Link>
          <Link to="https://github.com/JokerZ75">
            <FaGithub className="contact-icon" />
          </Link>
          <Link to="mailto:dhughes1704@icloud.com">
            <FaEnvelope className="contact-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
