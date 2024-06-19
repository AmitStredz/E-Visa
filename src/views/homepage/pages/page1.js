import React from 'react'

import img1 from "../assets/homeBanner4.jpg";
import applyButton from '../assets/applyButton.jpg'
import paymentButton from '../assets/paymentButton.jpg'
import downloadButton from '../assets/downloadButton.jpg'
import { useNavigate } from "react-router";

export default function Page1() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-full flex justify-center px-10 bg-no-repeat bg-cover bg-bottom bg-opacity-10" style={{ backgroundImage: `url(${img1})` }}>
          <div className="flex flex-col justify-start items-start w-4/5">
            <div className="w-3/5 bg-white bg-opacity-90 p-10 px-20 h-full text-black">
              <h1 className="text-[60px] font-bold leading-13">
              Your Official Source for Turkey E-Visas
              </h1>
              <h2 className="text-[30px]">
                Fast, Simple, Secure E-Visa Applications
              </h2>
              <p>
              This official portal provides a simple and efficient way to apply for your Turkey e-visa online. Ensure you have all necessary documents before starting your application.
              </p>
              <button
                className="p-2 px-4 border-1 border-slate-600 bg-red-600 bg-opacity-85 mt-5 font-semibold text-[18px]"
                onClick={() => navigate("/apply")}
              >
                Apply For Turkey eVisa
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center gap-28 p-10 w-screen h-40  text-black">
          <img src={applyButton} className="hover:scale-[1.02] transition-all cursor-pointer" onClick={() =>navigate('/apply')}>
          </img>
          <img src={paymentButton} className="hover:scale-[1.02] transition-all cursor-pointer">
          </img>
          <img src={downloadButton} className="hover:scale-[1.02] transition-all cursor-pointer">
          </img>
        </div>
    </div>
  )
}
