import React, { useEffect, useState } from "react";

import Header from "../homepage/pages/header";
import Footer from "../homepage/pages/footer";
import img1 from "./assets/applyBanner.jpg";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expDate, setExpDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    console.log("value: ", value);

    if (!isNaN(value) && value.length <= 16) {
      setCardNumber(value);
    } else {
      console.log("not a number");
    }
  };
  const handleCvvChange = (e) => {
    const value = e.target.value;
    console.log("value: ", value);

    if (!isNaN(value) && value.length <= 3) {
      setCvv(value);
    } else {
      console.log("not a number");
    }
  };

  const handleExpDateChange = (e) => {
    const value = e.target.value;
    const cleanValue = value?.match(/\d+/g)?.join("");

    console.log("value: ", value);
    console.log("cleanvalue: ", cleanValue);

    if (value?.length > 7) {
      return;
    }

    if (!isNaN(value) && value?.length < 2) {
      setExpDate(cleanValue);
      return;
    }

    if (value?.length == 2) {
      console.log("1");
      setExpDate(value + "/");
      return;
    }

    if (cleanValue?.length <= 6) {
      console.log("sliced: ", cleanValue.slice(0, 2), cleanValue.slice(2));
      setExpDate(
        cleanValue.slice(0, 2) + "/" + cleanValue.slice(2, cleanValue.length)
      );
      return;
    }
  };

  const generateRandomNumber = (length) => {
    let randomNumber = "";

    for (let i = 0; i < length; i++) {
      randomNumber += Math.floor(Math.random() * 10);
    }
    return randomNumber;
  };

  const generateOrderId = () => {
    const part1 = generateRandomNumber(3);
    const part2 = generateRandomNumber(3);
    const part3 = generateRandomNumber(3);
    const part4 = generateRandomNumber(4);

    return `${part1}-${part2}-${part3}-${part4}`;
  };

  const handlePaymentClick = async () => {
    if (isLoading) return;
    setIsLoading(true);

    if (cardNumber.length != 16) {
      alert("Enter valid Card number.");
      setIsLoading(false);
      return;
    }
    if (cvv.length != 3) {
      alert("Enter valid CVV number.");
      setIsLoading(false);
      return;
    }

    const userid = localStorage.getItem("user_id");
    if (!userid) {
      console.log("UserId not found");
      setIsLoading(false);
      //   return;
    }

    const orderId = generateOrderId();

    const data = {
      amount: "44.50",
      currency: "USD",
      order_id: orderId,
      card_number: cardNumber,
      card_expiry: expDate,
      cvv: cvv,
    };
    console.log("data: ", data);
    console.log(
      "link: " +
        `https://evisa-6a188817e8b4.herokuapp.com/payments/payment-details/${userid}/create_payment/`
    );

    try {
      const response = await axios.post(
        `https://evisa-6a188817e8b4.herokuapp.com/payments/payment-details/${userid}/create_payment/`,
        data
      );

      if (response.data) {
        console.log("Response recieved: ", response);
      }
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setIsLoading(false);
    }
    // navigate('/email');
  };

  return (
    <div className="overflow-hidden text-black bg-slate-600 bg-opacity-20 relative">
      <div className="min-h-screen">
        <Header />

        <div
          className="w-screen h-96 bg-bottom bg-cover"
          style={{ backgroundImage: `url(${img1})` }}
        ></div>

        <div className="w-full flex justify-center h mb-10">
          <div className="flex flex-col w-4/5 justify-start py-10  gap-5">
            <h1 className="text-[28px] font-semibold ">Payment</h1>
            <div className="flex items-center gap-1 w-3/5 flex-wrap">
              <p className="text-slate-500">Country/Region</p>
              <p>{"->"}</p>
              <p className="text-slate-500">ArrivalDate</p>
              <p>{"->"}</p>
              <p className="text-slate-500">Prerequisites</p>
              <p>{"->"}</p>
              <p className="text-slate-500">Personal Information</p>
              <p>{"->"}</p>
              <p className="text-slate-500">Email Verification</p>
              <p>{"->"}</p>
              <p className="text-slate-500">Data Control</p>
              <p>{"->"}</p>
              <p className="font-semibold">Payment</p>
            </div>

            <div className="flex flex-col gap-2 w-[40rem]">
              <div className="flex justify-between p-3 border border-slate-400 bg-[#e4e2e2]">
                <span className="text-[28px] font-semibold">Total Amount:</span>
                <div className="flex flex-col items-end">
                  <span className="text-[32px] font-bold">44.50 USD</span>
                  <span className="text-[14px] text-slate-500">
                    (43 USD 1.50 USD Service fee)
                  </span>
                </div>
              </div>

              <div>
                <div className="flex justify-between p-3 border border-slate-400 bg-[#e4e2e2]">
                  <span className="text-[18px]">Credit Card</span>
                  <div className="flex justify-center gap-1">
                    <img src="/assets/visaLogo.png" className="w-12 object-contain"></img>
                    <img
                      src="/assets/masterCardLogo.png"
                      className="w-12 h-8 object-contain"
                    ></img>
                    <img src="/assets/JCBLogo.png" className="w-12 h-8 "></img>
                    <img
                      src="/assets/UnionPayLogo.png"
                      className="w-12 h-8 object-contain"
                    ></img>
                    <img src="/assets/AlipayLogo.svg" className="w-20 object-contain"></img>
                  </div>
                </div>
                <div className="bg-white p-5 object-contain">
                  <form
                    className="flex flex-col gap-3"
                    // onSubmit={handlePaymentClick}
                  >
                    <div className="flex justify-between items-center w-[70%]">
                      <label>Card Number</label>
                      <div className="flex justify-start w-1/2">
                        <input
                          type="text"
                          placeholder="XXXX-XXXX-XXXX-XXXX"
                          required
                          value={cardNumber}
                          onChange={handleCardNumberChange}
                          className="p-2 border border-slate-400 outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-[70%]">
                      <label>CVV / CVC / CVC2</label>
                      <div className="flex justify-start w-1/2">
                        <input
                          type="text"
                          placeholder="000"
                          required
                          value={cvv}
                          onChange={handleCvvChange}
                          className="w-20 p-2 border border-slate-400 outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-[70%]">
                      <label>Expiration Date</label>
                      <div className="flex justify-start w-1/2">
                        <input
                          type="text"
                          placeholder="MM/YYYY"
                          required
                          value={expDate}
                          onChange={handleExpDateChange}
                          className="p-2 border border-slate-400 outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center mt-10">
                      <button
                        className="p-3 px-5 border bg-green-600 rounded-md text-white"
                        // type="submit"
                        onClick={handlePaymentClick}
                      >
                        {isLoading ? "Loading..." : "Make Payment"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div
              className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-red-700 p-4 w-[30rem] absolute right-10 top-96"
              role="alert"
            >
              <p className="font-bold mb-5">Information Note:</p>
              <ul className="list-disc list-inside gap-5 flex flex-col">
                <ul>
                  It will take a few minutes for the payment to be processed. In
                  the meantime, please do not use your browser's back, forward
                  or refresh buttons to navigate through the pages.
                </ul>

                <ul>
                  Kindly inform the e-Visa Support Desk (Main Page {">"} Contact
                  Us) in case of any suspended or unsuccessful payment. Please
                  contact your bank to check the status of your payment. If
                  there is a payment made, please do not make a second payment
                  with a new application unless indicated otherwise. The
                  Ministry will not be responsible for your additional payment
                  transactions and they cannot be refunded.
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
