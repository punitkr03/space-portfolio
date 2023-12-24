"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="z-[20] w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[15px] font-semibold">
          Next.js Wizard
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="josefin text-[30px] text-white font-medium mt-[10px] text-center"
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[25px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;
