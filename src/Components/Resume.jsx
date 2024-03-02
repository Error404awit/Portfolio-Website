import { React, useRef } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GoDownload } from "react-icons/go";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Resume = ({ ShowRes, setShowRes, darkMode }) => {
  const history = useNavigate();

  const handleSectionClick = () => {
    setShowRes(false);
    // Navigate to the home page
    //window.location.href = "/";
    history("/");
  };

  return (
    <section
      onClick={handleSectionClick}
      className="absolute bg-slate-800 bg-opacity-30 backdrop-blur-sm z-20 w-full h-auto top-0 flex items-center justify-center"
    >
      <Link to="/" onClick={() => setShowRes(!ShowRes)}>
        <IoIosCloseCircleOutline
          size={40}
          className={`absolute top-3 right-3 ${darkMode ? "text-[#f5f5f5]" : ""}`}
        />
      </Link>
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex flex-col items-center gap-6 my-6 mt-8"
      >
        <div className="bg-[#ebecf0] w-[795px] h-[1000px]">
          <p>Resume lagayan</p>
        </div>
        <form className="flex flex-col items-center justify-between gap-6 w-1/4">
          <input
            type="email"
            placeholder="Example@gmail.com"
            required
            className="w-full py-2 px-2 rounded-[30px]"
          />
          <button className="py-2 px-4 flex items-center justify-center gap-4 rounded-[30px]">
            Download Resume
            <GoDownload />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Resume;
