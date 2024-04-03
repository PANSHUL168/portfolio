import React from "react";
import about from "../assets/about.webp";
import rounded from "../assets/rotate.svg";

function About() {
  return (
    <div className="Container flex max-w-[990px] gap-[100px] px-10 max-lg:flex-col max-lg:items-center ">
      <div className="img-1 h-[350px] w-[410px] max-lg:h-[250px] max-lg:w-[310px]">
        <img className="h-full w-full rounded-2xl" src={about} />
        <div className="bg-white max-lg:h-[110px] max-lg:w-[110px] w-[190px] h-[190px] rounded-full relative top-[-150px] left-[70%] max-lg:left-[75%] max-lg:top-[-100px]">
          <img
            src={rounded}
            className="h-full w-full rounded-full animate-spin-slow"
          />
        </div>
      </div>
      <div className="text flex-1">
        <h1 className="text-[#147EFB] text-lg font-semibold mb-2 max-lg:text-center">
          ABOUT ME
        </h1>
        <h4 className="max-lg:text-center text-2xl font-semibold mb-3">
          Front-end React Developer <br /> from Delhi Technological University.
        </h4>
        <p className="max-lg:text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempora
          adipisci velit illo unde similique ipsam quas cum doloremque debitis?
          Numquam temporibus quod minus eius ab eligendi et tenetur hic! Eaque
          consequuntur reprehenderit laborum omnis! Eveniet, esse repellendus
          itaque culpa atque nemo maiores ab totam nihil veniam!
        </p>
      </div>
    </div>
  );
}

export default About;
