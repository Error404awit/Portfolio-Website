import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import "./Switch.css";
import Logo from "../assets/Logo_.svg";
import Logoc from "../assets/Logo_C.svg";

const Banner = ({ darkMode, setDarkMode }) => {
  const [Clicked, setClicked] = useState(false);
  const handelClick = () => setClicked(!Clicked);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <header
        className={
          Clicked
            ? "hidden"
            : darkMode
              ? "dark bg-[#1d1d20] w-full h-16  md:h-24 flex justify-between items-center fixed z-20"
              : "nav bg-gradient-to-r from-[#aaffa9] to-[#11ffbd] w-full h-16  md:h-24 flex justify-between items-center fixed z-20"
        }
      >
        {/**
        <h5 className="pl-4 text-xl md:text-2xl text-white">
          Caleb Andrei Juanito
        </h5>
         * 
        */}
        {darkMode ? (
          <img src={Logoc} alt="Logo" className="h-20 md:h-36"></img>
        ) : (
          <img src={Logo} alt="Logo" className="h-20 md:h-36"></img>
        )}

        <nav
          className={`flex justify-between items-center mr-4 ${
            darkMode ? "dark" : ""
          }`}
        >
          <ul className="hidden md:flex text-[#1d1d20] dark:text-white">
            <li className={`nav-item p-4 cursor-pointer text-lg`}>
              <Link
                to="Hero"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-item underline-animation"
              >
                Home
              </Link>
            </li>
            <li className={`nav-item p-4 cursor-pointer text-lg`}>
              <Link
                to="About"
                spy={true}
                smooth={true}
                duration={500}
                className="underline-animation"
              >
                About
              </Link>
            </li>
            <li className={`nav-item p-4 cursor-pointer text-lg`}>
              <Link
                to="Skills"
                spy={true}
                smooth={true}
                duration={500}
                className="underline-animation"
              >
                Skills
              </Link>
            </li>
            <li className={`nav-item p-4 cursor-pointer text-lg`}>
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                duration={500}
                className="underline-animation"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="hidden md:flex justify-end">
            <div className="relative">
              <BsFillSunFill
                size={30}
                className={`icon absolute text-yellow-200 z-10 top-[.48em] left-[.80em] ${
                  darkMode ? "hidden" : "animate-spin-once"
                } `}
              />
              <BsFillMoonStarsFill
                size={30}
                className={`icon absolute z-10 top-[.48em] left-[3.80em] text-white ${
                  darkMode ? "animate-spin-once" : "hidden"
                } `}
              />
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleTheme}
                className="appearance-none relative m-auto left-0 right-0 top-0 bottom-0 cursor-pointer outline-none
              h-[2.6em] w-[6.5em] bg-[#f5f5f5] skew-x-[-7deg] duration-[0.3s] before:text-[.70em]
              before:relative before:w-[4.25em] before:h-[2.9em] before:bg-[#1d1d20] 
              before:text-[#a0a0a0] before:top-[0.42em] before:left-[0.42em] before:duration-[0.3s] before:flex 
              before:items-center before:justify-center before:font-['Poppins'] before:font-semibold before:tracking-[1px]
              checked:bg-gradient-to-tr checked:from-[#8175fe] checked:to-[#89befe] checked:before:left-[4.6em]
              checked:before:text-[#89befe] active:after:w-[130px] checked:before:bg-[#1d1d20] "
              />
            </div>
          </div>
          {/*bg-[#1d1d20] #c8a475*/}
          {/******mobile view ng Nav Bar******/}
          <div className="md:hidden text-xl text-white dark:text-[#1d1d20] p-1 rounded dark:bg-[#f5f5f5] bg-cyan-500">
            Resume
          </div>
          <div className="md:hidden text-xl ml-4">
            {darkMode ? (
              <BsFillMoonStarsFill
                size={30}
                className="text-white"
                onClick={toggleTheme}
              />
            ) : (
              <BsFillSunFill
                size={30}
                className="text-yellow-200"
                onClick={toggleTheme}
              />
            )}
          </div>
          <AiOutlineBars
            size={30}
            className="ml-4 dark:text-[#f5f5f5] md:hidden"
            onClick={handelClick}
          />
        </nav>
      </header>
      {/******mobile view******/}
      <aside
        className={
          Clicked
            ? darkMode
              ? "bg-[#212121] h-screen w-full md:hidden fixed z-10"
              : "bg-gradient-to-r from-[#aaffa9] to-[#11ffbd] h-screen w-full md:hidden fixed z-10"
            : "hidden"
        }
      >
        <div
          className={`mt-[17px] mr-4 text-2xl absolute left-[88.5%] ${darkMode ? "text-white" : ""}`}
        >
          <AiOutlineClose size={30} onClick={handelClick} />
        </div>
        <ul className="flex flex-col justify-evenly items-center mr-auto ml-auto pt-60 text-white">
          <li className="p-4 cursor-pointer text-3xl">
            <Link to="Hero" smooth={true} duration={500} onClick={handelClick}>
              Home
            </Link>
          </li>
          <li className="p-4 cursor-pointer text-3xl">
            <Link to="About" smooth={true} duration={500} onClick={handelClick}>
              About
            </Link>
          </li>
          <li className="p-4 cursor-pointer text-3xl">
            <Link
              to="Skills"
              smooth={true}
              duration={500}
              onClick={handelClick}
            >
              Skills
            </Link>
          </li>
          <li className="p-4 cursor-pointer text-3xl">
            <Link
              to="Contact"
              smooth={true}
              duration={500}
              onClick={handelClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Banner;
