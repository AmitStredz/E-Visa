import React from "react";
import { useNavigate } from "react-router";
import turkeyLogo from '../assets/logo2.png'

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-24 top-0 flex gap-5 justify-between p-5 px-20 text-black bg-slate-200">
      <div className="flex items-center cursor-pointer">
        <img src={turkeyLogo} className="w-14"></img>
        <a className="text-[30px] font-bold text-red-600" onClick={() => navigate('/homePage')}>Visify</a>
      {/* <div className="leading-5">
        <p>Republic of Turkey</p>
        <p className="font-semibold text-[18px]">Electronic Visa Application System</p>
      </div> */}
      </div>
      <div className="flex gap-16 items-center text-[18px]">
        <a className="cursor-pointer">About</a>
        <a className="cursor-pointer">Services</a>
        <a className="cursor-pointer">Country</a>
        <a className="cursor-pointer">Visa</a>
        <a className="cursor-pointer">Blog</a>
      </div>
      <div className="flex items-center gap-5">
        <div className="border-2 border-slate-500 p-1 px-2 flex gap-2">
        <i className="ri-search-line"></i>
        <input className=" outline-none w-60 bg-transparent" type="text" placeholder="Search"/>

        </div>
        <button className="p-2 px-4 border border-slate-800  bg-red-600 bg-opacity-80 text-white">
          Contact Us
        </button>
      </div>
    </div>
  );
}
