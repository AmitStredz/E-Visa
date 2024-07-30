import axios from "axios";
import React from "react";

export default function temp() {
  const handleClick = async () => {
    const userId = "386bd69c-9d7d-4ece-a660-c24c67424cbd";
    console.log("UserId...", userId);

    const data = {
      amount: "44",
      currency: "USD",
      order_id: "720-287-009-445-3434",
      card_number: "2322322323232223",
      card_expiry: "04/2567",
      cvv: "432",
    };

    console.log("data: ", data);
    console.log(
      "link: " +
        `https://evisa-6a188817e8b4.herokuapp.com/payments/payment-details/${userId}/create_payment/`
    );

    try {
      const response = await axios.post(
        `https://evisa-6a188817e8b4.herokuapp.com/payments/payment-details/${userId}/create_payment/`,
        data
      );
      console.log("Response: ", response);
    } catch (error) {
      console.log("Error: ", error);
      if (error?.response) {
        console.log("Error Data: ", error.response.data);
        console.log("Error Status: ", error.response.status);
        console.log("Error Headers: ", error.response.headers);
      } else {
        console.log("Error Message: ", error.message);
      }
    }
  };
  return (
    <div>
      <button className="border-2 p-2 px-4 " onClick={handleClick}>
        Click
      </button>
    </div>
  );
}
