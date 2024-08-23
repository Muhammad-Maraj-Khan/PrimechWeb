import React from "react";

const Button = ({ styles }) => {
  const handleScroll = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      className={`py-[0.8rem] px-[3rem] font-poppins font-light text-[1rem] border-white border-2 border-solid text-white rounded-full hover:bg-primech hover:border-primech ${styles} shadow-md bg-transparent hover:shadow-lg transition duration-300 ease-in-out`}
      onClick={handleScroll}
    >
      READ MORE
    </button>
  );
};

export default Button;
