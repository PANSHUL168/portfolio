import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./components/pfp/Profile";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

function App() {
  const about = useRef(null);
  const home = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  return (
    <>
      <Navbar about={about} home={home} projects={projects} contact={contact} />
      <div
        ref={home}
        className="flex max-w-[70vw]  h-auto flex-col gap-20  px-[40px] max-sm:px-0   mx-auto"
      >
        <Hero />
      </div>
      <div
        className="about flex items-center justify-center w-[99vw] h-[100vh]  py-[30vh] max-lg:py-[10vh]"
        ref={about}
      >
        <About />
      </div>
      <div className="projects" ref={projects}>
        <Projects />
      </div>
      <div
        className="contact w-full my-[200px] px-[80px] max-lg:px-[40px] pl-[180px]  mx-auto align-center"
        ref={contact}
      >
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
