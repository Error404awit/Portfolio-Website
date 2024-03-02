import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JAVASCRIPT from "../assets/javascript.png";
import REACT from "../assets/react.png";
import TAILWIND from "../assets/tailwind.png";
import GITHUB from "../assets/github.png";
import ImageCarousel from "./ImageCarousel";

const Skills = ({ ShowRes, darkMode }) => {
  return (
    <section
      name="Skills"
      className={
        ShowRes
          ? "hidden"
          : `w-full h-screen flex flex-col justify-center items-center ${
              darkMode ? "dark bg-[#212121]" : ""
            }`
      }
    >
      <div className="text-center text-5xl font-bold pb-12 dark:text-[#f5f5f5]">
        <h1>Skills</h1>
      </div>
      {/*dating syang rounded-3xl*/}
      <div
        className={`${
          darkMode
            ? "bg-[#212121]"
            : "bg-gradient-to-r from-[#aaffa9] to-[#11ffbd]"
        } w-[80%] rounded-[8px] md:h-[50%] shadow-[0.7rem_0.7rem_0_#212121] dark:shadow-[0.7rem_0.7rem_0_#fab700] dark:border-[3px] dark:border-[#fab700]`}
      >
        <div className="w-full h-full hidden md:block">
          <ImageCarousel darkMode={darkMode} />
        </div>
        <div className="gap-8 flex flex-wrap content-evenly p-6 md:hidden">
          <img
            src={HTML}
            className="h-20 mx-auto hover:scale-110 duration-500"
          />
          <img
            src={CSS}
            className="h-20 mx-auto hover:scale-110 duration-500"
          />
          <img
            src={JAVASCRIPT}
            className="h-20 mx-auto hover:scale-110 duration-500"
          />
          <img
            src={REACT}
            className="h-20 mx-auto hover:scale-110 duration-500"
          />
          <img
            src={TAILWIND}
            className="h-20 mx-auto hover:scale-110 duration-500"
          />
          <img
            src={GITHUB}
            className="h-20 mx-auto hover:scale-110 duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
