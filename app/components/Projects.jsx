"use client";

import React, { useEffect, useRef, useState } from "react";
import ContainerTextAnimation from "./ContainerTextAnimation";
import { RxCross2 } from "react-icons/rx";
import { SlSizeFullscreen } from "react-icons/sl";

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const followerRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  const handleMouseMove = (event) => {
    mousePosition.current = { x: event.clientX, y: event.clientY };

    if (!animationFrameId.current) {
      animationFrameId.current = requestAnimationFrame(() => {
        if (followerRef.current) {
          followerRef.current.style.transform = `translate(${mousePosition.current.x}px, ${mousePosition.current.y}px)`;
        }
        animationFrameId.current = null;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div className="">
      <ContainerTextAnimation text={"Projects"} />
      {PROJECTS.map((proj, i) => {
        return (
          <Project
            key={i}
            id={i}
            src={proj.src}
            setVisible={setVisible}
            setTitle={setTitle}
            title={proj.title}
            paragraph={proj.paragraph}
            link={proj.link}
          />
        );
      })}

      <div
        ref={followerRef}
        className="hidden laptop:block rounded-lg p-4 backdrop-blur-default bg-[#00000056] font-bold --prim-s-font"
        style={{
          position: "fixed",
          opacity: visible ? 100 : 0,
          top: 0,
          left: 0,
          margin: "15px 0px 0px 15px",
          pointerEvents: "none", // Evita di catturare gli eventi del mouse
          transition: "transform 0.02s linear, opacity 0.3s ease-in-out",
        }}
      >
        <div>{title}</div>
        <div>Click for more info!</div>
      </div>
    </div>
  );
}

export function Project({
  id,
  src,
  title,
  link,
  paragraph,
  setVisible,
  setTitle,
}) {
  const [openProject, setOpenProject] = useState(false);
  return (
    <div className="m-[10vw]">
      <div
        className="h-full w-full max-w-[1200px] relative left-0 right-0 mx-auto bg-center bg-cover bg-no-repeat rounded-xl"
        style={{
          backgroundImage: `url(${src.replace(
            "desktop.webm",
            "placeholder.png"
          )})`,
        }}
        onMouseEnter={() => {
          setTitle(title);
          setVisible(true);
        }}
        onMouseLeave={() => {
          setVisible(false);
        }}
      >
        <video
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full cursor-pointer rounded-xl max-h-screen"
          id={`video-${id}`}
          onClick={() => {
            setOpenProject(true);
            setVisible(false);
            document.body.style.overflow = "hidden";
          }}
        >
          <source src={src} type="video/webm" />
          <source src={src.replace(".webm", ".mp4")} type="video/mp4" />
        </video>
        {/* <div
          className="absolute right-4 bottom-4 p-2 bg-[#17171779] cursor-pointer"
          onMouseEnter={() => {
            setVisible(false);
          }}
          onMouseLeave={() => {
            setVisible(true);
          }}
          onClick={(e) => {
            e.stopPropagation();
            const video = document.getElementById(`video-${id}`);

            if (video.requestFullscreen) video.requestFullscreen();
            else if (video.webkitRequestFullscreen)
              video.webkitRequestFullscreen();
            else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
            else if (video.msRequestFullscreen) video.msRequestFullscreen();
            else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
          }}
        >
          <SlSizeFullscreen />
        </div> */}

        <div
          className="fixed flex justify-center duration-200 items-center backdrop-blur-default top-0 left-0 h-screen w-screen z-50"
          style={{
            pointerEvents: openProject ? "all" : "none",
            opacity: openProject ? 100 : 0,
          }}
        >
          <div className="relative laptop:w-[50%] w-full m-[8vw] bg-[#fff] laptop:p-16 p-8 text-[#171717] border-[#171717] border rounded-xl">
            <div
              className="absolute top-0 right-0 cursor-pointer bg-[#fff] border-[#171717] border p-2 rounded-full translate-x-[40%] -translate-y-[40%]"
              onClick={() => {
                setOpenProject(false);
                setVisible(true);
                document.body.style.overflow = "auto";
              }}
            >
              <RxCross2 size={25} />
            </div>
            <div className="--sec-xs-font font-bold mb-4">{title}</div>
            <div className="mb-4 --prim-s-font">{paragraph}</div>
            {link && (
              <a
                className="bg-[#171717] px-4 py-2 text-[#fff] rounded-xl --prim-s-font font-semibold"
                href={link}
                target="_blank"
              >
                View Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    title: "Armonia",
    paragraph:
      "I designed and developed the website for Armonia, a collective focused on creating audiovisual experiences within the electronic music scene. The site features a modern, intuitive interface that highlights their stunning DJ set locations and artistic collaborations. It’s optimized for high performance and smooth navigation across all devices. Additionally, I managed the deployment process, hosting the website on a virtual machine configured with NGINX.",
    link: "https://armoniaofc.com/",
    src: "/videos/armonia_desktop.webm",
  },
  {
    title: "ADP Business (AWOM Collaboration)",
    paragraph:
      "I developed the website for ADP Business in collaboration with AWOM. While AWOM handled the graphic design, I was responsible for the development and deployment of the site. It features a clean, professional design with user-friendly navigation and optimized performance, ensuring a seamless experience across all devices.",
    link: "https://adpbusiness.it/",
    src: "/videos/adp_desktop.webm",
  },
  {
    title: "Mu Gelateria (AWOM Collaboration)",
    paragraph:
      "I developed the multi-page, multilingual website for Mu Gelateria in collaboration with AWOM. While AWOM handled the graphic design, I was responsible for the development. The site is designed to offer a smooth and engaging user experience, featuring a modern layout that highlights the brand's products and values. It’s optimized for performance and accessibility, ensuring seamless navigation across different languages and devices.",
    link: "https://mg-gelateriamu.vercel.app/",
    src: "/videos/mu_desktop.webm",
  },
  {
    title: "2D Quiz Game",
    paragraph:
      "A 2D quiz game I developed purely for fun in less than two days. The gameplay involves finding question marks and answering questions correctly to progress. The game is available exclusively for desktop, as it was created just for entertainment with a focus on quick development and a simple, engaging experience.",
    link: "https://quizgame.matteobeu.com/",
    src: "/videos/quizgame_desktop.webm",
  },
  {
    title: "Page Transition Library",
    paragraph:
      "An animation library for page transitions, developed and published when I used to work at AWOM. This library implements a wide range of smooth, dynamic animations that are triggered when clicking on links, enhancing the user experience with seamless transitions between pages.",
    link: "https://github.com/awomstudio/awomPT",
    src: "/videos/awompt_desktop.webm",
  },
  {
    title: "Generic Administrator Panel",
    paragraph:
      "I developed an admin panel using React for the frontend and Node.js, Express.js, MongoDB, and APIs for the backend. This admin panel provides businesses with an intuitive interface to efficiently manage data, users, and content. It can be customized to handle tasks such as user management, content updates, analytics tracking, and workflow automation, making it a powerful tool for improving operational efficiency and streamlining business processes.",
    link: "",
    src: "/videos/adminpanel_desktop.webm",
  },
  {
    title: "Funny Road Hazards",
    paragraph:
      "I developed a fun platform designed to report road hazards, where each 'puffo' represents a hazard alert. Registered users can add new reports to the database, and each alert is automatically removed after 3 hours. The platform is built with React for the frontend and Node.js, Express.js, and Mongoose for the backend. It’s optimized for mobile devices while maintaining excellent performance on desktop as well.",
    link: "",
    src: "/videos/puffi_desktop.webm",
  },
];
