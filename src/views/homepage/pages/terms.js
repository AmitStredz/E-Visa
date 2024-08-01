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
        <div className="w-full flex flex-col justify-start p-10 px-40  sm:gap-14 text-black" data-aos="fade-up">
          <div className="flex items-center justify-between w-full">
            <div className="h-[2px] bg-slate-400 w-full"></div>
            <span className="border border-slate-500 p-2 w-full text-center">
              SERVICE AGREEMENT
            </span>
            <div className="h-[2px] bg-slate-400 w-full"></div>
          </div>
{/* 
          <div className="flex items-center gap-3 justify-between w-full">
            <div className="h-[2px] bg-slate-400 w-full"></div>
            <span className="w-full text-center">PARTIES TO THE AGREEMENT</span>
            <div className="h-[2px] bg-slate-400 w-full"></div>
          </div> */}

          <div className="flex flex-col gap-2">
            <span className="font-semibold">Application Center</span>
            <p>
              This refers to, the organization named Mark Turizm İnşaat Gıda
              Danışmanlık ve Organizasyon Ticaret Limited Şirketi, which is
              based on Turkey and operates the turkeyvisa.com.tr website and
              processes the visa applications made through this website.
            </p>
            <p>Company’s Tax Office: Kozyatağı</p>
            <p>Company’s Tax Number: 6120720506</p>
            <p>
              Company’s Address: Küçükbakkalköy Mh. Dudullu Cd. No: 23-25
              Brandium Residence R4 Blok D: 16 P.K: 34750 / Ataşehir / İSTANBUL
            </p>
          </div>
          <div className="w-full h-[1px] bg-slate-500"></div>

          <div className="flex flex-col gap-2">
            <span className="font-semibold">Applicant:</span>
            <p>
              This refers to, the person who has applied for a visa on behalf of
              himself or someone else on the turkeyvisa.com.tr website.
            </p>
          </div>

          <div className="flex items-center gap-3 justify-between w-full">
            <div className="h-[2px] bg-slate-400 w-full"></div>
            <span className="w-full text-center">DEFINITIONS</span>
            <div className="h-[2px] bg-slate-400 w-full"></div>
          </div>

          <div className="flex flex-col gap-5">
            <span className="font-semibold">Visa Application </span>
            <p>
              According to the visa policy imposed by the Republic of Turkey;
              refers to the act of applying for a Turkey visa by the citizens of
              the countries subject to the visa.
            </p>
            <div className="h-[1px] bg-slate-400 "></div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold">Type of Visa Application</span>
              <p>There are three types including:</p>
              <ul>
                <li>30 Days – Single Entry</li>
                <li>30 Days – Multiple Entry</li>
                <li>90 Days – Multiple Entry</li>
              </ul>
            </div>
            <p>
              The type of visa to be issued is determined according to the
              country to which applicant’s passport belongs and the type of this
              passport which are selected by the applicant during filling the
              visa application form. Type of visa to be issued cannot be
              selected by the applicant.
            </p>

            <div className="h-[1px] bg-slate-400 "></div>

            <div className="flex flex-col gap-3">
              <span className="font-semibold">Single Entry:</span>
              <p>
                The applicant can enter to Turkey only one time, between the
                start and end dates which are specified in the approved visa.
              </p>
            </div>

            <div className="h-[1px] bg-slate-400 "></div>

            <div className="flex flex-col gap-3">
              <span className="font-semibold">Multiple Entry:</span>
              <p>
                The applicant can enter to Turkey several times, between the
                start and end dates which are specified in the approved visa.
              </p>
            </div>

            <div className="h-[1px] bg-slate-400 "></div>

            <div className="flex flex-col gap-3">
              <span className="font-semibold">Visa Validity Period:</span>
              <p>
                The “Arrival Date in Turkey” specified by the applicant during
                filling the visa application form is the date on which the visa
                period starts. From this specified date (including this date) it
                is required by the applicant entry to Turkey within a maximum of
                180 days. Otherwise; the applicant’s visa will no longer be
                valid. The start and end date of the validity period of the visa
                is specified in the e-visa.
              </p>
            </div>

            <div className="h-[1px] bg-slate-400 "></div>

            <div className="flex flex-col gap-3">
              <span className="font-semibold">Duration of Stay:</span>
              <p>
                The maximum right of stay of the applicant in Turkey is
                calculating according to the duration of stay of the approved
                visa. This period calculated as below:
              </p>
             <div>

                <li>29 days for 30-day visas</li>
                <li>89 days for 90-day visas</li>
             </div>
             
                <p>
                  Regardless of the length of the stay, the visa will expire on
                  the expiration date specified in the electronic visa. The visa
                  holder must leave Turkey before the visa expires.
                </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
