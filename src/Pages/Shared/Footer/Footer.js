import React from "react";
import { Link } from "react-router-dom";
import { FaTwitterSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="dark:bg-gray-800 dark:text-gray-50">
      <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div>
          
        </div>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4">
            <a
              href="https://twitter.com/mdmasud83732961"
              title="Twitter"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 "
            >
              <FaTwitterSquare className="text-blue-400 text-3xl"></FaTwitterSquare>
            </a>
            <a
              href="https://www.facebook.com/mdabdullamasud.rana/"
              title="Facebook"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 "
            >
              <FaFacebookSquare className="text-blue-400 text-3xl"></FaFacebookSquare>
            </a>
            <a
              href="https://www.linkedin.com/in/md-abdullahalmasud/"
              title="LinedIn"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 "
            >
              <FaLinkedin className="text-blue-400 text-3xl"></FaLinkedin>
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 pb-6 text-sm">
            <span className="dark:text-gray-400">
              © Copyright 2022. All Rights Reserved.
            </span>
          </div>
    </footer>
  );
};

export default Footer;
