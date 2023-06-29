import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex  justify-end items-center ">
      <img
        className="w-[400px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10 rounded-3xl"
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
}

export default RightBanner