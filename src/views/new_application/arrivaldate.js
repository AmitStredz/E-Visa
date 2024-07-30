import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import Header from "../homepage/pages/header";
import Footer from "../homepage/pages/footer";
import img1 from "./assets/applyBanner.jpg";
import calendar from "./assets/calendarImg.jpg";
import axios from "axios";
import { Cookies } from "react-cookie";

export default function Arrivaldate() {
  const [isLoading, setIsLoading] = useState(false);

  const [arrivalDate, setArrivalDate] = useState(""); //date which user selects/arrives
  const [futureDate, setFutureDate] = useState(""); //date after 180 days
  const [formattedToday, setFormattedToday] = useState(""); //formatted date for sending to API to show in input field.

  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setFormattedToday(formattedDate);
    setArrivalDate(today.toDateString());

    const future = new Date(today);
    future.setDate(future.getDate() + 180);
    setFutureDate(future.toDateString());
  }, []);

  const handleDateChange = (event) => {
    const inputDate = new Date(event.target.value);
    setArrivalDate(inputDate.toDateString());
    setFormattedToday(inputDate.toISOString().split("T")[0]);

    const future = new Date(inputDate);
    future.setDate(future.getDate() + 180);
    setFutureDate(future.toDateString());
  };

  const handleNextClick = async () => {
    if (isLoading) return; // Prevent multiple clicks
    setIsLoading(true);

    localStorage.setItem("arrival_date", formattedToday);

    navigate("/prerequisites");
  };

  return (
    <div className="overflow-hidden text-black relative">
      <Header></Header>

      <div
        className="w-screen h-40 sm:h-96 bg-bottom bg-cover -z-10"
        style={{ backgroundImage: `url(${img1})` }}
      ></div>

      <div className="w-full flex justify-center h sm:mb-10 p-5">
        <div className="w-full lg:w-4/5 justify-start py-10 flex flex-col gap-5">
          <h1 className="text-[28px] font-semibold ">Application</h1>
          <div className="flex items-center text-[14px] sm:text-[16px] gap-1">
            <p className="text-slate-500">Country/Region</p>
            <p>{"->"}</p>
            <p className="font-semibold">ArrivalDate</p>
          </div>
          {/* date input here */}
          <div className="flex flex-col gap-5 md:w-[50rem]">
            <label className="font-semibold">
              Select your Arrival date in Turkey:
              <input
                type="date"
                className="ml-2 border border-gray-300 rounded max-sm:text-black"
                value={formattedToday}
                onChange={handleDateChange}
              />
            </label>

            <div className="flex gap-2 border-lg p-2 bg-slate-900 bg-opacity-20 border-2 border-slate-400">
              <i class="ri-information-line"></i>
              <p>
                Your e- visa is valid from{" "}
                <span className="underline">{arrivalDate}</span> to{" "}
                <span className="underline">{futureDate}</span> for a total
                period of 180 days. Your stay cannot exceed 30 days.
              </p>
            </div>

            <div className="flex gap-2 items-center justify-evenly">
              <div className="relative">
                <img src={calendar} className="w-24"></img>
                <p className="absolute top-8 sm:top-10 left-3 sm:left-5 w-14 sm:w-16 text-[14px] max-sm:text-black font-semibold">
                  {arrivalDate}
                </p>
              </div>
              <div className="w-5 sm:w-32 bg-slate-600 h-[2px] "></div>
              <div>
                <p className="font-semibold text-xl sm:text-3xl text-center">180 Days</p>
              </div>
              <div className="w-5 sm:w-32 bg-slate-600 h-[2px] "></div>

              <div className="relative">
                <img src={calendar} className="w-24"></img>
                <p className="absolute top-8 sm:top-10 left-3 sm:left-5 w-14 sm:w-16 text-[14px] max-sm:text-black font-semibold">
                  {futureDate}
                </p>
              </div>
            </div>

            <div className="flex flex-col p-3 gap-5 bg-slate-900 bg-opacity-20 border-2 border-slate-400">
              <div className="upper flex flex-col sm:flex-row items-center justify-evenly">
                <p>
                  Number of Entries:
                  <span className="font-semibold">Single Entry</span>
                </p>
                <p>
                  Visa Fee: <span className="font-semibold">43 USD</span>
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <img src="/assets/visaLogo.png" className="w-20"></img>
                <img src="/assets/JCBLogo.png" className="w-20 h-8 "></img>
                <img src="/assets/UnionPayLogo.png" className="w-20 h-8"></img>
                <img
                  src="/assets/masterCardLogo.png"
                  className="w-20 h-8"
                ></img>
                <img src="/assets/AlipayLogo.svg" className="w-20"></img>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleNextClick}
                type="submit"
                name="save-continue"
                class="w-48 py-4 text-white border border-transparent rounded-md shadow-sm text-sm font-medium bg-green-600 hover:bg-green-700"
              >
                {isLoading ? "Loading..." : "Save and Continue"}
              </button>
            </div>
          </div>

          {/* {selectedDate && (
            <div>
              <p>Selected Date: {selectedDate}</p>
              <p>Date 180 days later: {futureDate}</p>
            </div>
          )} */}

          {/* <div className="flex flex-col gap-5">
            <p>
              <span className="font-semibold">Important Note: </span>Fields with
              (*) must have correct details. Leaving it blank will halt the
              submission of the application. Inaccurate, mismatched, and
              incomplete information may cause delay or cancellation of visa.
              Enter the correct captcha code for security purposes.
            </p>
            <p>
              To ensure accuracy, take time to review all the details in the
              form before clicking Register. The application fee may vary on the
              type of visa, nationality, and processing time chosen. The
              applicant will receive a notification once the form gets submitted
              successfully.
            </p>
            <p>
              <span className="font-semibold">Disclaimer: </span>Turkish visa
              issued by this commercial website is applied direclty at the
              Governmet of Turkey Tmmigration office. Government of Turkey has
              not appointed directly, indirectly or exclusively. We are not
              affiliated with the Government of Turkey.
            </p>
          </div> */}

          <div
            className="xl:absolute mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-red-700 p-4 sm:w-[30rem]  right-10 top-96"
            role="alert"
          >
            <p className="font-bold mb-5">Information Note:</p>
            <ul className="list-disc list-inside gap-5 flex flex-col">
              <ul>
                Please, type the date you plan to enter Türkiye to the related
                field.
              </ul>
              <ul>
                The validity period of your e-Visa will begin as of the date you
                enter Türkiye.
              </ul>
              <ul>
                Please note that the validity period is different than the
                period of stay. The period of stay cannot exceed the duration
                stated on the left-hand side. If you wish to stay longer, you
                must apply to your local Police Station for a residency permit.
              </ul>
              <ul>
                If you exceed the duration stated on the left-hand side on a
                single entry without having a residency permit, you may be
                required to pay fines, deported, or banned from future travel to
                Türkiye for a period of time.
              </ul>
              <ul>
                The e-Visa system does not inform you the number of days you
                stay in Türkiye. It is your responsibility to make sure that you
                do not overstay your visa.
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
