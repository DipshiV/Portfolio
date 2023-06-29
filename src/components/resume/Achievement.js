import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018- 2019</p>
          <h2 className="text-4xl font-bold">Acheivements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="NIMCET EXAM(MCA)."
            subTitle="Secured AIR - 394 in NIMCET 
            2019
            ."
            result="Success"
            des="In 2019 This was my greatest achievements . I cleared MCA entrance exam (NIMCET). Here I scored 394 rank(AIR) and 152 (OBC category).Because of this rank I got admission in National Institute Of Technology Bhopal,Madhya Pradesh "
          />
          <ResumeCard
            title="BHU MCA Entrance."
            subTitle="Secured AIR - 92 in BHU MCA 
            Entrance Exam 201."
            result="Success"
            des="I hod gotten this college also for MCA but I did not get admission here because I had scored good in Nimcet also."
          />
       
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;