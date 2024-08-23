import React from 'react';
import Services from './Services';
import Subsection from './Subsection';
import Footer from './Footer';
import styles from "../style"


const Pricing = () => {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Subsection section="Pricing" id="pricing" />
          <Services />

        </div>
      </div>
    </div>
  );
};

export default Pricing;
