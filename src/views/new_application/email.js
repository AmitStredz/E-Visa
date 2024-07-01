import React, { useState } from "react";
import { useNavigate } from "react-router";

import Header from "../homepage/pages/header";
import Footer from "../homepage/pages/footer";
import img1 from "./assets/applyBanner.jpg";

export default function Personal_info() {
  const [mailSent, setMailSent] = useState(false);
  const navigate = useNavigate();

  const handleResendClick = () => {
    setMailSent(true);
    setTimeout(() => {
      setMailSent(false);
    }, "4000");
  };

  return (
    <div className="overflow-hidden text-black bg-slate-600 bg-opacity-20 relative">
      <Header></Header>

      <div
        className="w-screen h-96 bg-bottom bg-cover"
        style={{ backgroundImage: `url(${img1})` }}
      ></div>

      <div className="w-full flex justify-center h mb-10">
        <div className="w-4/5 justify-start py-10 flex gap-5">
          <div>
            <i class="ri-check-line text-7xl text-green-500"></i>
          </div>
          <div className="w-[40rem] flex flex-col gap-5">
            <h1 className="text-[28px] font-semibold ">
              Your Application has been Successfully Completed.
            </h1>
            <p>
              You have completed the first step of your application. A
              confirmation e-mail has been sent to your e-mail address. Now,
              please click the link in the e-mail message, follow the
              instructions and proceed with the payment. If you did not receive
              an e-mail message, click the button below to resend.
            </p>
            {mailSent ? (
              <div className="text-center text-[24px] font-semibold text-green-600 h-14">
                <p data-aos="fade-in">Email Sent Succesfully...</p>
              </div>
            ) : (
              <div className="flex justify-center h-14">
                <button
                  className=" w-5/12 py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white"
                  data-aos="fade-in"
                  onClick={handleResendClick}
                >
                  Resend e-mail
                </button>
              </div>
            )}
          </div>

          <div
            className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-red-700 p-4 w-[30rem] absolute right-10 top-96"
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
