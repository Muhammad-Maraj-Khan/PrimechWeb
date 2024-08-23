import React from 'react'
import styles from "../style";


const Subsection_2 = ({section, description, id}) => {
  return (
    <section id={id} className='text-white w-full bg-black flex items-center justify-center text-center grey_gradient flex-col p-5 mt-10'>
        <h1 className='font-bold md:text-6xl sm:text-5xl text-4xl text-primech'>{section}</h1>
        <p className={`${styles.paragraph} md:w-[80%] sm:w-[90%] w-[100%] mt-5 text-white text-light`}>{description}</p>
    </section>
  )
}

export default Subsection_2