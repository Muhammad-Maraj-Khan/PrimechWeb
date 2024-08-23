import React from "react";

const Button = ({ styles }) => {
  const handleScroll = () => {
    const element = document.getElementById("contactus");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      className={`py-[0.8rem] px-[3rem] w-full font-poppins font-light text-[1rem] border-white border-2 border-solid text-white bg-transparent hover:bg-primech hover:border-primech ${styles} shadow-md hover:shadow-lg transition duration-300 ease-in-out`}
      onClick={handleScroll}
    >
      CONTACT US
    </button>
  );
};

export default Button;
