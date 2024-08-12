import React, { useEffect, useState } from "react";

import Header from "../homepage/pages/header";
import Footer from "../homepage/pages/footer";
// import img1 from "./assets/applyBanner.webp";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RotatingLines } from "react-loader-spinner";

export default function PaymentStatus() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [txnId, setTxnId] = useState("");
  const [count, setCount] = useState();

  useEffect(() => {
    setIsLoading(true);

    const count = localStorage.getItem("count");
    console.log(count);
    
    if (count) {
      setCount(count);
    }else{
      console.log("count not found");
      // alert("SessionId not found");
    }

    setStatus(localStorage.getItem("status"));
    // const amount = localStorage.getItem("amount");
    setTxnId(localStorage.getItem("txn_id"));
    // console.log("status: ", status);
    // console.log("txn_id: ", txnId);

    // if (!status) {
    // //   console.log("Status not found");
    // //     // setIsLoading(false);
    // //     // return;
    // }
    // if (!txnId) {
    // //   console.log("txn_id not found");
    // //     // setIsLoading(false);
    // //     // return;
    // }

    setTimeout(() => {
      setIsLoading(false);
    //   console.log("isloading: ", isLoading);
    }, 3000);
  }, []);

  return (
    <div className="overflow-hidden text-black bg-slate-600 bg-opacity-20 relative">
      <div className="min-h-screen">
        <Header />
        {/* 
        <div
          className="w-screen h-96 bg-bottom bg-cover"
          style={{ backgroundImage: `url(${img1})` }}
        ></div> */}

        <div className="w-full flex justify-center h mb-10">
          <div className="flex flex-col w-4/5 justify-start py-10  gap-5">
            <div className="flex justify-center gap-2 items-center text-center">
              <div className="flex flex-col justify-center items-center gap-5 font-mono sm:w-[50rem]">
                {isLoading && (
                  <>
                    <RotatingLines
                      visible={true}
                      height="96"
                      width="96"
                      color="grey"
                      strokeWidth="5"
                      animationDuration="0.75"
                      ariaLabel="rotating-lines-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                    <div className="flex flex-col gap- sm:w-96">
                      <div className="bg-slate-400 p-2 px-5">
                        <span>Txn Id: </span>
                        <span>{txnId}</span>
                      </div>
                      <div className="bg-slate-200 p-2 px-5">
                        <span>Amount: </span>
                        <span>USD {44.50 * count}</span>
                      </div>
                      <div className="bg-slate-400 p-2 px-5">
                        <span>Status: </span>
                        <span>{status}</span>
                      </div>
                    </div>
                  </>
                )}
                {!isLoading && (
                  <>
                    <FaRegCircleCheck
                      color="green"
                      className="w-20"
                      size={70}
                      data-aos="fade-in"
                    />
                    <div className="flex flex-col items-center gap-2" 
                      data-aos="zoom-in"
                      >
                      <span className="text-[40px]">Payment Successfull</span>
                      <span className="text-[20px]">Status: {status}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
