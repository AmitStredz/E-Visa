import React from "react";
import Header from "../homepage/pages/header";
import Footer from "../homepage/pages/footer";
import img1 from "./assets/applyBanner.jpg";
import captchaImg from "./assets/captchaImg.png";

export default function apply() {
  return (
    <div className="overflow-hidden text-black relative">
      <Header></Header>

      <div
        className="w-screen h-96 bg-bottom bg-cover"
        style={{ backgroundImage: `url(${img1})` }}
      ></div>

      <div className="w-full flex justify-center h mb-10">
        <div className="w-4/5 justify-start py-10 flex flex-col gap-5">
          <h1 className="text-[28px] font-semibold ">Application</h1>

          <form action="#" method="POST" className="w-2/5 gap-3">
            {/* <!-- Visa Type --> */}
            <div class="mb-4">
              <label for="visa-type" class="block text-md ">
                Visa Type
              </label>
              <select
                id="visa-type"
                name="visa-type"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer"
              >
                <option value="electronic-visa">Electronic Visa</option>
                <option value="airport-transit-visa">
                  Airport Transit Visa
                </option>
              </select>
            </div>
            {/* <!-- Country/Region --> */}
            <div class="mb-4">
              <label for="country-region" class="block text-md ">
                Country/Region
              </label>
              <input
                type="text"
                id="country-region"
                name="country-region"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            {/* <!-- Travel Document --> */}
            <div class="mb-4">
              <label for="travel-document" class="block text-md ">
                Travel Document
              </label>
              <select
                id="travel-document"
                name="travel-document"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer"
              >
                <option value="ordinary-passport">Ordinary Passport</option>
                <option value="identity-card">Identity Card</option>
                <option value="diplomatic-passport">Diplomatic Passport</option>
                <option value="diplomatic-passport">Service Passport</option>
                <option value="diplomatic-passport">Special Passport</option>
                <option value="diplomatic-passport">Alien's Passport</option>
                <option value="diplomatic-passport">Travel Document</option>
                <option value="diplomatic-passport">Nansen Passport</option>
                <option value="diplomatic-passport">Others</option>
              </select>
            </div>
            {/* <!-- Security Verification --> */}
            <div class="mb-4">
              <label for="captcha" class="block text-md ">
                Security Verification
              </label>
              <input
                type="text"
                id="captcha"
                name="captcha"
                placeholder="Enter the captcha code"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <img src={captchaImg}></img>
            {/* <!-- Submit Buttons --> */}
            <div class="flex justify-between mt-5">
              <button
                type="submit"
                name="ongoing-application"
                class="w-5/12 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                I have an ongoing application
              </button>
              <button
                type="submit"
                name="save-continue"
                class="w-5/12 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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
            className="absolute right-10 top-[54rem] mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
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
            className="mt-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 w-[30rem] absolute right-10 top-96"
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
