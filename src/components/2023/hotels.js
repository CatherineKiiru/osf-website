import React from "react";

import { hotels } from "./cloudImages";

function Hotels() {
  return (
    <section className="flex md:flex-col flex-wrap px-6 md:px-[90px]">
        <div className="md:grid grid-cols-4 gap-6 flex flex-wrap text-white mt-8 mb-12">
        {[
          {
            name: "Million Dollars Imperial Hotel",
            image: hotels.million,
            price: "Starts at 6500/night.",
            duration: "~32 minutes drive to the venue.",
            link: "https://goo.gl/maps/fmiYCbUrQJKa9oUU7"
          },
          {
            name: "Hotel Newcastle",
            image: hotels.newcastle,
            price: "Starts at ₦12,050/night.",
            duration: "~2 minutes drive to the venue.",
            link: "https://goo.gl/maps/UjEi3yNPz4YUP4vcA"
          },
          {
            name: "H53 SUITES",
            image: hotels.h53,
            price: "Starts at ₦19000/night.",
            duration: "~17 minutes drive to the venue.",
            link: "https://goo.gl/maps/hTjbv2LxVCYquQkt6"
          },
          {
            name: "Airbnb",
            image: hotels.airbnb,
            price: "Starts $30/night.",
            duration: "See available spaces around the venue",
            link: "https://www.airbnb.com/s/Gbagada--Lagos"
          }
        ].map((hotel) => (
          <a href={hotel.link} key={hotel.name} className="relative w-full h-full">
            <figure className="cursor-pointer w-full">
              <img className="max-w-full max-h-[300px] object-cover" src={hotel.image} alt={`An amazing photograph of ${hotel.name}.`} />
              <div className="z-0 -mt-20 pt-8 px-6 w-auto h-20 bg-gradient-to-t from-gray-950 opacity-50 text-white">
                <h3 className="font-bold text-base">{hotel.name}</h3>
              </div>
            </figure>
            <div className="my-2">
              <p className="text-white">
                <span className="font-bold">₦</span>
                &nbsp;{hotel.price}
              </p>
              <p className="text-white">
                <span className="font-bold" role="img" aria-label="A car emoji">
                  🚗
                </span>
                &nbsp;{hotel.duration}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="relative my-36 text-center lg:text-right">
        <a
          href="https://www.google.com/maps/search/Hotels/@6.5598938,3.3584354,14z/data=!3m1!4b1!4m22!1m13!4m12!1m4!2m2!1d6.7386955!2d7.7841286!4e1!1m6!1m2!1s0x103b8d73a658782b:0x7a1de11d89cccc84!2szone+tech+park+maps!2m2!1d3.37684!2d6.5514308!2m7!3m6!1sRestaurants!2sZone+Tech+Park!3s0x103b8d73a658782b:0x7a1de11d89cccc84!4m2!1d3.3766075!2d6.5511999"
          className="p-6 bg-orange-primary text-dark uppercase hover:bg-inherit hover:outline hover:outline-orange-primary hover:outline-4 hover:text-orange-primary transition-colors duration-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          See all Nearby Hotels
        </a>
      </div>
    </section>
  );
}

export default Hotels;
