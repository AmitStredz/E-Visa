import React from "react";
import visaLogo from "./assets/visaLogo.png";
import JCBLogo from "./assets/JCBLogo.png";
import UnionPayLogo from "./assets/UnionPayLogo.png";
import MasterCardLogo from "./assets/masterCard.png";
import AliPayLogo from "./assets/AlipayLogo.svg";

export default function Footer() {
  return (
    <div className="bg-black ">
      <div className="flex justify-start gap-10 p-20 px-40 text-white">
        <div className="text-[14px] flex flex-col gap-2">
          <h1 className="text-[20px] font-semibold">Application</h1>
          <ul>New Application</ul>
          <ul>Ongoing Application</ul>
        </div>
        <div className="text-[14px] flex flex-col gap-2">
          <h1 className="text-[20px] font-semibold">About E-Visa</h1>
          <ul>FAQ</ul>
          <ul>Comments</ul>
        </div>
        <div className="text-[14px] flex flex-col gap-2">
          <h1 className="text-[20px] font-semibold">Contact Us</h1>
          <ul>+91 987654321</ul>
          <ul>abc@gmail.com</ul>
        </div>
      </div>

      <div className="flex p-20 px-40 gap-5 items-center">
        <img src={visaLogo} className="w-20 h-8"></img>
        <img src={MasterCardLogo} className="w-20 "></img>
        <img src={UnionPayLogo} className="w-20 h-8"></img>
        <img src={AliPayLogo} className="w-20 h-8"></img>
      </div>
    </div>
  );
}
