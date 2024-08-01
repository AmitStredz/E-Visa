import React, { useState } from "react";
import { useNavigate } from "react-router";
import turkeyLogo from "../assets/logo2.png";
// import { useTranslation } from "react-i18next";

import LanguageSelector from "../../components/languageSelector";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [isGlobe, setIsGlobe] = useState(false);
  const navigate = useNavigate();

  // const { t } = useTranslation();

  return (
    <div className="relative w-screen h-24 top-0 flex gap-2 sm:gap-5 justify-between p-5 sm:px-10 xl:px- text-black bg-slate-200">
      <div className="flex gap-2 items-center w-full">
        <div
          className="flex flex-col sm:flex-row items-center cursor-pointer"
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
        <div className="h-full w-[2px] bg-red-400"></div>
        <div className="flex flex-col">
          <span className="font-semibold font-serif text-[18px] sm:text-[28px] text-red-500">
            Turkey Visa
          </span>
          <span className="font-semibold font-serif text-[14px] sm:text-[20px] text-red-500">
            Online Application System
          </span>
        </div>
      </div>

      <div className="w-full hidden lg:flex">
        <LanguageSelector onclose={()=>{}}/>
        <div id="google_translate_element"></div>
      </div>
      <img
        src="/globe.svg"
        onClick={() => setIsGlobe(!isGlobe)}
        className="cursor-pointer w-14"
      ></img>

      {isGlobe && (
        <div className="fixed flex justify-center items-center p-6 top-0 left-0 h-screen bg-black bg-opacity-40 w-screen z-50">
          <div className="flex flex-col items-center md:w-[60%] xl:w-[30%] bg-white sm:p-10">
            <div className="flex justify-end w-full">
              <IoClose size={40} onClick={() => setIsGlobe(false)} className="cursor-pointer" />
            </div>
            <img src="/globe.svg" className="w-20 sm:w-40"></img>
            <div className="p-5">
              <LanguageSelector onclose={()=>setIsGlobe(false)}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
