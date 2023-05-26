import React from "react";

import { homeBackground } from "./cloudImages";

function TravelHead() {
  return (
    <section className="">
        <div className="flex w-screen bg-repeat">
          <img className="absolute bg-repeat" src={homeBackground.background} alt="" />
        </div>
        <section className="relative mt-[176px] mb-[86px] md:mt-[197px]">
        <div className="w-full text-white">
          <h1 className="text-center font-humane text-9xl md:text-[400px] uppercase font-medium">Travel Guide</h1>
        </div>
      </section>
    </section>
  );
}

export default TravelHead;
