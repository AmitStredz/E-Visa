import React, { useState, useEffect } from "react";
import { Await, useNavigate } from "react-router";

import Header from "../homepage/pages/header";
import Footer from "../homepage/pages/footer";
import img1 from "./assets/applyBanner.webp";

export default function Prerequisites() {
  const [prerequisitesCheck, setPrerequisitesCheck] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [checkAll, setCheckAll] = useState(false);

  const [checks, setChecks] = useState({
    term1: false,
    term2: false,
    term3: false,
    term4: false,
    term5: false,
  });

  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setChecks((prevChecks) => ({
      ...prevChecks,
      [name]: checked,
    }));
  };

  let allChecked = Object.values(checks).every(Boolean);

  useEffect(() => {
    setPrerequisitesCheck(allChecked);
    if (allChecked) setCheckAll(true);
  }, [allChecked]);

  const handleNextClick = async () => {
    if (isLoading) return; //prevents from multiple clicks
    setIsLoading(true);

    if (allChecked) {
      localStorage.setItem("prerequisites_check", true);
      navigate("/personalinfo");
    } else {
      setIsLoading(false);
    }
  };

  const handleCheckAll = () => {
    const newCheckAll = !checkAll;
    setCheckAll(newCheckAll);

    const updatedChecks = Object.keys(checks).reduce((acc, key) => {
      acc[key] = newCheckAll;
      return acc;
    }, {});

    setChecks(updatedChecks);
  };

  return (
    <div className="overflow-hidden text-black relative">
      <Header></Header>

      <div
        className="w-screen h-40 sm:h-96 bg-bottom bg-cover"
        style={{ backgroundImage: `url(${img1})` }}
      ></div>

      <div className="w-full flex flex-col items-center justify-center h mb-10">
        <div className="w-full lg:w-4/5 justify-start p-5 sm:p-10  flex flex-col gap-5">
          <h1 className="text-[28px] font-semibold ">Application</h1>
          <div className="flex flex-wrap text-[14px] sm:text-[16px] items-center gap-1">
            <p className="text-slate-500">Country/Region</p>
            <p>{"->"}</p>
            <p className="text-slate-500">ArrivalDate</p>
            <p>{"->"}</p>
            <p className="font-semibold">Prerequisites</p>
          </div>
          <div className="flex flex-col gap-2 border-lg p-2 lg:w-[50rem] bg-slate-900 bg-opacity-10 border-2 border-slate-900 border-opacity-20">
            <p>
              You must meet all the requirements listed below in order to obtain
              an e-Visa. Please confirm that you meet these criteria by clicking
              the boxes next to them. If you do not meet any of these
              requirements and you proceed with your application, your e-Visa
              will be invalid.
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:w-[50rem]">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="term1"
                checked={checks.term1}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              My passport covers the period that I will be staying in Türkiye.
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                name="term2"
                checked={checks.term2}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              I can prove that I hold a return ticket, hotel reservation and at
              least 50 $ per each day of my stay.
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                name="term3"
                checked={checks.term3}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              I am travelling for the purposes of tourism or business.
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                name="term4"
                checked={checks.term4}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              I have a valid Supporting Document (Valid visa OR valid residence
              permit from one of the Schengen Countries, USA, UK or Ireland).
              E-visas are not accepted as supporting documents.
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="term5"
                checked={checks.term5}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              I confirm that I meet each and every one of the conditions listed
              above.
            </label>
          </div>
          <label className="flex items-center font-semibold">
            <input
              type="checkbox"
              name="chechAll"
              checked={checkAll && allChecked}
              onChange={handleCheckAll}
              className="text-2xl mr-2"
              size={1}
            ></input>
            Check All
          </label>

          <div className="flex justify-center lg:w-[50rem]">
            <button
              disabled={!allChecked || !checkAll}
              className={`w-48 py-4 px-8 border border-transparent rounded-md shadow-sm text-sm font-medium  ${
                !allChecked || !checkAll
                  ? "bg-blue-300 "
                  : "text-white bg-blue-600 hover:bg-blue-700"
              }`}
              onClick={handleNextClick}
            >
              {isLoading ? "Loading..." : "Save and Continue"}
            </button>
          </div>
        </div>
        <div className="flex justify-start p-5">
          <div
            className="lg:absolute mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-red-700 p-4 sm:w-[30rem]  right-10 top-96"
            role="alert"
          >
            <p className="font-bold mb-5">Information Note:</p>
            <ul className="list-disc list-inside gap-5 flex flex-col">
              <ul>
                Please select your country/region of travel document. People
                with dual nationality should choose the nationality according to
                the passport to be used for the travel.
              </ul>
              <ul>
                If the country of travel document registered on the e-visa is
                different than the passport carried; the e-Visa will be invalid.
              </ul>
              <ul>
                By travel document, we mean passports and ID cards (for the
                citizens of specific countries). Other travel documents are not
                acceptable for an e-Visa application.
              </ul>
            </ul>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
