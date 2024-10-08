import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useNavigate } from "react-router";
import { Cookies } from "react-cookie";

import ReCAPTCHA from "react-google-recaptcha";

import Header from "../homepage/pages/header";
import Footer from "../homepage/pages/footer";
import img1 from "./assets/applyBanner.webp";
import captchaImg from "./assets/captchaImg.png";
import axios from "axios";

export default function Apply() {
  const [visaType, setVisaType] = useState("");
  const [countryRegion, setCountryRegion] = useState("");
  const [travelDoc, setTravelDoc] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [capVal, setCapVal] = useState("");
  const navigate = useNavigate();

  function CountrySelector() {
    const [value, setValue] = useState("");
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = (value) => {
      setValue(value);
      setCountryRegion(value.label);
      // console.log("Value: ", value.label);
    };

    return (
      <Select
        options={options}
        value={value}
        onChange={changeHandler}
        required
      />
    );
  }

  const handleNextClick = () => {
    if (isLoading) return; // Prevent multiple clicks
    setIsLoading(true);

    if (!visaType || !countryRegion || !travelDoc) {
      alert("Please fill in all the required fields.");
      setIsLoading(false);
      return;
    }

    localStorage.setItem("visa_type", visaType);
    localStorage.setItem("country_region", countryRegion);
    localStorage.setItem("travel_document", travelDoc);

    navigate("/arrivalDate");
  };

  return (
    <div className="overflow-hidden text-black relative z-[]">
      <Header></Header>

      <div
        className=" w-screen h-40 sm:h-96 bg-bottom bg-cover -z-10"
        style={{ backgroundImage: `url(${img1})` }}
      ></div>

      <div className="w-full flex justify-center h sm:mb-10">
        <div className="w-11/12 sm:w-4/5 justify-start py-10 flex flex-col gap-5">
          <h1 className="text-[28px] font-semibold ">Application</h1>
          <div className="flex items-center text-[14px] sm:text-[16px] gap-1">
            <p className="font-semibold">Country/Region</p>
          </div>

          <form
            action="#"
            method="POST"
            className="sm:w-3/4 md:w-3/5 xl:w-2/5 gap-3"
          >
            {/* <!-- Visa Type --> */}
            <div class="mb-4">
              <label for="visa-type" class="block text-md ">
                Visa Type
              </label>
              <select
                value={visaType}
                required
                onChange={(e) => setVisaType(e.target.value)}
                id="visa-type"
                name="visa-type"
                class="mt-1 block w-full py-2 p-3 border border-gray-300 bg-white max-sm:text-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer"
              >
                <option value="" disabled selected>
                  Select a Visa type
                </option>
                <option value="Electronic Visa">Electronic Visa</option>
                <option value="Airport Transit Visa">
                  Airport Transit Visa
                </option>
              </select>
            </div>
            {/* <!-- Country/Region --> */}
            <div class="mb-4">
              <label for="country-region" class="block text-md ">
                Country/Region
              </label>
              <div className="max-sm:text-black">{CountrySelector()}</div>
            </div>
            {/* <!-- Travel Document --> */}
            <div className="mb-4">
              <label for="travel-document" className="block text-md ">
                Travel Document
              </label>
              <select
                value={travelDoc}
                onChange={(e) => setTravelDoc(e.target.value)}
                required
                id="travel-document"
                name="travel-document"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white max-sm:text-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer"
              >
                <option value="" disabled selected>
                  Select a Travel Document type
                </option>
                <option value="Ordinary Passport">Ordinary Passport</option>
                <option value="Identity Card">Identity Card</option>
                <option value="Diplomatic Passport">Diplomatic Passport</option>
                <option value="Service Passport">Service Passport</option>
                <option value="Special Passport">Special Passport</option>
                <option value="Alien's Passport">Alien's Passport</option>
                <option value="Travel Document">Travel Document</option>
                <option value="Nansen Passport">Nansen Passport</option>
                <option value="Others">Others</option>
              </select>
            </div>
            {/* <!-- Security Verification --> */}
            <ReCAPTCHA
              sitekey="6Lf9ZCUqAAAAAL6NFlfK9n8b_UP4H6gwg1sZttxu"
              onChange={(val) => setCapVal(val)}
            ></ReCAPTCHA>
            
            {/* <!-- Submit Buttons --> */}
            <div class="flex flex-col sm:flex-row justify-between gap-3 mt-5">
              <button
                type="submit"
                disabled={!capVal}
                name="ongoing-application"
                className={`sm:w-5/12 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium  ${
                  capVal
                    ? "text-white bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-300"
                }`}
              >
                I have an ongoing application
              </button>
              <button
                onClick={handleNextClick}
                type="submit"
                disabled={!capVal}
                name="save-continue"
                className={`sm:w-5/12 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium  ${
                  capVal
                    ? "text-white bg-green-600 hover:bg-green-700"
                    : "bg-green-300"
                }`}
              >
                {isLoading ? "Loading..." : "Save and Continue"}
              </button>
            </div>
          </form>

          <div className="flex flex-col gap-5 ">
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
          </div>

          <div
            className="xl:absolute right-10 top-[52rem] mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
            // role="alert"
          >
            <p className="font-bold">Important Notes:</p>
            <ul className="list-disc list-inside">
              <li>
                Ensure that your passport is valid for at least 6 months from
                the date of entry into Turkey.
              </li>
              <li>
                All information provided must be accurate and match your travel
                documents.
              </li>
              <li>
                Incomplete or incorrect applications may result in delays or
                rejection.
              </li>
              <li>
                Keep a copy of your e-visa with you during your travel to
                Turkey.
              </li>
              <li>
                For any issues or questions, please contact our support team
                before submitting your application.
              </li>
            </ul>
          </div>

          <div
            className="xl:absolute mt-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 sm:w-[30rem]  right-10 top-96"
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
