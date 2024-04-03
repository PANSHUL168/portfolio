import React from "react";
import Profile from "../components/pfp/Profile";

function Hero() {
  return (
    <>
      <div className="flex items-center justify-between mt-[15vh] max-lg:flex-col-reverse">
        <div className="text max-w-[600px] max-lg:text-center">
          <h1 className="text-6xl max-lg:text-center font-bold leading-[1.2] my-[20px] max-lg:align-center max-md:text-4xl">
            Front-End React <br /> Developer 👋
          </h1>
          <p className="text-xl leading-[1.6] text-[#555]">
            Hi, I'm Panshul Singh. A passionate Front-end React Developer from
            Delhi Technological University.
          </p>
          <span className="flex gap-3 my-[25px] max-lg:items-center max-lg:justify-center">
            <a
              className="transition-all hover:text-blue-500"
              aria-label="linkedin"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/panshul-singh-391899273/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-brand-linkedin"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>
            <a
              className="transition-all hover:text-blue-500"
              aria-label="github"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/PANSHUL168"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-brand-github"
              >
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>
          </span>
        </div>
        <div className="pic">
          <Profile />
        </div>
      </div>
      <div className="techstack flex align-center max-md:flex-col">
        <p
          className="text-[#2d2e32] text-lg py-3 pr-[20px] mr-[70px] border-r-2 border-black max-md:text-center max-md:mr-0 max-md:border-b-2 max-md:border-r-0
        max-md:mb-10 max-md:px-0 "
        >
          Techstack
        </p>
        <div className=" skills flex gap-10 max-md:justify-center max-md:flex-wrap">
          <a className="tansition-all duration-[0.5s] hover:-translate-y-2 ">
            <img src="https://skillicons.dev/icons?i=html,css" />
          </a>
          <a className="tansition-all duration-[0.5s] hover:-translate-y-2 ">
            <img src="https://skillicons.dev/icons?i=js,react" />
          </a>
          <a className="tansition-all duration-[0.5s] hover:-translate-y-2 ">
            <img src="https://skillicons.dev/icons?i=tailwind,sass " />
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
