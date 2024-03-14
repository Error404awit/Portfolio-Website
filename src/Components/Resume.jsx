import { React, useRef } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GoDownload } from "react-icons/go";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import My_Resume from "../assets/My_Resume.png";
import myResume from "../assets/myResume.pdf";

const Resume = ({ ShowRes, setShowRes, darkMode }) => {
  const history = useNavigate();

  const handleSectionClick = () => {
    setShowRes(false);
    // Navigate to the home page
    //window.location.href = "/";
    history("/");
  };

  const emailRef = useRef(null);
  const handleDownload = async () => {
    const response = await fetch(myResume);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CALEB ANDREI JUANTIO Resume.pdf";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
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
        <div className="bg-[#ebecf0] w-[795px] h-[1124px]">
          <img src={My_Resume} alt="Resume" className="w-full h-full" />
        </div>
        <form
          className="flex flex-col items-center justify-between gap-6 w-2/4"
          onSubmit={(e) => {
            e.preventDefault();
            if (emailRef.current.value) {
              handleDownload();
            } else {
              alert("Please enter your email address.");
            }
          }}
        >
          <input
            type="email"
            placeholder="Example@gmail.com"
            required
            ref={emailRef}
            className="w-full py-2 px-2 rounded-[30px]"
          />
          <button
            type="submit"
            className="py-2 px-4 flex items-center justify-center gap-4 rounded-[30px] bg-white"
          >
            Download Resume
            <GoDownload />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Resume;
