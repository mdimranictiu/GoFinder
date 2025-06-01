import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-center">
      <h2 className="text-4xl font-bold text-[#00BADB] mb-6">
        Connect with the Developer
      </h2>

      <div className="flex justify-center items-center gap-6 text-3xl text-gray-700">
        <a
          href="mailto:imransheikh1246@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/mdimranictiu/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/md-imran-sheikh-bd"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://facebook.com/imran.ict.iu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default Contact;
