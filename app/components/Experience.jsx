"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
gsap.registerPlugin(ScrollTrigger);

import ContainerTextAnimation from "./ContainerTextAnimation";

export function ExperienceDesktop() {
  const container = useRef();
  useGSAP(
    () => {
      // gsap code here...
      gsap.to(".experience-container", {
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "400%",
          // markers: true,
          pin: true,
          scrub: 3,
        },
        x: "-400%",
        ease: "linear",
        opacity: 1,
      });
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)
  return (
    <div className="laptop:block hidden">
      <ContainerTextAnimation text={"Experience"} />
      <div className="overflow-hidden" ref={container}>
        <div className="flex experience-container">
          <div className="h-[100svh] w-screen px-[5vw] grid tablet:grid-cols-2 grid-cols-1 flex-shrink-0 justify-center items-center">
            <div className=" py-[10vw] rounded-xl mx-[5%]">
              <div className="text-center --sec-l-font font-bold background-rainbow">
                2014
                <br />
                2020
              </div>
            </div>
            <div>
              <div
                className={`bg-[#77ff77] text-[#000] --sec-xs-font w-max px-4 py-2 rounded-xl mb-4`}
              >
                Education
              </div>
              <div className="font-bold">IIS Cittá della Vittoria</div>
              <div>- High School Diploma</div>
            </div>
          </div>

          <div className="h-[100svh] w-screen px-[5vw] grid tablet:grid-cols-2 grid-cols-1 flex-shrink-0 justify-center items-center">
            <div className=" py-[10vw] rounded-xl mx-[5%]">
              <div className="text-center --sec-l-font font-bold background-rainbow">
                2021
                <br />
                2022
              </div>
            </div>

            <div>
              <div
                className={`bg-[#77ff77] text-[#000] --sec-xs-font w-max px-4 py-2 rounded-xl mb-4`}
              >
                Education
              </div>
              <a
                className="underline font-bold"
                target="_blank"
                href="https://www.accademia.me/"
              >
                Accademia delle professioni
              </a>
              <div>- Web Marketing & Social Media Expert</div>
              <p className="--prim-s-font tablet:pr-[50%] pr-0 pl-4 mt-1">
                Gained foundational knowledge in web marketing, including SEO,
                analytics, and digital strategies to enhance online visibility
                and engagement.
              </p>
            </div>
          </div>
          <div className="h-[100svh] w-screen px-[5vw] grid tablet:grid-cols-2 grid-cols-1 flex-shrink-0 justify-center items-center">
            <div className=" py-[10vw] rounded-xl mx-[5%]">
              <div className="text-center --sec-l-font font-bold background-rainbow">
                2022
                <br />
                2024
              </div>
            </div>
            <div>
              <div
                className={`bg-[#77ebff] text-[#000] --sec-xs-font w-max px-4 py-2 rounded-xl mb-4`}
              >
                Work
              </div>
              <a
                className="underline font-bold"
                target="_blank"
                href="https://www.awom.it/"
              >
                AWOM
              </a>
              <div>- Web Developer</div>
              <p className="--prim-s-font tablet:pr-[50%] pr-0 pl-4 mt-1">
                Responsible for developing and managing web projects. I worked
                independently, creating tailored solutions for clients while
                continuously improving my technical skills.
              </p>
            </div>
          </div>
          <div className="h-[100svh] w-screen px-[5vw] grid tablet:grid-cols-2 grid-cols-1 flex-shrink-0 justify-center items-center">
            <div className=" py-[10vw] rounded-xl mx-[5%]">
              <div className="text-center --sec-l-font font-bold background-rainbow">
                2024
                <br />
                2025
              </div>
            </div>
            <div>
              <div
                className={`bg-[#77ff77] text-[#000] --sec-xs-font w-max px-4 py-2 rounded-xl mb-4`}
              >
                Education
              </div>
              <a
                className="underline font-bold"
                target="_blank"
                href="https://www.coursera.org/account/accomplishments/professional-cert/KNEK3UYHVA99"
              >
                Coursera
              </a>
              <div>- IBM Full Stack Software Developer</div>
              <p className="--prim-s-font tablet:pr-[50%] pr-0 pl-4 mt-1">
                Completed the IBM Full Stack Software Developer Specialization,
                covering front-end, back-end, cloud computing, deployment, and
                containerization through hands-on projects.
              </p>
            </div>
          </div>
          <div className="h-[100svh] w-screen px-[5vw] grid tablet:grid-cols-2 grid-cols-1 flex-shrink-0 justify-center items-center">
            <div className=" py-[10vw] rounded-xl mx-[5%]">
              <div className="text-center --sec-l-font font-bold background-rainbow">
                2024
                <br />
                Now
              </div>
            </div>
            <div>
              <div
                className={`bg-[#77ebff] text-[#000] --sec-xs-font w-max px-4 py-2 rounded-xl mb-4`}
              >
                Work
              </div>
              <div className="font-bold">Indipendent</div>
              <div>- Full-stack Developer</div>
              <p className="--prim-s-font tablet:pr-[50%] pr-0 pl-4 mt-1">
                I develop custom software solutions, managing the entire process
                from design to implementation. I work on personal projects and
                client collaborations, with a strong focus on innovation and
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExperienceMobile() {
  return (
    <div className="block laptop:hidden">
      <ContainerTextAnimation text={"Experience"} />
      <div className="px-[5vw] grid tablet:grid-cols-2 grid-cols-1 flex-shrink-0 justify-center items-center my-[30vw]">
        <div className=" py-[5vw] rounded-xl mx-[5%]">
          <div className="text-center --sec-l-font font-bold background-rainbow">
            2014
            <br />
            2020
          </div>
        </div>
        <div>
          <div
            className={`bg-[#77ff77] text-[#000] --sec-xs-font w-max px-4 py-2 rounded-xl mb-4 float-right`}
          >
            Education
          </div>
        </div>

        <div>
          <div className="font-bold">IIS Cittá della Vittoria</div>
          <div>- High School Diploma</div>
        </div>
      </div>

      <div className="px-[5vw] grid tablet:grid-cols-2 grid-cols-1 flex-shrink-0 justify-center items-center my-[30vw]">
        <div className=" py-[5vw] rounded-xl mx-[5%]">
          <div className="text-center --sec-l-font font-bold background-rainbow">
            2021
            <br />
            2022
          </div>
        </div>
        <div>
          <div
            className={`bg-[#77ff77] text-[#000] --sec-xs-font w-max px-4 py-2 rounded-xl mb-4 float-right`}
          >
            Education
          </div>
        </div>
        <div>
          <a
            className="underline font-bold"
            target="_blank"
            href="https://www.accademia.me/"
          >
            Accademia delle professioni
          </a>
          <div>- Web Marketing & Social Media Expert</div>
          <p className="--prim-s-font tablet:pr-[50%] pr-0 pl-4 mt-1">
            Gained foundational knowledge in web marketing, including SEO,
            analytics, and digital strategies to enhance online visibility and
            engagement.
          </p>
        </div>
      </div>

      <div className="px-[5vw] grid tablet:grid-cols-2 grid-cols-1 flex-shrink-0 justify-center items-center my-[30vw]">
        <div className=" py-[5vw] rounded-xl mx-[5%]">
          <div className="text-center --sec-l-font font-bold background-rainbow">
            2022
            <br />
            2024
          </div>
        </div>
        <div>
          <div
            className={`bg-[#77ebff] text-[#000] --sec-xs-font w-max px-4 py-2 rounded-xl mb-4 float-right`}
          >
            Work
          </div>
        </div>
        <div>
          <a
            className="underline font-bold"
            target="_blank"
            href="https://www.awom.it/"
          >
            AWOM
          </a>
          <div>- Web Developer</div>
          <p className="--prim-s-font tablet:pr-[50%] pr-0 pl-4 mt-1">
            Responsible for developing and managing web projects. I worked
            independently, creating tailored solutions for clients while
            continuously improving my technical skills.
          </p>
        </div>
      </div>

      <div className="px-[5vw] grid tablet:grid-cols-2 grid-cols-1 flex-shrink-0 justify-center items-center my-[30vw]">
        <div className=" py-[5vw] rounded-xl mx-[5%]">
          <div className="text-center --sec-l-font font-bold background-rainbow">
            2024
            <br />
            2025
          </div>
        </div>
        <div>
          <div
            className={`bg-[#77ff77] text-[#000] --sec-xs-font w-max px-4 py-2 rounded-xl mb-4 float-right`}
          >
            Education
          </div>
        </div>
        <div>
          <a
            className="underline font-bold"
            target="_blank"
            href="https://www.coursera.org/account/accomplishments/professional-cert/KNEK3UYHVA99"
          >
            Coursera
          </a>
          <div>- IBM Full Stack Software Developer</div>
          <p className="--prim-s-font tablet:pr-[50%] pr-0 pl-4 mt-1">
            Completed the IBM Full Stack Software Developer Specialization,
            covering front-end, back-end, cloud computing, deployment, and
            containerization through hands-on projects.
          </p>
        </div>
      </div>

      <div className="px-[5vw] grid tablet:grid-cols-2 grid-cols-1 flex-shrink-0 justify-center items-center my-[30vw]">
        <div className=" py-[5vw] rounded-xl mx-[5%]">
          <div className="text-center --sec-l-font font-bold background-rainbow">
            2024
            <br />
            Now
          </div>
        </div>
        <div>
          <div
            className={`bg-[#77ebff] text-[#000] --sec-xs-font w-max px-4 py-2 rounded-xl mb-4 float-right`}
          >
            Work
          </div>
        </div>
        <div>
          <div className="font-bold">Indipendent</div>
          <div>- Full-stack Developer</div>
          <p className="--prim-s-font tablet:pr-[50%] pr-0 pl-4 mt-1">
            I develop custom software solutions, managing the entire process
            from design to implementation. I work on personal projects and
            client collaborations, with a strong focus on innovation and
            efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}
