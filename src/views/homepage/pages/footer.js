import React from "react";
import visaLogo from "../assets/visaLogo.png";
import JCBLogo from "../assets/JCBLogo.png";
import UnionPayLogo from "../assets/UnionPayLogo.png";
import MasterCardLogo from "../assets/masterCard.png";
import AliPayLogo from "../assets/AlipayLogo.svg";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="bg-black bg-opacity-40">
      <div className="flex justify-center sm:justify-start gap-5 sm:gap-10 p-5 sm:p-20 sm:px-40 text-white">
        <div className="text-[14px] flex flex-col gap-1 sm:gap-2">
          <h1 className="text-[18px] sm:text-[20px] font-semibold">Application</h1>
          <ul className="hover:underline cursor-pointer" onClick={() => navigate('/apply')}>New Application</ul>
          <ul className="hover:underline cursor-pointer">Ongoing Application</ul>
        </div>
        <div className="text-[14px] flex flex-col gap-1 sm:gap-2">
          <h1 className="text-[18px] sm:text-[20px] font-semibold">About E-Visa</h1>
          <ul className="hover:underline cursor-pointer">FAQ</ul>
          <ul className="hover:underline cursor-pointer">Comments</ul>
        </div>
        <div className="text-[14px] flex flex-col gap-1 sm:gap-2">
          <h1 className="text-[18px] sm:text-[20px] font-semibold">Contact Us</h1>
          <ul className="hover:underline cursor-pointer">+91 987654321</ul>
          <ul className="hover:underline cursor-pointer">abc@gmail.com</ul>
        </div>
      </div>

      <div className="flex justify-center sm:justify-start flex-wrap items-center p-5 sm:p-20 sm:px-40 gap-5">
        <img src={visaLogo} className="w-20 h-8"></img>
        <img src={MasterCardLogo} className="w-20 "></img>
        <img src={UnionPayLogo} className="w-20 h-8"></img>
        <img src={AliPayLogo} className="w-20 h-8"></img>
      </div>
    </div>
  );
}
