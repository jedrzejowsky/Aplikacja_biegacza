import React, { useState } from "react";
import "./index.css";
import Navbar from "../components/navbar";

export default function Main() {
  const [dlugosc, setDlugosc] = useState("");
  const [odleglosc, setOdleglosc] = useState("");
  const [waga, setWaga] = useState("");

  const dodajBieg = () => {
    if (dlugosc === "" || odleglosc === "" || waga === "") {
      alert("Proszę wypełnić wszystkie pola.");
      return;
    }

    alert("Dodano bieg!");
  };
  return (
    <div className="main-container w-[360px] h-[942px] bg-[#fff] relative overflow-hidden mx-auto my-0">
      <div className="w-[360px] h-[320px] text-[0px] bg-[rgba(240,87,36,0.2)] rounded-tl-none rounded-tr-none rounded-br-[16px] rounded-bl-[16px] relative shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-[5px] mr-0 mb-0 ml-0">
        <Navbar />
        <span className="block h-[28px] font-['Roboto'] text-[24px] font-bold leading-[28px] text-[#000] relative text-left whitespace-nowrap z-[3] mt-[30px] mr-0 mb-0 ml-[94px]">
          Witaj ponownie!
        </span>
        <span className="block h-[23px] font-['Roboto'] text-[20px] font-normal leading-[23px] text-[#000] relative text-left whitespace-nowrap z-[5] mt-[-1px] mr-0 mb-0 ml-[127px]">
          testuser#123
        </span>
        <div className="w-[139px] h-[135px] bg-[url(../assets/images/pagepic.png)] bg-cover bg-no-repeat relative z-[21] mt-[13px] mr-0 mb-0 ml-[117px]" />
        <div className="w-[205px] h-[56px] font-['Roboto'] text-[24px] font-bold leading-[28.125px] relative text-center z-[4] mt-[15px] mr-0 mb-0 ml-[78px]">
          <span className="font-['Roboto'] text-[24px] font-bold leading-[28.8px] text-[#000] relative text-center">
            Aktualna kondycja <br />
          </span>
          <span className="font-['Roboto'] text-[24px] font-medium leading-[35.8px] text-[#f05724] relative text-center">
            zaawansowany
          </span>
        </div>
      </div>
      <span className="flex w-[96px] h-[23px] justify-center items-start font-['Roboto'] text-[20px] font-bold leading-[23px] text-[#000] relative text-center whitespace-nowrap z-[15] mt-[40px] mr-0 mb-0 ml-[132px]">
        Dodaj bieg
      </span>
      <div className="mb-4">
        <label htmlFor="dlugosc" className="block mb-1 font-semibold">
          Długość:
        </label>
        <input
          type="text"
          id="dlugosc"
          placeholder="Wpisz długość"
          value={dlugosc}
          onChange={(e) => setDlugosc(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="odleglosc" className="block mb-1 font-semibold">
          Odległość:
        </label>
        <input
          type="text"
          id="odleglosc"
          placeholder="Wpisz odległość"
          value={odleglosc}
          onChange={(e) => setOdleglosc(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="waga" className="block mb-1 font-semibold">
          Aktualna waga:
        </label>
        <input
          type="text"
          id="waga"
          placeholder="Wpisz wagę"
          value={waga}
          onChange={(e) => setWaga(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600"
        onClick={dodajBieg}
      >
        Dodaj
      </button>
    </div>
  );
}
