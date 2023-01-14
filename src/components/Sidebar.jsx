import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo-image.jpg";
import {
  FaFacebookF,
  FaRss,
  FaTwitter,
  FaDribbble,
  FaLinkedin,
} from "react-icons/fa";
import "./style.css";

/* links classname */
let linkClassName =
  "inline-block border-y border-y-white w-full bg-myblue text-white py-3 text-center hover:bg-white hover:text-myblue";
let activeLinkClassName =
  "inline-block w-full border-y border-y-white bg-white text-myblue py-3 text-center";

const Sidebar = () => {
  return (
    <div className="sidebar bg-myblue basis-4/12 h-screen max-h-full overflow-y-auto">
      <header className="text-center py-12 text-white uppercase">
        <img src={logo} alt="Logo" className="mx-auto rounded-xl" />
        <h2 className=" text-3xl mt-3 font-bold">blugoon</h2>
        <h4 className="text-sm">Free tailwind Theme</h4>
      </header>
      <nav>
        <ul className="flex flex-col justify-center align-center w-full">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLinkClassName : linkClassName
              }
              to="/"
            >
              Intro
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLinkClassName : linkClassName
              }
              to="/features"
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLinkClassName : linkClassName
              }
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLinkClassName : linkClassName
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="icons flex justify-center align-center py-12 gap-1 border-b border-b-white">
        <a href="http://" target="_blank" className="p-2 bg-blue-700">
          <FaFacebookF color="white" className="text-lg" />
        </a>
        <a href="http://" target="_blank" className="p-2 bg-blue-700">
          <FaTwitter color="white" className="text-lg" />
        </a>
        <a href="http://" target="_blank" className="p-2 bg-blue-700">
          <FaLinkedin color="white" className="text-lg" />
        </a>
        <a href="http://" target="_blank" className="p-2 bg-blue-700">
          <FaDribbble color="white" className="text-lg" />
        </a>
        <a href="http://" target="_blank" className="p-2 bg-blue-700">
          <FaRss color="white" className="text-lg" />
        </a>
      </div>
      <footer className="text-center text-white py-5">
        <p>Copyright 2023 Fs-09</p>
      </footer>
    </div>
  );
};

export default Sidebar;
