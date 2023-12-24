"use client";
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { Element } from "react-scroll";

const Footer = () => {
  return (
    <div className="z-[20] w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <Element name="contact" />
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href="https://github.com/punitkr03"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <p className="text-[15px] ml-[6px]">Github</p>
            </a>
            <a
              href="https://discordapp.com/users/486018398594138112"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://www.instagram.com/punit_k.r"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a
              href="https://twitter.com/tagpunitkr"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaXTwitter />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <a
              href="https://www.linkedin.com/in/punit-kr03"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <p className="text-[15px] ml-[6px]">Linkedin</p>
            </a>
            <p className="flex flex-row items-center my-[15px]">
              <IoIosMail />
              <span className="text-[15px] ml-[6px]">
                tagpunitkumar@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[.5rem] text-[15px] text-center">
          &copy;2023 All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
