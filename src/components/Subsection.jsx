import React from 'react'
import styles from "../style";


const Subsection = ({section, description, id}) => {
  return (
    <section id={id} className='text-white w-full h-[13rem] bg-black flex items-center justify-center text-center grey_gradient flex-col'>
        <h1 className='font-bold sm:text-6xl text-5xl text-primech'>{section}</h1>
        <p className={`${styles.paragraph} sm:w-[80%] mt-5 text-white text-light`}>{description}</p>
    </section>
  )
}

export default Subsection