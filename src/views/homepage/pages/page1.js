import React from "react";

import img1 from "../assets/homeBanner4.webp";
import applyButton from "../assets/applyButton.jpg";
import paymentButton from "../assets/paymentButton.jpg";
import downloadButton from "../assets/downloadButton.jpg";
import { useNavigate } from "react-router";

export default function Page1() {
  const navigate = useNavigate();

  return (
    <div className="p-2">
      <div
        className="w-full flex justify-center md:px-10 bg-no-repeat bg-cover bg-bottom bg-opacity-10"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="flex flex-col justify-start items-start w-11/12 md:w-4/5">
          <div className="lg:w-3/5 bg-white bg-opacity-60 md:bg-opacity-90 p-10 xl:px-20 h-full text-black">
            <h1 className="text-[30px] sm:text-[40px] lg:text-[60px] font-bold leading-9 sm:leading-13">
              Your Official Source for Turkey E-Visas
            </h1>
            <h2 className="text-[24px] sm:text-[30px] max-sm:leading-8">
              Fast, Simple, Secure E-Visa Applications
            </h2>
            <p className="max-sm:text-[12px]">
              This official portal provides a simple and efficient way to apply
              for your Turkey e-visa online. Ensure you have all necessary
              documents before starting your application.
            </p>
            <button
              className="p-2 px-2 sm:px-4 border-1 border-slate-600 bg-red-600 bg-opacity-85 mt-5 font-semibold text-[18px]"
              onClick={() => navigate("/apply")}
            >
              Apply For Turkey eVisa
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-3 lg:gap-10 xl:gap-28 p-14 md:p-12 lg:p-10 w-screen sm:h-40  text-black">
        <img
          src={applyButton}
          className="hover:scale-[1.02] transition-all cursor-pointer max-sm:w-60 max-md:w-52"
          onClick={() => navigate("/apply")}
        ></img>
        <img
          src={paymentButton}
          className="hover:scale-[1.02] transition-all cursor-pointer max-sm:w-60 max-md:w-52"
        ></img>
        <img
          src={downloadButton}
          className="hover:scale-[1.02] transition-all cursor-pointer max-sm:w-60 max-md:w-52"
        ></img>
      </div>
    </div>
  );
}
