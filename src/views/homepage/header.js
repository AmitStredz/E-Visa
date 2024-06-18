import React from "react";

export default function Header() {
  return (
    <div className="w-screen h-28 top-0 flex justify-between p-5 px-20">
      <div>
        <a className="text-[30px] font-bold">Visify</a>
      </div>
      <div className="flex gap-16">
        <a>About</a>
        <a>Services</a>
        <a>Country</a>
        <a>Visa</a>
        <a>Blog</a>
      </div>
      <div>
        <button className="p-2 px-4 border-2 border-slate-500 rounded-xl">
          Contact Us
        </button>
      </div>
    </div>
  );
}
