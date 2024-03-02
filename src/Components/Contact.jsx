import React from "react";

const Contact = ({ ShowRes, darkMode }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to send the message
  };
  return (
    <section
      id="Contact"
      className={`${ShowRes ? "hidden" : "block"} ${darkMode ? "dark" : ""}`}
    >
      <div className="h-screen w-full flex justify-center items-center pt-20 flex-col dark:bg-[#212121]">
        <h1 className="text-5xl font-bold text-center pb-4 dark:text-[#f5f5f5]">
          Get in Touch
        </h1>
        <form
          method="POST"
          action="https://getform.io/f/3ae0fd7a-f9dd-4b38-aeef-1b9d073bfb30"
          className={`w-4/5 h-4/5 rounded-[8px] flex flex-col items-center gap-8 ${
            darkMode
              ? "bg-[#212121] shadow-[0.7rem_0.7rem_0_#feb700] border-[3px] border-[#fab700]"
              : "bg-gradient-to-r from-[#aaffa9] to-[#11ffbd] shadow-[0.7rem_0.7rem_0_#212121]"
          }`}
        >
          <input
            type="text"
            name="Name"
            placeholder="Name"
            required
            className="w-4/5 h-10 mt-20 p-4 rounded-full outline-none osab placeholder-gray-500 dark:placeholder-gray-300
            dark:text-[#f5f5f5]"
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            required
            className="w-4/5 h-10 p-4 rounded-full outline-none osab placeholder-gray-500 dark:placeholder-gray-300
            dark:text-[#f5f5f5]"
          />
          <textarea
            type="text"
            name="Message"
            placeholder="Message"
            required
            className="w-4/5 h-80 md:h-52 p-4 rounded-2xl outline-none bg-salamin shadow-glassshadow backdrop-blur-sm border-[1px]
            border-solid border-glassbrdr placeholder-gray-500 dark:placeholder-gray-300 dark:text-[#f5f5f5]"
          />
          <button
            type="submit"
            onClick={() => handleSubmit}
            className="text-[#212121] hover:text-[#f5f5f5] p-4 rounded-[4px] border border-[#212121] hover:bg-[#212121]
            duration-300 mb-4 dark:hover:bg-[#fab700] dark:border-[#fab700] dark:text-[#f5f5f5] dark:hover:text-[#1d1d20]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
