import { choose } from "../assets";
import styles from "../style";
const CTA = () => (
  <section id="about" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:flex-row sm:flex-col flex-col bg-pink-gradient box-shadow md:text-left text-center`}>
    <div className={`${styles.flexCenter} flex-1 sm:ml-10 ml-3 sm:mr-0 mr-3 sm:mt-0 mt-10 md:mb-0 mb-8`}>
      <img src={choose}/>
    </div>
    <div className="flex-1 flex flex-col">
      <h4 className="text-white font-light text-[1.8rem]">Why Choose Our</h4>
      <h2 className={styles.heading2}>Website Development Services?</h2>
      <p className={`${styles.paragraph} w-full mt-5`}>
      At Primech Agency, we understand that a well-designed website is crucial for your business success. Our website development services are tailored to meet your specific needs, ensuring a seamless user experience and optimal performance.
      </p>
    </div>

    
  </section>
);

export default CTA;