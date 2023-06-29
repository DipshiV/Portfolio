import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Salesforce Developer"
            subTitle="Tech Matrix(consulting) - (2021 - 2022)"
            result="Jaipur,Rajasthan"
            des="This is my first job So I was very excited learn new technologies.This is CRM based Salesforce Company. Here I had learned about Salesforce how it work As it has own plateform salesforce. I have learned LWC compoenent, Visual force pages,how create custom object,fields and schema etc.and during my internship I have build a project which is EVENT MANAGEMENT "
          />
       
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;