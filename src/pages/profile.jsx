import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Main() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="main-container w-[360px] h-[942px] bg-[#fff] relative overflow-hidden mx-auto my-0 font-roboto">
      <Navbar />
      <div className="w-[100px] h-[100px] shrink-0 bg-[url(../assets/images/avatar.png)] bg-cover bg-no-repeat relative z-[6] mt-[32px] mr-0 mb-0 ml-[130px]" />
      <span className="block text-testuser text-[#f05724] mt-[15px] ml-[121px]">
        testuser#123
      </span>
      <span className="block font-bold text-title text-black mt-[30px] ml-[128px]">
        Twoje dane
      </span>
      <div className="flex-row mt-[15px] ml-[27px] border-b-2 border-blue-500">
        <div className="divider" />
        <div className="data">Wiek</div>
        <div className="data">23 lat</div>
      </div>
      <div className="flex-row mt-[15px] ml-[27px] border-b-2 border-blue-500">
        <div className="divider" />
        <div className="data">Wzrost</div>
        <div className="data">180 cm</div>
      </div>
      <div className="flex-row mt-[15px] ml-[27px] border-b-2 border-blue-500">
        <div className="divider" />
        <div className="data">Waga</div>
        <div className="data">85 kg</div>
      </div>
      <span className="block font-bold text-title-goal mt-[10px] ml-[140px]">
        Twój cel
      </span>
      <div className="flex-row mt-[15px] ml-[27px] border-b-2 border-blue-500">
        <div className="divider" />
        <div className="data">Waga</div>
        <div className="data">79 kg</div>
      </div>
      <div className="flex-row mt-[15px] ml-[27px] border-b-2 border-blue-500">
        <div className="divider" />
        <div className="data">Dystans</div>
        <div className="data">10 km</div>
      </div>
      <span className="block font-bold text-title-activity mt-[30px] ml-[91px]">
        Aktualna aktywność
      </span>
      <div className="options mt-[25px] ml-[25px]">
        {["Raz w tygodniu", "Raz w miesiącu", "Raz w roku", "W ogóle"].map(
          (option, index) => (
            <div
              key={index}
              className={`option ${
                selectedOption === index ? "bg-blue-500" : ""
              }`}
              onClick={() => setSelectedOption(index)}
            >
              <div className="dot" />
              <span className="option-text">{option}</span>
            </div>
          )
        )}
      </div>
      <div className="divider" />

      <Link to="/login" className="button-logout mt-[25px]">
        <span className="text-logout ml-[150px] font-bold text-white  bg-orange-500 ">
          Wyloguj
        </span>
      </Link>
    </div>
  );
}
