import React from 'react';
import styles from "../style";
import { check } from '../assets';


const ThankYou = () => {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <section id="thankyou" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 flex ${styles.flexStart} flex-col xl:px-14 sm:px-16 px-6 z-[5] sm:items-start items-center sm:text-left text-center`}>
              <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[3.8rem] text-[2.5rem] text-white ss:leading-[5rem] leading-[3.5rem]">
                  <span>Thank You</span>{" "}
                </h1>
              </div>
              <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
                One of our Representative will get in touch with you as soon as possible.
              </p>
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 md:mx-0 mx-5 relative `}>
              <div className="w-full h-full relative z-[5] flex items-center justify-center ">
                <img src={check} alt="Thank You" className="rounded-lg w-full h-auto" />
              </div>
            </div>

            <div className="absolute z-[0] sm:w-[36rem] w-[10rem] h-[11rem] left-[12rem] top-[15rem] pink__gradient" />
            <div className="absolute z-[0] w-[70rem] h-[17rem] right-[14rem] top-[28rem] blue__gradient" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
