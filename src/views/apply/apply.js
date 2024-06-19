import React from "react";
import Header from "../homepage/pages/header";
import Footer from "../homepage/pages/footer";
import img1 from "./assets/visa.jpeg";

export default function apply() {
  return (
    <div className="overflow-hidden ">
      <Header></Header>
      <div className="w-full flex justify-center h-[80vh]">
        <div className="w-4/5 justify-start py-10 flex flex-col gap-5">
          <h1 className="text-[28px] font-semibold text-white">Application</h1>

          <form action="#" method="POST" className="w-2/5 gap-3">
                {/* <!-- Visa Type --> */}
                <div class="mb-4">
                    <label for="visa-type" class="block text-md text-white">Visa Type</label>
                    <select id="visa-type" name="visa-type" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer">
                        <option value="electronic-visa">Electronic Visa</option>
                        <option value="airport-transit-visa">Airport Transit Visa</option>
                    </select>
                </div>
                {/* <!-- Country/Region --> */}
                <div class="mb-4">
                    <label for="country-region" class="block text-md text-white">Country/Region</label>
                    <input type="text" id="country-region" name="country-region" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
                </div>
                {/* <!-- Travel Document --> */}
                <div class="mb-4">
                    <label for="travel-document" class="block text-md text-white">Travel Document</label>
                    <select id="travel-document" name="travel-document" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer">
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
                    <label for="captcha" class="block text-md text-white">Security Verification</label>
                    <input type="text" id="captcha" name="captcha" placeholder="Enter the captcha code" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer" required />
                </div>
                {/* <!-- Submit Buttons --> */}
                <div class="flex justify-between">
                    <button type="submit" name="ongoing-application" class="w-5/12 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">I have an ongoing application</button>
                    <button type="submit" name="save-continue" class="w-5/12 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Save and Continue</button>
                </div>
            </form>
        </div>
      </div>
      <Footer></Footer>

      <div>
        <img
          src={img1}
          className="w-screen h-screen object-bottom absolute top-0 left-0 -z-10"
        ></img>
      </div>
    </div>
  );
}
