import React from "react";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-28 top-0 flex justify-between p-5 px-20">
      <div>
        <a className="text-[30px] font-bold cursor-pointer" onClick={() => navigate('/homePage')}>Visify</a>
      </div>
      <div className="flex gap-16">
        <a className="cursor-pointer">About</a>
        <a className="cursor-pointer">Services</a>
        <a className="cursor-pointer">Country</a>
        <a className="cursor-pointer">Visa</a>
        <a className="cursor-pointer">Blog</a>
      </div>
      <div>
        <button className="p-2 px-4 border-2 border-slate-500 rounded-xl">
          Contact Us
        </button>
      </div>
    </div>
  );
}
