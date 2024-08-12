import React from "react";
import visaLogo from "../assets/visaLogo.png";
import JCBLogo from "../assets/JCBLogo.png";
import UnionPayLogo from "../assets/UnionPayLogo.png";
import MasterCardLogo from "../assets/masterCard.png";
import AliPayLogo from "../assets/AlipayLogo.svg";
import ftLogo from "../assets/ft-logo.png";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row justify-between bg-black bg-opacity-60">
      <div>
        <div className="flex justify-center sm:justify-start gap-5 sm:gap-10 p-5 sm:p-10 md:px-40 text-white">
          <div className="text-[14px] flex flex-col gap-1 sm:gap-2">
            <h1 className="text-[18px] sm:text-[20px] font-semibold">
              Application
            </h1>
            <ul
              className="hover:underline cursor-pointer"
              onClick={() => navigate("/apply")}
            >
              New Application
            </ul>
            <ul
              className="hover:underline cursor-pointer"
              onClick={() => navigate("/status")}
            >
              Ongoing Application
            </ul>
          </div>
          <div className="text-[14px] flex flex-col gap-1 sm:gap-2">
            <h1 className="text-[18px] sm:text-[20px] font-semibold">
              About E-Visa
            </h1>
            <ul
              className="hover:underline cursor-pointer"
              onClick={() => navigate("/faq")}
            >
              FAQ
            </ul>
            {/* <ul className="hover:underline cursor-pointer">Comments</ul> */}
          </div>
          <div className="text-[14px] flex flex-col gap-1 sm:gap-2">
            <h1 className="text-[18px] sm:text-[20px] font-semibold">
              Contact Us
            </h1>
            <ul className="hover:underline cursor-pointer">+44 7445189960</ul>
            <a
              className="hover:underline cursor-pointer"
              href="mailto:info@turkey-visa-gov.org"
            >
              info@turkey-visa-gov.org
            </a>
          </div>
        </div>

        <div className="flex flex-col px-5 sm:px-10 lg:px-40 text-black">
          <div>
            <span
              className="hover:underline cursor-pointer"
              onClick={() => navigate("/terms")}
            >
              Terms and Conditions
            </span>
          </div>
          <div>
            <span
              className="hover:underline cursor-pointer"
              onClick={() => navigate("/privacy")}
            >
              Privacy Policy
            </span>
          </div>
        </div>

        <div className="flex justify-center sm:justify-start flex-wrap items-center p-5 sm:p-10 sm:px-40 gap-5">
          <img src={visaLogo} className="w-20 h-8"></img>
          <img src={MasterCardLogo} className="w-20 "></img>
          <img src={UnionPayLogo} className="w-20 h-8"></img>
          <img src={AliPayLogo} className="w-20 h-8"></img>
        </div>
      </div>

      <div className="flex justify-center items-center sm:w-1/3">
        <img src={ftLogo} className=" object-cover w- h-32"></img>
      </div>
    </div>
  );
}
