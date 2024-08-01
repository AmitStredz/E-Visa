import React, { useState } from "react";
import { useNavigate } from "react-router";

import Header from "./header";
import Footer from "./footer";
import img1 from "../assets/applyBanner.jpg";

export default function Terms() {
  return (
    <div className="overflow-hidden text-black bg-slate-600 bg-opacity-20 relative">
      <Header></Header>

      <div
        className="w-screen h-40 sm:h-96 bg-bottom bg-cover"
        style={{ backgroundImage: `url(${img1})` }}
        data-aos="fade-in"
      ></div>

      <div className="w-full flex flex-col justify-center items-center h mb-10">
        <div
          className="w-full flex flex-col justify-start p-10 px-40  sm:gap-7 text-black"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-between w-full">
            <div className="h-[2px] bg-slate-400 w-full"></div>
            <span className="border border-slate-500 p-2 w-full text-center">
              TERMS & CONDITIONS
            </span>
            <div className="h-[2px] bg-slate-400 w-full"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-[18px] font-semibold">e-Visa</span>
            <span className="text-[14px]">Turkey Visa</span>
            <span className="text-[14px]">Online Application System</span>
          </div>

          {/* <div className="flex items-center gap-3 justify-between w-full">
            <div className="h-[2px] bg-slate-400 w-full"></div>
            <span className="w-full text-center">PARTIES TO THE AGREEMENT</span>
            <div className="h-[2px] bg-slate-400 w-full"></div>
          </div> */}

          <div className="flex flex-col gap-2">
            <span className="font-semibold">Application Center</span>
            <p>
              This refers to the organization e-Visa Turkey Visa Online
              Application System, which operates the website turkey-visa-gov.com
              and processes visa applications submitted through this platform.
            </p>
          </div>
          <div className="w-full h-[1px] bg-slate-500"></div>

          <div className="flex flex-col gap-2">
            <span className="font-semibold">Applicant:</span>
            <p>
              This refers to the individual applying for a visa, either on their
              own behalf or on behalf of another person, via the
              turkey-visa-gov.com website.
            </p>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="h-[2px] bg-slate-400 w-full"></div>
            <span className="w-full text-center">DEFINITIONS</span>
            <div className="h-[2px] bg-slate-400 w-full"></div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-semibold">Visa Application </span>
            <p>
              In accordance with the visa policies of the Republic of Turkey,
              this term refers to the process by which citizens of countries
              subject to visa requirements apply for a Turkey visa.
            </p>
            <div className="h-[1px] bg-slate-400 "></div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold">Type of Visa Application</span>
              <p>There are three types of visa applications available:</p>
              <ul>
                <li>30 Days – Single Entry</li>
                <li>30 Days – Multiple Entry</li>
                <li>90 Days – Multiple Entry</li>
              </ul>
            </div>
            <p>
              The type of visa issued is determined based on the applicant’s
              passport country and type, as selected by the applicant when
              completing the visa application form. The applicant cannot choose
              the visa type issued.
            </p>

            <div className="h-[1px] bg-slate-400 "></div>

            <div className="flex flex-col gap-3">
              <span className="font-semibold">Single Entry:</span>
              <p>
                This visa allows the applicant to enter Turkey only once,
                between the start and end dates specified in the approved visa.
              </p>
            </div>

            <div className="h-[1px] bg-slate-400 "></div>

            <div className="flex flex-col gap-3">
              <span className="font-semibold">Multiple Entry:</span>
              <p>
                This visa allows the applicant to enter Turkey multiple times,
                within the start and end dates specified in the approved visa
              </p>
            </div>

            <div className="h-[1px] bg-slate-400 "></div>

            <div className="flex flex-col gap-3">
              <span className="font-semibold">Visa Validity Period:</span>
              <p>
                The visa validity period begins on the "Arrival Date in Turkey,"
                as specified by the applicant when completing the visa
                application form. The applicant must enter Turkey within a
                maximum of 180 days from this specified date (including the date
                itself). If entry does not occur within this period, the visa
                will no longer be valid. The start and end dates of the visa
                validity period are specified in the e-visa.
              </p>
            </div>

            <div className="h-[1px] bg-slate-400 "></div>

            <div className="flex flex-col gap-3">
              <span className="font-semibold">Duration of Stay:</span>
              <p>
                The maximum duration of stay in Turkey is determined by the
                duration of the approved visa, calculated as follows:
              </p>
              <div>
                <li>29 days for 30-day visas</li>
                <li>89 days for 90-day visas</li>
              </div>

              <p>
                Regardless of the length of the stay, the visa will expire on
                the expiration date specified in the e-visa. The visa holder
                must leave Turkey before the visa expires.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
