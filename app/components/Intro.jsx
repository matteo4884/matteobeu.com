import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { ASCII_ART } from "../ascii";

export default function Intro() {
  const random = Math.floor(Math.random() * ASCII_ART.length);
  const art = ASCII_ART[random];
  return (
    <div className="relative leading-none h-screen w-full flex flex-col justify-center items-center overflow-hidden ">
      <div className="tablet:w-[50%] w-[92%] text-center">
        <div className="background-rainbow relative font-semibold --sec-m-font">
          <h1>Hi, I'm Matteo :)</h1>
        </div>
        <p className="--prim-m-font mt-[20px]">
          I am a full-stack developer driven by a passion for technology and an
          insatiable curiosity. I specialize in building modern, efficient web
          applications, but my skills extend beyond, allowing me to tackle
          diverse challenges in the tech world.
        </p>
      </div>
      <div className="absolute pointer-events-none z-[-2]">
        <pre className="text-white laptop:text-[0.5vw] text-[1vw] leading-none w-full flex justify-center items-center laptop:opacity-10 opacity-30">
          <code>{art}</code>
        </pre>
      </div>
      <Contacts />
    </div>
  );
}

export function Contacts() {
  return (
    <div className="flex laptop:flex-row flex-col gap-2 w-max --prim-m-font tablet:w-[50%] justify-around mt-[50px]">
      <a
        href="https://www.linkedin.com/in/matteo-beu-73b379238/"
        target="_blank"
        className="flex gap-2 group"
      >
        <FaLinkedin className="group-hover:rotate-[20deg] duration-500" />
        LinkedIn
      </a>
      <div className="laptop:block hidden">|</div>
      <a
        href="https://www.instagram.com/matteo_beu/"
        target="_blank"
        className="flex gap-2 group"
      >
        <FaInstagram className="group-hover:rotate-[20deg] duration-500" />
        Instagram
      </a>
      <div className="laptop:block hidden">|</div>
      <a
        href="https://github.com/matteo4884"
        target="_blank"
        className="flex gap-2 group"
      >
        <FaGithub className="group-hover:rotate-[20deg] duration-500" />
        Github
      </a>
      <div className="laptop:block hidden">|</div>
      <a href="mailto:developer@matteobeu.com" className="flex gap-2 group">
        <MdAlternateEmail className="group-hover:rotate-[20deg] duration-500" />
        E-mail
      </a>
    </div>
  );
}
