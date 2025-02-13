import ContainerTextAnimation from "./ContainerTextAnimation";
import MarginContainer from "./MarginContainer";
import { FaBirthdayCake } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { BsGeoAltFill } from "react-icons/bs";
import { MdDownload } from "react-icons/md";

export default function About() {
  return (
    <div className="h-full">
      <ContainerTextAnimation text={"About About"} />
      <MarginContainer extraClass={"h-full"}>
        <div className="laptop:py-[15vw] py-[30vw] grid grid-cols-1 tablet:grid-cols-2 h-full justify-center items-center">
          <div className="flex justify-center">
            <div
              className="w-[20vw] bg-[#0000] min-w-[200px] bg-center bg-cover bg-no-repeat aspect-square rounded-full mb-4"
              style={{ backgroundImage: "url('matteobeu.png')" }}
            ></div>
          </div>

          <div className="text-left">
            <div className="--sec-s-font background-rainbow font-semibold my-8">
              Full-stack Developer
            </div>
            <div className="">
              <div className="flex justify-left items-center my-2 gap-2">
                <div>
                  <IoPersonSharp />
                </div>
                <div className="">Matteo Beu</div>
              </div>
              <div className="flex justify-left items-center my-2 gap-2">
                <div>
                  <FaBirthdayCake />
                </div>
                <div>09/02/2000</div>
              </div>
              <div className="flex justify-left items-center my-2 gap-2">
                <div>
                  <BsGeoAltFill />
                </div>
                <div>Veneto - Italy</div>
              </div>
              <p className="my-8 laptop:pr-[25%] --prim-s-font">
                I’m Matteo, a fullstack developer specialized in web application
                development. I’ve always been passionate about technology since
                I was a child. I have an analytical, results-driven mindset and
                enjoy tackling complex challenges by solving problems in a
                practical and structured way.
                <br />
                <br />
                I’m always looking to improve my skills, constantly learning new
                languages and technologies to stay ahead and contribute to
                projects that make a real impact. My true goal is to leave a
                mark, which is why I like to dream big and aim for ideas that go
                beyond the ordinary.
              </p>
              <a
                href="/matteobeu_cv.pdf"
                download={true}
                className="flex w-max text-[#171717] rounded-xl font-bold gap-2 justify-left items-center px-4 py-2 bg-[#fff]"
              >
                <MdDownload /> CV
              </a>
            </div>
          </div>
        </div>
      </MarginContainer>
    </div>
  );
}
