import React, { useState } from "react";
import { useNavigate } from "react-router";
import turkeyLogo from "../assets/logo2.png";
// import { useTranslation } from "react-i18next";


import LanguageSelector from "../../components/languageSelector";

export default function Header() {
  const navigate = useNavigate();

  // const { t } = useTranslation();

  return (
    <div className="w-screen h-24 top-0 flex gap-2 sm:gap-5 justify-between p-2 sm:p-5  sm:px-10 xl:px- text-black bg-slate-200">
      <div className="flex gap-2 items-center w-full">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/homepage")}
        >
          <img src={turkeyLogo} className="w-14"></img>
          <a
            className="text-[16px] sm:text-[20px] font-bold text-red-600"
            // onClick={() => navigate("/homePage")}
          >
            e-Visa
          </a>
        </div>
        <div className="h-full w-[2px] bg-black"></div>
        <div className="flex flex-col">
          <span className="font-semibold font-serif text-[28px] text-red-500">
            Turkey Visa
          </span>
          <span className="font-semibold font-serif text-[20px] text-red-500">
            Online Application System
          </span>
        </div>
      </div>

      <div className="w-full">
        <LanguageSelector />
      </div>
    </div>
  );
}
