import React from "react";

const About = ({ ShowRes, darkMode }) => {
  {
    /*

*/
  }
  return (
    <section id="About" className={darkMode ? "dark" : ""}>
      <div
        className={
          ShowRes
            ? "hidden"
            : "h-screen w-full font-bold flex flex-col items-center dark:bg-[#212121]"
        }
      >
        <h1 className="text-5xl pb-12 pt-40 dark:text-[#f5f5f5]">About</h1>
        <div
          className={`${
            darkMode
              ? "dark:bg-[#212121]"
              : "bg-gradient-to-r from-[#aaffa9] to-[#11ffbd]"
          } w-4/5 py-12 pt-10 md:p-12 rounded-[8px] shadow-[0.7rem_0.7rem_0_#212121]
        dark:shadow-[0.7rem_0.7rem_0_#fab700] dark:border-[3px] dark:border-[#fab700] dark:text-[#f5f5f5]`}
        >
          <p className="text-xl px-8">
            I am Caleb Andrei B. Juanito a graduate of Bachelor of Science in
            Computer Science, I am positive, flexible, industrious, supportive
            and fast working employee. While I may not have extensive experience
            in the field. I am a quick learner and have developed a strong set
            of skills through my studies and internship.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
