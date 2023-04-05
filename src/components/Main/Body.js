/* eslint-disable no-unused-vars */
import React from 'react'
import { Navbar } from './Navbar'
import { SecondSection } from './SecondSection'
import { motion as m } from "framer-motion"

export const Body = () => {
  return (
    <m.div initial={{opacity: 0}} animate={{opacity:5}} transition={{ease: "easeOut"}}>
      <div className='body bg-bg5 bg-cover bg-center h-[100vh] w-[100vw] flex font-roboto'>
        <div className="container self-center w-[80%] m-auto shadow-lg rounded-3xl shadow-yellow-100  bg-bg9 bg-cover">
          <Navbar />
          <SecondSection />
        </div>
      </div>
    </m.div>
  )
}
