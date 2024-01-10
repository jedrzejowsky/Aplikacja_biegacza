import React from "react";
import "./index.css";
import Navbar from "../components/navbar";

export default function Main() {
  return (
    <div className="main-container w-[360px] h-[942px] text-[0px] bg-[#fff] relative overflow-hidden mx-auto my-0">
      <Navbar />
      <span className="block h-[28px] font-['Roboto'] text-[24px] font-extrabold leading-[28px] text-[#000] relative text-left whitespace-nowrap z-[1] mt-[50px] mr-0 mb-0 ml-[125px]">
        Statystyki
      </span>
      <div className="flex w-[309px] h-[200px] justify-between items-center relative z-[6] mt-[30px] mr-0 mb-0 ml-[30px]">
        <div className="w-[142px] h-[200px] shrink-0 bg-[url(../assets/images/stat1.png)] bg-cover bg-no-repeat relative z-[5]" />
        <div className="w-[143px] h-[200px] shrink-0 bg-[url(../assets/images/stat2.png)] bg-cover bg-no-repeat relative z-[6]" />
      </div>
      <div className="flex w-[311px] h-[202px] justify-between items-center relative z-[4] mt-[28px] mr-0 mb-0 ml-[28px]">
        <div className="w-[142px] h-[200px] shrink-0 bg-[url(../assets/images/stat2.png)] bg-cover bg-no-repeat relative z-[4]" />
        <div className="w-[143px] h-[202px] shrink-0 bg-[url(../assets/images/stat3.png)] bg-cover bg-no-repeat relative z-[3]" />
      </div>
      <div className="w-[142px] h-[202px] bg-[url(../assets/images/stat4.png)] bg-cover bg-no-repeat relative z-[2] mt-[32px] mr-0 mb-0 ml-[28px]" />
    </div>
  );
}
