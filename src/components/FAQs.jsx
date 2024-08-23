import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from "../style";


const FAQ = ({ title, faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="flex md:flex-row flex-col sm:pt-4 sm:pb-16 py-6">
            <div className="flex justify-center items-start flex-col w-full">
                <h2 className="font-bold xs:text-[2.5rem] text-[2rem] text-primech xs:leading-[3.3rem] leading-[2.8rem] w-full">
                    {title}
                </h2>

                {/* FAQs */}
                <ul className="mt-0 text-white w-full">
                    {faqs.map((faq, index) => (
                        <li key={index} className="w-full mt-4">
                            <div
                                className="flex justify-between items-center cursor-pointer w-full"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-bold text-xl w-full">{faq.question}</span>
                                <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
                            </div>
                            <CSSTransition
                                in={openIndex === index}
                                timeout={300}
                                classNames="faq"
                                unmountOnExit
                            >
                                <p className="mt-2 text-white font-normal sm:text-[1.2rem] text-[1rem] w-full">
                                    {faq.answer}
                                </p>
                            </CSSTransition>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default FAQ;
