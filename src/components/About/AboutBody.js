/* eslint-disable no-unused-vars */
import React from 'react'
import { Navbar } from '../Main/Navbar'
import { AboutFooter } from './AboutFooter'
import { AboutSecondPart } from './AboutSecondPart'
import { AboutThird } from './AboutThird'
import { motion as m } from "framer-motion"


export const AboutBody = () => {
  return (
    <div className=' bg-black'>
      <div className="container m-auto bg-black">
            <Navbar/>
            <AboutSecondPart/>
            <AboutThird/>
            <AboutFooter/>
      </div>
    </div>
  )
}
