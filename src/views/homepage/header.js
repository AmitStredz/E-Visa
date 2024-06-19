import React from "react";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-28 top-0 flex justify-between p-5 px-20 text-black bg-gradient-to-b from-[#96a4dc] to-[#c3c3e13e]">
      <div className="flex items-center">
        <a className="text-[30px] font-bold cursor-pointer text-red-600" onClick={() => navigate('/homePage')}>Visify</a>
      </div>
      <div className="flex gap-16 items-center text-[18px]">
        <a className="cursor-pointer">About</a>
        <a className="cursor-pointer">Services</a>
        <a className="cursor-pointer">Country</a>
        <a className="cursor-pointer">Visa</a>
        <a className="cursor-pointer">Blog</a>
      </div>
      <div className="flex items-center">
        <button className="p-2 px-4 border border-slate-800 rounded-xl bg-red-600 bg-opacity-80 text-white">
          Contact Us
        </button>
      </div>
    </div>
  );
}
