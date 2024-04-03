import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = ({ about, home, projects, contact }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [nav, setNav] = useState("");
  const handleClick = () => {
    nav === "active" ? setNav("") : setNav("active");
  };
  const handleScroll = (section) => {
    console.log(section);
    window.scrollTo({
      top: section.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className={`nav-options ${nav}`}>
        <svg
          onClick={() => {
            handleClick();
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon tabler-icon-x"
        >
          <path d="M18 6l-12 12"></path>
          <path d="M6 6l12 12"></path>
        </svg>
        <div className="list">
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => {
                  handleClick();
                  handleScroll(home);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => {
                  handleClick();
                  handleScroll(about);
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => {
                  handleClick();
                  handleScroll(projects);
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => {
                  handleClick();
                  handleScroll(contact);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav>
        <h3 className="logo">Panshul.dev</h3>
        <ul>
          <li>
            <a
              href="#home"
              onClick={() => {
                handleScroll(home);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => {
                handleScroll(about);
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => {
                handleScroll(projects);
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => {
                handleScroll(contact);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mobile-menu"
          onClick={() => {
            handleClick();
          }}
        >
          <path d="M4 6l16 0"></path>
          <path d="M4 12l16 0"></path>
          <path d="M4 18l16 0"></path>
        </svg>
      </nav>
    </>
  );
};

export default Navbar;
