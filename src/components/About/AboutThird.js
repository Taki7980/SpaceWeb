/* eslint-disable no-unused-vars */
import React from 'react'
import bg1 from '../../images/bg1.jpg'
import bg33 from '../../images/bg33.jpg'
import bg3 from '../../images/bg3.jpg'
import bg4 from '../../images/bg4.jpg'


export const AboutThird = () => {
      return (
            <div>
                  <div className="container bg-black flex h-[70vh] justify-between self-center px-20 font-Roboto animate-fade-in-down2">
                        <div className=" box3 w-[30%] h-[70%]   self-center rounded-xl shadow-xl shadow-gray-900 px-2">
                              <div className="imageInside h-[50%]   overflow-hidden">
                                    <img src={bg1} alt="" className='h-[100%] w-[100%] rounded-lg' />
                              </div>
                              <div className="box1Heading h-[20%]  font-bold text-xl text-transparent bg-clip-text bg-gradient-to-l from-cyan-500 to-violet-700 flex"><p className='self-center'>Fun Fact 1:</p></div>
                              <div className="box1Para h-[30%] font-thin text-gray-500">In space, there is a giant cloud of alcohol that could make trillions of bottles of wine.</div>
                        </div>
                        <div className=" box3 w-[30%] h-[70%]   self-center rounded-xl shadow-xl shadow-gray-900 px-2">
                              <div className="imageInside h-[50%]   overflow-hidden rounded-lg">
                                    <img src={bg3} alt="" className='h-[100%] w-[100%] rounded-lg' />
                              </div>
                              <div className="box1Heading h-[20%] font-bold text-xl text-transparent bg-clip-text bg-gradient-to-l from-cyan-500 to-violet-700 flex"><p className='self-center'>Fun Fact 2:</p></div>
                              <div className="box1Para h-[30%] font-thin text-gray-500">The footprints left by Apollo astronauts on the moon will likely stay there for at least 100 million years.</div>
                        </div>
                        <div className=" box3 w-[30%] h-[70%] self-center rounded-xl shadow-xl shadow-gray-900 px-2">
                              <div className="imageInside h-[50%]   overflow-hidden">
                                    <img src={bg4} alt="" className='h-[100%] w-[100%] rounded-lg' />
                              </div>
                              <div className="box1Heading h-[20%] font-bold text-xl text-transparent bg-clip-text bg-gradient-to-l from-cyan-500 to-violet-700 flex"><p className='self-center'>Fun Fact 3:</p></div>
                              <div className="box1Para h-[30%] font-thin text-gray-500 justify-center text-left">The International Space Station orbits the Earth every 90 minutes, meaning its inhabitants see a sunrise and sunset every 45 minutes.</div>
                        </div>
                  </div>
            </div>
      )
}
// text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600