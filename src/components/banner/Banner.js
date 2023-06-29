import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'

const Banner = () => {
  return (
    <div>
    <section
    
    className="w-full pt-10 pb-20 lgl:w-1/2 flex  xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
  >
 <LeftBanner/>
 <RightBanner/>
  

   
  </section>
 
 
  </div>
  )
}

export default Banner