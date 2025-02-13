"use client";

import { BiSolidToTop } from "react-icons/bi";
import { Contacts } from "./Intro";
import { MdDownload } from "react-icons/md";

export default function Footer() {
  return (
    <div className="h-[100vh] flex flex-col justify-between pt-[40vh] items-center py-2">
      <div
        className="--sec-s-font font-bold uppercase text-center background-rainbow cursor-pointer group"
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <div className="flex justify-center items-center">
          <BiSolidToTop
            color="#2196f3"
            className="group-hover:-translate-y-[10px] duration-200"
          />
        </div>
        <div>Back to Top</div>
      </div>

      <Contacts />
      <a
        href="/matteobeu_cv.pdf"
        download={true}
        className="flex w-max text-[#171717] rounded-xl font-bold gap-2 justify-left items-center px-4 py-2 bg-[#fff]"
      >
        <MdDownload /> CV
      </a>
      <div className="--prim-s-font text-center">
        This website does NOT collect data and does NOT use cookies.
      </div>
    </div>
  );
}
