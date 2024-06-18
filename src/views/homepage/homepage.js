import React from "react";
import img1 from "./assets/visa.jpeg";
import Header from "./header";
import Footer from "./footer";
import { useNavigate } from "react-router";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="relative text-white overflow-hidden">
      <Header></Header>
      <div className="w-full flex justify-center p-10">
        <div className="flex flex-col justify-start items-start w-4/5">
          <div className="w-2/4">
            <h1 className="text-[60px] font-bold">
              Your Gateway to Global Travel
            </h1>
            <h2 className="text-[30px]">
              Fast, Simple, Secure E-Visa Applications
            </h2>
            <p>
              At VISIFY, we aim to simplify the visa application process. Our
              platform provides a seamless experience for travelers looking to
              obtain their visas quickly and efficiently.
            </p>
            <button
              className="p-2 px-4 rounded-xl border-2 border-slate-400 bg-slate-800 bg-opacity-35 mt-5"
              onClick={()=> navigate("/apply")}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center gap-28 p-10 w-screen h-40 bg-slate-900 bg-opacity-30">
        <div className="">
          <h1 className="text-[52px] font-semibold">15+</h1>
          <p>Years of Experience</p>
        </div>
        <div className="w-1 h-20 bg-orange-700"></div>
        <div>
          <h1 className="text-[52px] font-semibold">18k</h1>
          <p>Clients Worldwide</p>
        </div>
        <div className="w-1 h-20 bg-orange-700"></div>

        <div>
          <h1 className="text-[52px] font-semibold">98%</h1>
          <p>Success rate</p>
        </div>
        <div className="w-1 h-20 bg-orange-700"></div>

        <div>
          <h1 className="text-[52px] font-semibold">28k</h1>
          <p>Visa issued </p>
        </div>
      </div>
      <div className="w-full">
        <Footer></Footer>
      </div>
      <div>
        <img
          src={img1}
          className="w-screen h-screen object-bottom absolute top-0 left-0 -z-10"
        ></img>
      </div>
    </div>
  );
}
