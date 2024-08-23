import React from 'react';
import styles from "../style";
import Button from "./Button";

const CustomPackage = ({ title, description, subTitle, bulletPoints, showButton }) => (
    <section className="flex md:flex-row flex-col sm:pt-4 sm:pb-16 py-6">
        <div className="flex justify-center items-start flex-col">
            <h2 className="font-bold xs:text-[2.5rem] text-[2rem] text-primech xs:leading-[3.3rem] leading-[2.8rem] w-full">
                {title}
            </h2>
            <h4 className="text-white font-thin sm:text-3xl text-2xl sm:mt-1 mt-2">
                {subTitle}
            </h4>
            <p className={`font-poppins font-normal text-white sm:text-[1.2rem] text-[1rem] sm:leading-[30.8px]  leading-[1.5rem] w-full mt-6`}>
                {description}
            </p>

            {/* Bullet points */}
            <ul className="mt-2 text-white">
                {bulletPoints.map((point, index) => (
                    <li key={index} className={`${styles.bulletPoint} mt-2`}>
                        <span className="font-bold text-lg">
                            {point.split(':')[0]}:
                        </span> 
                        {point.split(':')[1]}
                    </li>
                ))}
            </ul>

            {/* Conditionally render Button */}
            {showButton && <Button styles={`mt-10`} />}
        </div>
    </section>
);

export default CustomPackage;
