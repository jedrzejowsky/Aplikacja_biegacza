import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-[380px] h-[40px] relative z-[7] mt-[4px] mr-0 mb-0 ml-[0px] bg-blue-500 bg-opacity-50">
      <Link to="/">
        <div className="w-[40px] h-[40px] bg-[url(../assets/images/logo.png)] bg-cover bg-no-repeat absolute top-0 left-[160px] z-[2]" />
      </Link>
      <Link to="/profile">
        <div className="w-[40px] h-[40px] bg-[url(../assets/images/avatar.png)] bg-cover bg-no-repeat rounded-[50%] border-solid border border-[#f05724] absolute top-0 left-[315px] z-[6]" />
      </Link>
      <Link to="/statistics">
        <div className="w-[40px] h-[40px] bg-[url(../assets/images/statisticsicon.png)] bg-cover bg-no-repeat absolute top-[6px] left-0 z-[7]" />
      </Link>
    </div>
  );
}
