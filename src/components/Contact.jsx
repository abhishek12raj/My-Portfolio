import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <>
      <div className="container contact my-5">
        <h1 className="text-center mb-4">CONTACT ME</h1>
        <div className="contact-icon d-flex justify-content-center align-items-center flex-wrap">
          <a href="https://www.linkedin.com/in/abhishek-raj-341393203/" target="_blank" className="items mx-3 my-3">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://github.com/abhishek12raj?tab=repositories" target="_blank" className="items mx-3 my-3">
            <FaGithub className="icons" />
          </a>
          <a href="mailto:imabhishekraj12@gmail.com" target="_blank" className="items mx-3 my-3">
            <SiGmail className="icons" />
          </a>
          <a href="https://www.instagram.com/abhishek_1.2._/" target="_blank" className="items mx-3 my-3">
            <FaInstagram className="icons" />
          </a>
          <a href="#" target="_blank" className="items mx-3 my-3">
            <CiFacebook className="icons" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
