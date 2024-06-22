import React from "react";

import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Header from "./pages/header";
import Footer from "./pages/footer";


export default function Homepage() {
  return (
    <div className=" text-white overflow-hidden bg-slate-00">
      <Header></Header>
      <div className=""  >
        <Page1></Page1>
        {/* <div className="flex justify-center text-center gap-28 p-10 w-screen h-40  text-black">
          <div className="">
            <h1 className="text-[52px] font-semibold">15+</h1>
            <p>Years of Experience</p>
          </div>
          <div className="w-1 h-20 bg-black bg-opacity-30"></div>
          <div>
            <h1 className="text-[52px] font-semibold">18k</h1>
            <p>Clients Worldwide</p>
          </div>
          <div className="w-1 h-20 bg-black bg-opacity-30"></div>

          <div>
            <h1 className="text-[52px] font-semibold">98%</h1>
            <p>Success rate</p>
          </div>
          <div className="w-1 h-20 bg-black bg-opacity-30"></div>

          <div>
            <h1 className="text-[52px] font-semibold">28k</h1>
            <p>Visa issued </p>
          </div>
        </div> */}
        {/* <img
          src={img1}
          className="w-screen h-screen object-bottom absolute top-0 left-0 -z-10"
        ></img> */}
      </div>

      <Page2></Page2>

      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  );
}
