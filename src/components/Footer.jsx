import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleScroll = (id) => {
    navigate("/"); // Navigate to the home page first
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Ensure the page has navigated before scrolling
  };

  return (
    <section className={`flex justify-center items-center ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1.5] w-full flex flex-row justify-end flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className={`flex flex-col min-w-[150px]`}>
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4 flex sm:gap-7 gap-5">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal sm:text-[1rem] text-[0.55rem] leading-[24px] text-dimWhite hover:text-primech cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                    onClick={() => handleScroll(link.id)} // Use the custom scroll function
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center sm:text-[1rem] text-[0.8rem] leading-[27px] text-white">
          Copyright Ⓒ 2024 Primech. All Rights Reserved.
        </p>

        <div className="flex sm:flex-row flex-row md:mt-0 mt-6 text-white sm:gap-6 gap-4 font-normal sm:text-[1rem] text-[0.8rem]">
          <h1>+1(213) 375-8381</h1>
          <h1>contact@primechagency.com</h1>
        </div>
      </div>
    </section>
  );
};

export default Footer;
