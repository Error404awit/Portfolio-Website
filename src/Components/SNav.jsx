import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillFacebook, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

const SNav = ({ ShowRes, setShowRes, darkMode }) => {
  const openNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <aside
      className={`${ShowRes ? "fixed hidden md:flex top-[35.5%] w-[60px] z-10" : "hidden md:flex top-[35.5%] w-[60px] absolute z-10"}
      ${darkMode && "dark"}`}
    >
      <nav>
        <ul className="text-gray-700 dark:text-[#f5f5f5] ml-20 overflow-hidden">
          <li className="flex items-center w-[160px] h-[60px] pl-2 ml-[-100px] hover:ml-[0px] duration-300">
            <button
              className="flex justify-between items-center px-4 w-full bg-transparent"
              role="link"
              onClick={() =>
                openNewTab("https://web.facebook.com/calebandrei123/")
              }
            >
              Facebook
              <AiFillFacebook size={40} />
            </button>
          </li>
          <li className="w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-300">
            <button
              className="flex justify-between items-center px-4 w-full bg-transparent"
              role="link"
              onClick={() => openNewTab("https://github.com/Error404awit")}
            >
              Github
              <AiFillGithub size={40} />
            </button>
          </li>
          <li className="flex items-center w-[300px] h-[60px] ml-[-240px] hover:ml-[0px] duration-500">
            <div className="flex justify-between items-center px-4 w-full bg-transparent">
              {/*link ko sa discord https://discord.gg/KPZCMzDj*/}
              calebandreijuanito@gmail.com
              <AiOutlineMail size={40} />
            </div>
          </li>
          <li className="flex items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[0px] duration-300">
            <Link
              to="/Resume"
              className="flex justify-between items-center px-4 w-full cursor-pointer"
              onClick={() => setShowRes(!ShowRes)}
            >
              Resume
              <BsFillPersonLinesFill size={40} />
            </Link>
            {/*
            
            */}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SNav;
