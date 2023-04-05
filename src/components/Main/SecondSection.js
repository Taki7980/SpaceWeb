import React from 'react'



export const SecondSection = () => {
      return (
            <div className='animate-fade-in-down'>
                  <div className="container w-[50%]">
                        <div className="textPart text-left pl-10 animate-fade-in-down2">
                              <h1 className="heading font-extrabold text-transparent text-[18px] bg-clip-text bg-gradient-to-r from-white to-gray-600">To the stars through difficulties.</h1>
                              <h3 className="para text-gray-300 text-[25px] font-extrabold">"<strong className='bg-clip-text text-transparent bg-gradient-to-l from-blue-600 to-purple-600'>Ad astra per aspera" is a popular space motto, </strong>which is a Latin phrase that means <strong className="bg-clip-text text-transparent bg-gradient-to-l from-yellow-600 to-lime-600 shadow-xl">"to the stars through difficulties." </strong>It signifies the challenges and obstacles that must be overcome to <strong className="bg-clip-text text-transparent bg-gradient-to-l from-red-600 to-green-500"> explore and understand the vast</strong> expanse of space.</h3>
                              <p className='text-gray-400 text-[10px] font-extrabold'>The motto reflects the determination and resilience required to explore the unknown and push the boundaries of human knowledge and technology. It has been adopted by various space agencies and organizations, including NASA, and serves as a reminder of the perseverance and commitment required to achieve the goals of space exploration.</p>
                        </div>
                        <div className="buttons pl-10 my-10 flex justify-between animate-fade-in-down3">
                              <button class="bg-gradient-to-l from-blue-600 to-purple-600 text-white font-bold py-2 px-8 rounded-full">
                                    Explore
                              </button>
                              <button class=" bg-transparent text-white font-bold py-2 px-4 rounded-full underline hover:text-blue-700">
                                    What do we Do
                              </button>
                        </div>
                  </div>
            </div>
      )
}
