import React from "react";
import movix from "../assets/movix.png";
function Projects() {
  const projects = [
    {
      image: movix,
      heading: "MOVIX",
      description:
        "Introducing Movix - Your Ultimate Movie Companion! Movix is your go-to website, powered by TMDB API and built with HTML, CSS, JavaScript, React, and Sass. Explore an extensive collection of movies with ease. From latest releases to timeless classics, Movix offers seamless browsing, detailed information, and personalized recommendations. Dive into the world of cinema effortlessly with Movix!",
      techs: ["React", "Javascript", "Tailwind", "TMDB API"],
      link: "https://movix-eta.vercel.app/",
    },
    {
      image: movix,
      heading: "MOVIX",
      description:
        "Introducing Movix - Your Ultimate Movie Companion! Movix is your go-to website, powered by TMDB API and built with HTML, CSS, JavaScript, React, and Sass. Explore an extensive collection of movies with ease. From latest releases to timeless classics, Movix offers seamless browsing, detailed information, and personalized recommendations. Dive into the world of cinema effortlessly with Movix!",
      techs: ["React", "Javascript", "Tailwind", "TMDB API"],
      link: "https://movix-eta.vercel.app/",
    },
    {
      image: movix,
      heading: "MOVIX",
      description:
        "Introducing Movix - Your Ultimate Movie Companion! Movix is your go-to website, powered by TMDB API and built with HTML, CSS, JavaScript, React, and Sass. Explore an extensive collection of movies with ease. From latest releases to timeless classics, Movix offers seamless browsing, detailed information, and personalized recommendations. Dive into the world of cinema effortlessly with Movix!",
      techs: ["React", "Javascript", "Tailwind", "TMDB API"],
      link: "https://movix-eta.vercel.app/",
    },
  ];
  return (
    <div className="flex max-lg:gap-12 flex-col justify-center items-center">
      <h1 className="text-[#147EFB] text-2xl font-semibold pr-[900px] max-lg:pr-0 max-lg:mt-10">
        PROJECTS
      </h1>
      {projects.map((item, index) => (
        <div className="projects px-[100px] max-lg:px-2">
          <div
            className={`project ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            } w-[65vw] flex gap-[50px] items-center justify-center mt-20 max-lg:flex-col`}
          >
            <div className="image h-[30vh] w-[30vw] max-lg:w-[80vw]">
              <img className="h-full rounded-2xl  w-full" src={item.image} />
            </div>
            <div className="info flex-1">
              <h1 className="text-2xl font-semibold text-center mb-3 capiataiize">
                {item.heading}
              </h1>
              <p className="text-center text-[#555555]">{item.description}</p>
              <div className="techs flex justify-center gap-5 mt-5 text-lg font-bold">
                {item.techs.map((i) => {
                  <h1>{i}</h1>;
                })}
              </div>
              <div className="mt-4 p-1 text-center ">
                <a
                  href={item.link}
                  target="_blank"
                  className="text-center text-lg font-semibold duration-[0.5s] transition-all hover:text-blue-500 "
                >
                  Live Demo 🔗
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
