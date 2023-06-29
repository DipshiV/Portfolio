import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016-2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MCA"
            subTitle="NIT BHOPAL (MP)  (2019 - 2012)"
            result="8.04"
            des="I have completed my post graduation degree in Master Of Computer Applications from MANIT Bhoapl."
          />
          <ResumeCard
            title="B.Sc. in Maths "
            subTitle="J.P Verma Science Mahavidyalaya (Kanpur University) (2016 - 2019)"
            result="65%"
            des="I did my graduation in B.sc. in Maths "
          />
          <ResumeCard
            title="Twelth School Education"
            subTitle="F.M.S. Inter College Madhoganj ,Hardoi"
            result="71%"
            des="I did my 12th in Science from Hardoi (UP)."
          />
          <ResumeCard
          title="High School Education"
          subTitle="S.B.S. Inter College Dakauli ,Hardoi"
          result="70%"
          des="I did my 10th in Science from Hardoi(UP)."
        />
        </div>
      </div>
      {/* part Two */}

     
    </motion.div>
  );
}

export default Education