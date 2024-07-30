import React from "react";

const termsModal = ({ onClose }) => {
  return (
    <div
      className="flex justify-center items-center w-screen h-screen p-5 fixed top-10 sm:top-0 left-0 backdrop-blur-sm overflow-auto"
      data-aos="zoom-in"
    >
      <div className="max-w-3xl bg-slate-500 p-5">
        <div>
          <div className="flex">
            <i class="ri-information-line text-6xl"></i>
            <h1 className="text-[28px]">
              Türkiye Entry Commitment and Information Form
            </h1>
          </div>
          <div className="flex flex-col gap-3">
            <li>
              Visa provides the right to stay in Türkiye limited only to the
              duration of the visa.
            </li>
            <li>Visa does not provide absolute right to enter Türkiye.</li>
            <li>
              Those who do not have a passport or passport substitute document
              with a validity of at least 60 days from the end of the visa
              validity period will not be allowed to enter Türkiye.
            </li>
            <li>
              The duration of stay in Türkiye provided by visa cannot exceed
              ninety days in every one hundred and eighty days.
            </li>
            <li>
              If there is a suspicion that foreigners arriving at the border
              gates are among those who shall be refused to enter Türkiye, a
              comprehensive control process is carried out by the law
              enforcement unit responsible for entry procedures.
            </li>
            <li>
              A person who comes to the border gates in order to enter the
              country or to transit through the country, but who is not allowed
              to enter the country or transit through the country because he/she
              does not meet the requirements sought in the legislation, is
              considered within the scope of the inadmissible passenger.
            </li>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <i
            class="ri-close-line cursor-pointer text-3xl font-bold"
            onClick={onClose}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default termsModal;
<div>
  <i class="ri-information-line"></i>
  <h1>Türkiye Entry Commitment and Information Form</h1>
</div>;
