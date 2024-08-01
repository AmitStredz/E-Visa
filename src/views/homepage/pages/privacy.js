import React, { useState } from "react";

import Header from "./header";
import Footer from "./footer";
import img1 from "../assets/applyBanner.jpg";

export default function Privacy() {
  return (
    <div className="overflow-hidden text-black bg-slate-600 bg-opacity-20 relative">
      <Header></Header>

      <div
        className="w-screen h-40 sm:h-96 bg-bottom bg-cover"
        style={{ backgroundImage: `url(${img1})` }}
        data-aos="fade-in"
      ></div>

      <div className="w-full flex flex-col justify-center items-center h mb-10">
        <div className="w-full flex flex-col justify-start p-10 px-40  sm:gap-5 text-black" data-aos="fade-up">
          <div className="flex items-center justify-between w-full mb-10">
            <div className="h-[2px] bg-slate-400 w-full"></div>
            <span className="border border-slate-500 p-2 w-full text-center">
              DATA PROCESSING
            </span>
            <div className="h-[2px] bg-slate-400 w-full"></div>
          </div>

          <p>
            Your IP address information is recorded to our database when you
            perform any actions.
          </p>

          <p>
            Our Website does not store or use your personal data for any other
            purpose, except as provided in this Privacy Policy and the Service
            Agreement.
          </p>
          <p>
            Due to the nature of the visa application process, your information
            (such as Name, Surname, Passport, Identity Information) or documents
            that you have sent us through the visa application form are recorded
            on our web servers.
          </p>
          <p>
            Your personal data is only shared with the Ministry of Foreign
            Affairs of Republic of Turkey.
          </p>
          <p>
            We will not use your personal information stored by our Web Site for
            any purpose other than for the purpose of processing your Visa
            Application. Our website accepts this information as a secret and
            takes high-level security measures on web servers to prevent
            unauthorized access. However, as a result of any potential cyber
            attack to our website; In the event that your personal information
            is made available to unauthorized third parties access, our website
            has no responsibility.
          </p>
          <p>
            Due to filling in any forms on our website; You can receive SMSs
            about your visa application procedures to the phone number you
            specified in the form.
          </p>
          <p>
            In some parts of our website, we may share links to other websites
            that are non-related with us for informational purposes. Regarding
            the content or privacy policies of these sites which do not belong
            to our website but published on our website; our website has not any
            authority or responsibility.
          </p>
          <p>
            Our Website may use a technical communication file between web
            server and visitors. These files called as Cookie. Our visitors can
            accept or reject these cookies by changing the browser settings as
            they wish.
          </p>
          <p>
            Our Web site uses various analysis software to measure and evaluate
            visitor activity. (For example: Google Analytics, Yandex Metrica,
            etc.) This analysis softwares generates hourly, daily, weekly,
            monthly, yearly and live statistics by using non-sensitive personal
            information. The main purpose of these softwares is to provide
            reports to system administrators of our website in order to provide
            a better service to our website visitors. You can get information
            from their websites about these world famous analysis softwares.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
