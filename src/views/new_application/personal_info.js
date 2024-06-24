import React, { useState } from "react";
import { useNavigate } from "react-router";

import Header from "../homepage/pages/header";
import Footer from "../homepage/pages/footer";
import img1 from "./assets/applyBanner.jpg";

import TermsModal from "./termsModal";

export default function Personal_info() {
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxClick = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setIsChecked(!isChecked);
  };

  return (
    <div className="overflow-hidden text-black bg-slate-600 bg-opacity-20 relative">
      <Header></Header>

      <div
        className="w-screen h-96 bg-bottom bg-cover"
        style={{ backgroundImage: `url(${img1})` }}
      ></div>

      <div className="w-full flex justify-center h mb-10">
        <div className="w-4/5 justify-start py-10 flex flex-col gap-5">
          <h1 className="text-[28px] font-semibold ">Application</h1>
          <div className="flex items-center gap-1">
            <p className="text-slate-500">Country/Region</p>
            <p>{"->"}</p>
            <p className="text-slate-500">ArrivalDate</p>
            <p>{"->"}</p>
            <p className="text-slate-500">Prerequisites</p>
            <p>{"->"}</p>
            <p className="font-semibold">Personal Information</p>
          </div>

          <form
            action="#"
            method="POST"
            className="w-[40rem] flex flex-col gap-5  p-5"
          >
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Given/First Name(s)
              </label>
              <input
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5 "
              >
                Surname(s)
              </label>
              <input
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>
            <div class="flex gap-2 items-center">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Date of Birth
              </label>
              <input
                required
                className="border-2 border-slate-400 h-8"
                type="date"
              ></input>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Place of Birth
              </label>
              <input
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Mother's Name
              </label>
              <input
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Father's Name
              </label>
              <input
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Passport Number
              </label>
              <input
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>
            <div class="flex gap-2 items-center  w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Passport Issue Date
              </label>
              <input
                required
                className="border-2 border-slate-400 h-8"
                type="date"
              ></input>
            </div>
            <div class="flex gap-2 items-center w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Passport Expiry Date
              </label>
              <input
                required
                className="border-2 border-slate-400 h-8"
                type="date"
              ></input>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Passport Expiry Date
              </label>
              <input
                required
                className="border-2 border-slate-400 h-8 w-3/5"
                type="date"
              ></input>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Type of Supporting Doc.
              </label>
              <select className="border-2 border-slate-400 h-8 w-3/5">
                <option>Visa</option>
                <option>Residence Permit</option>
              </select>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Supporting Doc. Form
              </label>
              <select className="border-2 border-slate-400 h-8 w-3/5 transition-all">
                <option>Ireland</option>
                <option>Schengen</option>
                <option>U.S.A</option>
                <option>United Kingdom</option>
              </select>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Supporting Doc. No
              </label>
              <input
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>
            <div class="flex gap-2 items-center w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Supp. Doc. Expiry Date
              </label>
              <input
                required
                className="border-2 border-slate-400 h-8"
                type="date"
              ></input>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                E-mail address
              </label>
              <input
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Phone Number
              </label>
              <input
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Address
              </label>
              <input
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onClick={handleCheckboxClick}
                ></input>{" "}
                I have read and accept the provisions of the Türkiye Entry
                Commitment and Information Form.
              </label>
            </div>

            <div class="flex justify-evenly mt-5">
              <button
                //   onClick={()=> navigate('/arrivaldate')}
                disabled={!isChecked}
                type="submit"
                name="save-continue"
                class={`w-5/12 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-blue-600   ${
                  isChecked ? "hover:bg-blue-700" : "bg-gray-500 bg-opacity-40"
                }`}
              >
                Add a new Person
              </button>
              <button
                  onClick={()=> navigate('/email')}
                disabled={!isChecked}
                type="submit"
                name="save-continue"
                class={`w-5/12 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-green-600   ${
                  isChecked ? "hover:bg-green-700" : "bg-gray-500 bg-opacity-40"
                }`}
              >
                Save and Continue
              </button>
            </div>
          </form>

          <div className="flex flex-col gap-5">
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
            className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-red-700 p-4 w-[30rem] absolute right-10 top-96"
            role="alert"
          >
            <p className="font-bold mb-5">Information Note:</p>
            <ul className="list-disc list-inside gap-5 flex flex-col">
              <ul>
                Please note that the information that you provide must match the
                information on your passport. Otherwise, your e-Visa will be
                invalid.
              </ul>
              <ul>
                Travel agencies can create group applications by clicking here
              </ul>
            </ul>
          </div>

          {showModal && <TermsModal onClose={() => handleModalClose(true)} />}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
