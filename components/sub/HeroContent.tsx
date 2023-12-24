"use client";
import { Element, Link } from "react-scroll";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <>
      <Element name="about"></Element>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-2 md:px-20 mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto md:text-start text-center">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] self-center md:self-start"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Fullstack Developer</h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="josefin tracking-tighter flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto self-center md:self-start md:text-6xl"
          >
            <span>
              Hi, I&apos;m
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Punit Kumar{" "}
              </span>
            </span>
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="josefin flex flex-col text-xl md:text-2xl font-semibold text-white max-w-[600px] w-auto h-auto -mt-4 self-center md:self-start"
          >
            <span className="">
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                the best{" "}
              </span>
              project exprience
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 -mt-2 my-5 max-w-[600px] self-center md:self-start"
          >
            I&apos;m a Full Stack Software Developer with experience in Website
            and Software development. Check out my projects and skills.
          </motion.p>
          <motion.div variants={slideInFromLeft(1)}>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              className="py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            >
              Lets Connect !
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full hidden md:flex md:justify-center md:items-center"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default HeroContent;
