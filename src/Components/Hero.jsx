import React from "react";
import Me from "../assets/me.png";
import bgme from "../assets/bg-me.png";
import bgrme from "../assets/bgr-me.png";
import { AiFillFacebook, AiFillGithub, AiFillMail } from "react-icons/ai";
import Typewriter from "./Typewriter";
import TypeWrite from "./TypeWrite";

const Hero = ({ ShowRes, darkMode }) => {
  return (
    <>
      <main name="Hero" className={darkMode ? "dark" : ""}>
        <div
          className={`w-full h-screen top-0 dark:bg-[#212121] ${ShowRes ? "fixed" : ""}`}
        >
          <div className="text-center p-6 pt-32">
            <h1 className="text-3xl font-bold py-2 dark:text-[#f5f5f5]">
              Caleb Andrei B. Juanito
            </h1>
            <h2 className="text-xl font-bold py-2 ">
              {/*Front End Developer & UI/UX Designer*/}
              <TypeWrite darkMode={darkMode} />
            </h2>
            <p className="hidden md:block text-base py-5 leading-8 dark:text-[#f5f5f5]">
              Let's Connect
            </p>
            <p className="md:hidden text-base py-5 leading-8 dark:text-[#f5f5f5]">
              Join me down below
            </p>
          </div>
          <div className="flex justify-evenly text-5xl text-gray-700 dark:text-[#f5f5f5] py-5 md:hidden">
            <AiFillFacebook />
            <AiFillGithub />
            <AiFillMail />
          </div>
          <div className="w-80 h-80 rounded-full overflow-hidden mx-auto relative lg:hover:translate-x-5 duration-300 mt-20 md:mt-0">
            {/*<img src={Me} alt="Me img" />*/}
            <img src={bgme} alt="image0" className="absolute" />
            <img
              src={bgrme}
              alt="image1"
              className="absolute lg:hover:translate-y-[-20px] duration-300"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
