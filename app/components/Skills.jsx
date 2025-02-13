"use client";

import ContainerTextAnimation from "./ContainerTextAnimation";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
gsap.registerPlugin(ScrollTrigger);

import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiCodeCurly } from "react-icons/bi";
import { SiCodeigniter } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { SiNginx } from "react-icons/si";
import { FaDigitalOcean } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPm2 } from "react-icons/si";
import MarginContainer from "./MarginContainer";
import { ASCII_ART } from "../ascii";

export default function Skills() {
  const container = useRef();
  useGSAP(
    () => {
      // gsap code here...
      gsap.to(".left-skills", {
        scrollTrigger: {
          trigger: container.current,
          start: "center bottom",
          end: "center center",
          // markers: true,
          scrub: 3,
        },
        x: "0%",
        opacity: 1,
      });
      gsap.to(".right-skills", {
        scrollTrigger: {
          trigger: container.current,
          start: "center bottom",
          end: "center center",
          // markers: true,
          scrub: 3,
        },
        x: "0%",
        opacity: 1,
      });
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)
  return (
    <div className=" skills relative">
      <ContainerTextAnimation text={"Skills Skills"} />

      <div className="relative --clamp-sections z-[-1] grid laptop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-8 gap-y-32 mx-8 mt-16">
        <div className="h-full flex justify-center">
          <div className="rounded-3xl h-full box rainbow rainbow-delay-1 laptop:w-[80%] w-[100%] laptop:p-16 p-8 bg-[#0000002a]">
            <div className="font-semibold --prim-l-font mb-4 text-center">
              Programming Languages
            </div>
            <div className="w-full flex items-center flex-col">
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <IoLogoJavascript size={30} /> Javascript
              </div>
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <FaPython size={30} /> Python
              </div>
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <SiPhp size={30} /> PHP
              </div>
            </div>
          </div>
        </div>

        <div className="h-full flex justify-center">
          <div className="rounded-3xl h-full box rainbow rainbow-delay-2 laptop:w-[80%] w-[100%] laptop:p-16 p-8 bg-[#0000002a]">
            <div className="font-semibold --prim-l-font mb-4 text-center">
              Frontend Development
            </div>
            <div className="w-full flex items-center flex-col">
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <FaHtml5 size={30} /> HTML
              </div>
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <FaCss3Alt size={30} /> CSS
              </div>
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <FaReact size={30} /> React
              </div>
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <RiNextjsFill size={30} /> NextJS
              </div>
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <RiTailwindCssFill size={30} /> Tailwind
              </div>
            </div>
          </div>
        </div>

        <div className="h-full flex justify-center">
          <div className="rounded-3xl h-full box rainbow rainbow-delay-3 laptop:w-[80%] w-[100%] laptop:p-16 p-8 bg-[#0000002a]">
            <div className="font-semibold --prim-l-font mb-4 text-center">
              Backend Development
            </div>
            <div className="w-full flex items-center flex-col">
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <FaNodeJs size={30} /> NodeJS
              </div>
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <SiExpress size={30} /> ExpressJS
              </div>
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <BiCodeCurly size={30} /> REST APIs
              </div>
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <SiCodeigniter size={30} /> Codeigniter
              </div>
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <SiDjango size={30} /> Django
              </div>
            </div>
          </div>
        </div>

        <div className="h-full flex justify-center">
          <div className="rounded-3xl h-full box rainbow rainbow-delay-4 laptop:w-[80%] w-[100%] laptop:p-16 p-8 bg-[#0000002a]">
            <div className="font-semibold --prim-l-font mb-4 text-center">
              Database & Storage
            </div>
            <div className="w-full flex items-center flex-col">
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <SiMongodb size={30} /> MongoDB
              </div>
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <SiMongoose size={30} /> Mongoose
              </div>
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <DiMysql size={30} /> MYSQL
              </div>
            </div>
          </div>
        </div>

        <div className="h-full flex justify-center">
          <div className="rounded-3xl h-full box rainbow rainbow-delay-5 laptop:w-[80%] w-[100%] laptop:p-16 p-8 bg-[#0000002a]">
            <div className="font-semibold --prim-l-font mb-4 text-center">
              DevOps & Deployment
            </div>
            <div className="w-full flex items-center flex-col">
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <SiNginx size={30} /> Nginx
              </div>
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <FaDigitalOcean size={30} /> DigitalOcean
              </div>
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <FaDocker size={30} /> Docker
              </div>
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <FaGitAlt size={30} /> Git
              </div>
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <FaGithub size={30} /> GitHub
              </div>
              <div className="w-[175px] flex gap-4 justify-left items-center laptop:py-4 py-2">
                <SiPm2 size={30} /> PM2
              </div>
            </div>
          </div>
        </div>

        <div className="h-full flex justify-center">
          <div className="rounded-3xl h-full box rainbow rainbow-delay-6 laptop:w-[80%] w-[100%] laptop:p-16 p-8 bg-[#0000002a]">
            <div className="font-semibold --prim-l-font mb-4 text-center">
              Soft Skills
            </div>
            <div className="w-full flex items-center flex-col">
              <div className="text-center flex gap-4 justify-left items-center laptop:py-4 py-2">
                Problem-Solving
              </div>
              <div className="text-center flex gap-4 justify-left items-center laptop:py-4 py-2">
                Self-Learning (Autodidact)
              </div>
              <div className="text-center flex gap-4 justify-left items-center laptop:py-4 py-2">
                Logical and Structured Thinking
              </div>
              <div className="text-center flex gap-4 justify-left items-center laptop:py-4 py-2">
                Realistic and Analytical Mindset
              </div>
              <div className="text-center flex gap-4 justify-left items-center laptop:py-4 py-2">
                Focus on Efficiency and Optimization
              </div>
              <div className="text-center flex gap-4 justify-left items-center laptop:py-4 py-2">
                Competitive Mentality
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden ">
        <MarginContainer>
          <div
            className="grid tablet:grid-cols-2 grid-cols-1 items-center justify-center h-screen"
            ref={container}
          >
            <div className="laptop:px-[15%] px-[0%] text-center left-skills opacity-0 laptop:-translate-x-[50%] z-[-1]">
              I have developed these skills with <b>passion</b>, constantly
              experimenting and refining my knowledge through hands-on practice.
              Working extensively with the terminal, Linux distros, and various
              development tools, I have built a strong technical foundation and
              deepened my understanding of software development.
            </div>
            <div className="pointer-events-none tablet:static absolute z-[-2] right-skills opacity-0 laptop:translate-x-[50%]">
              <pre className="text-white laptop:text-[0.4vw] tablet:text-[0.5vw] text-[1vw]  leading-none w-full flex justify-center items-center tablet:opacity-50 opacity-30">
                <code>{ASCII_ART[1]}</code>
              </pre>
            </div>
          </div>
        </MarginContainer>
      </div>
    </div>
  );
}
