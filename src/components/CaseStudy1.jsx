import React from 'react';
import styles, { layout } from "../style";
import Button from "./Button";

const CaseStudy1 = ({ title, description, imgSrc, altText, subTitle, bulletPoints }) => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      {/* New h4 element */}
      <h4 className="text-white font-thin text-4xl">
        {subTitle}
      </h4>

      <h2 className="font-bold xs:text-[2.5rem] text-[2.5rem] text-primech xs:leading-[3.8rem] leading-[3.2rem] w-full">
        {title} <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {description}
      </p>

      {/* Bullet points */}
      <ul className= "mt-5 text-white">
        {bulletPoints.map((point, index) => (
          <li key={index} className={styles.bulletPoint}>
            {point}
          </li>
        ))}
      </ul>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={imgSrc} alt={altText} className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CaseStudy1;
