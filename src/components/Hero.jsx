import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Button_Call } from ".";
import { useNavigate } from 'react-router-dom';
import styles from "../style";

const Hero = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gvwfr2r', 'template_tbld3va', form.current, 'eFnbp3KEhNJ7K1mvp')
      .then((result) => {
        console.log(result.text);
        navigate('/Thank-You');  // Navigate to Thank You page
      }, (error) => {
        console.log(error.text);
        // Handle the error (optional)
      });
  };

  return (
    <section id="contactus" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 flex ${styles.flexStart} flex-col xl:px-14 sm:px-16 px-6 z-[5] sm:items-start items-center sm:text-left text-center`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[3.8rem] text-[2.5rem] text-white ss:leading-[5rem] leading-[3.5rem]">
            <span className="text-[3rem] font-extralight">Professional</span> <br className="sm:block block " />{" "}
            <span>Web Development Services</span>{" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
          Welcome to Primech Agency, your trusted partner in delivering top-notch web development services. As a leading web development company, we specialize in creating innovative, responsive, and scalable websites that drive your business forward.
        </p>
        <div className="mt-5">
          <Button_Call />
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 md:mx-0 mx-5 relative `}>
        <div className="w-full h-full relative z-[5] flex items-center justify-center ">
          <div className="py-8 px-12 max-w-md rounded-lg shadow-lg backdrop-blur-xl backdrop-filter border-2 w-full grey_gradient">
            <h1 className="text-3xl font-extrabold text-center text-primech mb-5"><span className="font-extralight text-white">Contact Us</span> Now</h1>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col">
              <div className="mb-5">
                <label className="text-white font-semibold mb-2" htmlFor="name">Full name</label>
                <input
                  className="bg-bshade text-white border rounded-lg shadow py-2 px-4 block w-full appearance-none leading-normal border-none"
                  type="text"
                  id="name"
                  name="user_name"
                  required
                />
              </div>

              <div className="mb-5">
                <label className="text-white font-semibold mb-2" htmlFor="email">Email</label>
                <input
                  className="bg-bshade text-white border rounded-lg shadow py-2 px-4 block w-full appearance-none leading-normal border-none"
                  type="email"
                  id="email"
                  name="user_email"
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div className="mb-5">
                <label className="text-white font-semibold mb-2" htmlFor="phone">Phone number</label>
                <input
                  className="bg-bshade text-white border rounded-lg shadow py-2 px-4 block w-full appearance-none leading-normal border-none"
                  type="tel"
                  id="phone"
                  name="user_phone"
                  pattern="[+0-9]+"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^+0-9]/g, '');
                    if (e.target.value.length > 1 && e.target.value.charAt(0) !== '+') {
                      e.target.value = e.target.value.replace(/^\+?/, '');
                    }
                  }}
                  required
                />
              </div>

              <div className="mb-5">
                <label className="text-white font-semibold mb-2" htmlFor="service">Select service</label>
                <select
                  className="bg-bshade text-white border rounded-lg shadow py-2 px-4 block w-full appearance-none leading-normal border-none custom-dropdown"
                  id="service"
                  name="user_service"
                  required
                >
                  <option value="" disabled selected>Select service</option>
                  <option value="Web Design">Web design</option>
                  <option value="Web Development">Web development</option>
                </select>
              </div>


              <button
                className="text-[#717171] hover:text-white bg-white hover:bg-primech font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mb-5"
                type="submit"
              >
                GET A FREE CALL
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute z-[0] sm:w-[36rem] w-[10rem] h-[11rem] left-[12rem] top-[15rem] pink__gradient" />
      <div className="absolute z-[0] w-[70rem] h-[17rem] right-[14rem] top-[28rem] blue__gradient" />
    </section>
  );
};

export default Hero;
