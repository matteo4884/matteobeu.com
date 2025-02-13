import Pathname from "./Pathname";

export default function Container({ children }) {
  return (
    <>
      {/* <div className="h-screen w-screen flex flex-col fixed top-0 left-0 pointer-events-none z-10">
        <div className="h-[26px] bg-[#fff] flex justify-center items-center text-[#171717] pointer-events-none">
          <Pathname />
        </div>
        <div className=" border-b-4 border-l-4 border-r-4 border-[#fff] flex-1 pointer-events-none"></div>
      </div> */}
      <div className="no-scrollbar">{children}</div>
    </>
  );
}
