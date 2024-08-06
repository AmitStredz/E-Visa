import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ReCAPTCHA from "react-google-recaptcha";

import Header from "../homepage/pages/header";
import Footer from "../homepage/pages/footer";
import img1 from "./assets/applyBanner.jpg";

export default function Status() {
  const [capVal, setCapVal] = useState("");
  const [referenceNo, setReferenceNo] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const validateForm = () => {
      // const phoneRegex = /^[0-9]{10}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // const isNameValid = fullName.trim() !== "";

      setIsFormValid(emailRegex.test(email));
    };

    validateForm();
  }, [email]);

  const handleReferenceNumberChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setReferenceNo(value);
    }
  };
  const handlePassportNumberChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setPassportNumber(value);
    }
  };

  const handleNextClick = () =>{
    navigate('/status');
  }
  return (
    <div className="overflow-hidden text-black bg-slate-600 bg-opacity-20 relative">
      <Header></Header>

      <div
        className="w-screen h-40 sm:h-96 bg-bottom bg-cover"
        style={{ backgroundImage: `url(${img1})` }}
      ></div>

      <div className="w-full flex flex-col justify-center items-center h mb-10">
        <div className="w-full flex flex-col lg:w-4/5 justify-start sm:p-10 sm:gap-5">
          {/* <h1 className="text-[28px] font-semibold ">Application</h1> */}
          {/* <div className="flex items-center text-[14px] sm:text-[16px] gap-1">
            <p className="font-semibold">Country/Region</p>
          </div> */}

          <form
            // action="#"
            // method="POST"
            className="flex flex-col gap-2 p-3 sm:p-7 sm:px-10 sm:w-4/5 xl:w-3/5 text-[18px]  border-2 border-slate-400"
          >
            {/* <!-- Reference Nuumber --> */}
            <div class="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
              <label for="visa-type" class="block text-md ">
                Reference Number
              </label>
              <input
                value={referenceNo}
                onChange={handleReferenceNumberChange}
                className="outline-none p-1 px-2"
              ></input>
            </div>
            {/* <!-- Passport Number --> */}
            <div class="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
              <label for="country-region" class="block text-md ">
                Passport Number
              </label>
              <input
                value={passportNumber}
                onChange={handlePassportNumberChange}
                className="outline-none p-1 px-2"
              ></input>{" "}
            </div>
            {/* <!-- E-mail address --> */}
            <div class="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
              <label for="travel-document" className="block text-md ">
                E-mail address
              </label>
              <input
                val={email}
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none p-1 px-2"
              ></input>{" "}
            </div>
            {/* <!-- Security Verification --> */}
            <ReCAPTCHA
              sitekey="6LfBywMqAAAAANVw0lvasqSPQ3yEO2gn3sHSPxjU"
              onChange={(val) => setCapVal(val)}
            ></ReCAPTCHA>
            <div class="flex justify-center mt-5 w-full">
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
        </div>
        <div className="p-5 sm:p-10">
          <div
            className="xl:absolute mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-red-700 p-4 sm:w-[30rem] right-10 top-96"
            role="alert"
          >
            <p className="font-bold mb-5">Information Note:</p>
            <ul className="list-disc list-inside gap-5 flex flex-col">
              <ul>
                In some cases, e-mail messages might be categorized as “junk” or
                “spam” messages and sent to these folders automatically.
              </ul>
              <ul>
                If you did not receive the e-mail message that you have
                requested, please check your spam folder before sending a new
                request.
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
