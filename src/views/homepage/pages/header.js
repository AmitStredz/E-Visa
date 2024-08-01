import React, { useState } from "react";
import { useNavigate } from "react-router";
import turkeyLogo from "../assets/logo2.png";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";

import LanguageSelector from "../../components/languageSelector";

export default function Header() {
  const [isMenu, setisMenu] = useState(false);
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <div className="w-screen h-24 top-0 flex gap-2 sm:gap-5 justify-between p-2 sm:p-5  sm:px-10 xl:px- text-black bg-slate-200">
      <div
        className="flex items-center cursor-pointer w-full"
        onClick={() => navigate("/homepage")}
      >
        <img src={turkeyLogo} className="w-14"></img>
        <a
          className="text-[16px] sm:text-[20px] font-bold text-red-600"
          onClick={() => navigate("/homePage")}
        >
          e-Visa for Online Application
        </a>
      </div>

      <div className="hidden lg:flex gap-5 xl:gap-10 items-center text-[18px]">
        <a className="cursor-pointer">About</a>
        <a className="cursor-pointer">Services</a>
        <a className="cursor-pointer">Country</a>
        <a className="cursor-pointer">Visa</a>
        <a className="cursor-pointer">Blog</a>
      </div>
      <div className="flex items-center justify-center gap-2 sm:gap-5 w-full">
        <div className="hidden md:flex border-2 border-slate-500 p-1 px-2  gap-2">
          <i className="ri-search-line"></i>
          <input
            className=" outline-none w-60 bg-transparent"
            type="text"
            placeholder="Search"
          />
        </div>
        <div
          id="google_translate_element"
          // className="w-20 overflow-hidden object-contain"
        ></div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 w-full">
          <button className="flex p-1 sm:p-2 sm:px-4 border border-slate-800  bg-red-600 bg-opacity-80 text-white">
            Contact Us
          </button>
          <LanguageSelector />
        </div>
        <IoIosMenu
          size={30}
          className="lg:hidden"
          onClick={() => setisMenu(true)}
        />
      </div>

      {/* <LanguageSelector></LanguageSelector> */}

      <div
        className={`fixed flex flex-col w-[50%]  items-center p-5 h-screen backdrop:blur-md top-0 lg:hidden bg-white gap-5 transition-all ${
          isMenu ? "right-0" : "hidden right-[100%]"
        }`}
        // data-aos="fade-left"
      >
        <div className="flex w-full p-2 justify-start">
          <IoClose size={40} onClick={() => setisMenu(false)} />
        </div>
        <div className="flex flex-col justify-evenly h-[50%]">
          <a className="cursor-pointer">About</a>
          <a className="cursor-pointer">Services</a>
          <a className="cursor-pointer">Country</a>
          <a className="cursor-pointer">Visa</a>
          <a className="cursor-pointer">Blog</a>
        </div>
      </div>
    </div>
  );
}
