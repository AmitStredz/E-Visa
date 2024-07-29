import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import Header from "../homepage/pages/header";
import Footer from "../homepage/pages/footer";
import img1 from "./assets/applyBanner.jpg";
import { ThreeDots } from "react-loader-spinner";

export default function DataControl() {
  let { userId } = useParams();

  const navigate = useNavigate();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  console.log("userId", userId);

  useEffect(() => {
    const stored_userId = localStorage.getItem("user_id");
    if (stored_userId) {
      console.log("Stored UserId: ", stored_userId);
    }
    if (userId) {
      if (userId == stored_userId) {
        console.log("UserId confirmed...");
        setIsConfirmed(true);
        setIsLoading(false);
        setTimeout(() => {
          navigate("/payment");
        }, "2000");
      } else {
        console.log("UserId not confirmed...");
        setIsConfirmed(false);
        setIsLoading(false);
      }
    }
  }, []);

  return (
    <div className="overflow-hidden text-black bg-slate-600 bg-opacity-20 relative">
      <div className="min-h-screen">
        <Header />

        <div
          className="w-screen h-96 bg-bottom bg-cover"
          style={{ backgroundImage: `url(${img1})` }}
        ></div>

        <div className="w-full flex justify-center h mb-10">
          <div className="flex flex-col w-4/5 justify-start py-10  gap-5">
            <div className="flex items-center gap-1">
              <p className="text-slate-500">Country/Region</p>
              <p>{"->"}</p>
              <p className="text-slate-500">ArrivalDate</p>
              <p>{"->"}</p>
              <p className="text-slate-500">Prerequisites</p>
              <p>{"->"}</p>
              <p className="text-slate-500">Personal Information</p>
              <p>{"->"}</p>
              <p className="text-slate-500">Email Verification</p>
              <p>{"->"}</p>
              <p className="font-semibold">Data Control</p>
            </div>
            <h1 className="text-[28px] font-semibold ">
              {(isLoading || isConfirmed) && (
                <ThreeDots
                  visible={true}
                  height="80"
                  width="80"
                  color="#4fa94d"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              )}
              {isLoading
                ? "Verifying your data. Please wait..."
                : `${
                    isConfirmed
                      ? "Your data has been verified. Redirecting..."
                      : "Your data is not verified. Please try again later."
                  }`}
            </h1>
            {/* <span>wewe</span> */}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
