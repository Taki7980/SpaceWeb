import React from 'react'
import marsBg from '../../images/marsBg.jpg'

export const AboutSecondPart = () => {
  return (
    <div>
      <div className="container flex h-[70vh] bg-black animate-fade-in-down2">
        <div className="imageContainer w-[50%] flex">
          <div className="imgbox self-center m-auto">
            <img src={marsBg} className="h-[300px] w-[500px] rounded-2xl" alt="hg" />
          </div>
        </div>
        <div className="detailsContainer w-[50%] flex text-white">
          <div className="deatilsInnerBox self-center px-7 m-auto h-[300px]">
            <h3 className="heading text-[30px] py-4 font-Roboto font-bold text-transparent bg-clip-text bg-gradient-to-l from-cyan-500 to-violet-700">Exploring Space: A Journey Beyond Our World</h3>
            <p className="para font-thin text-gray-500 font-Roboto">From the beginnings of human fascination with the stars to the latest discoveries in space exploration, this documentary showcases the most remarkable achievements and discoveries made by humanity. We will witness the majesty of our solar system, including the planets, moons, and asteroids that populate it, as well as the distant galaxies and black holes that exist beyond. Through stunning visuals and expert commentary, "Exploring Space" captures the wonder and excitement of exploring the final frontier."</p>
          </div>
        </div>
      </div>
    </div>
  )
}
