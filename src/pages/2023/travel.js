import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/SEO/seo";
import Breadcrumb from "../../components/2023/breadcrumb";

function Travel() {
  return (
    <Layout>
      <SEO title="Travel Guide" />
      <Breadcrumb name="Travel Guide" />
      <section className="px-6">
        <div className="text-white pt-16 max-w-[792px] mx-auto">
          <h1 className="font-clashDisplay font-black text-2xl md:text-4xl">NIGERIA BASICS</h1>
          <p className="pt-6 md:pt-10 font-helvetica font-normal text-base md:text-lg text-[#D1D1E3]">
            Nigeria is one of the liveliest places in Africa that continues to attract visitors from different parts of
            the world with a population of over 170 million people. Nigeria comprises of 36 states with beautiful
            beaches, ultra-modern city centers, houses built with opulent luxury, great architecture, scenic attraction
            sites, universities, museums, national parks, zoos, hotels, resorts and many other amenities visitors see.
          </p>
        </div>
        <iframe
          title="Promotional Video of Lagos"
          className="mt-14 min-w-full md:min-h-[600px] md:px-[120px]"
          width="1000"
          height="400"
          src="https://www.youtube.com/embed/HbsdLI8kaWc"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="text-[#D1D1E3] mt-14">
          <h1 className="font-clashDisplay font-black text-2xl md:text-4xl">COVID GUIDELINES</h1>
          <p className="pt-6 md:pt-10 font-helvetica font-normal text-base md:text-lg ">
            We intend to strictly observe all COVID-19 guidelines throughout the duration of the festival. Please
            endeavour to observe the following guidelines:
          </p>
          <ul className="px-8 list-decimal text-base font-helvetica">
            <br></br>
            <li>All attendees are to wear a nose mask during the festival.</li>
            <li>Social distancing will be maintained in all the halls used for the festival</li>
          </ul>
          <p className="text-base pt-6 md:pt-10 font-helvetica font-normal md:text-lg">
            For attendees and speakers travelling to Nigeria, you must complete an online declaration form, upload a
            copy of a negative PCR COVID-19 test, and book post-arrival tests via the online portal. Once you have done
            this, you will be issued with a “permit to travel” via the portal.The following protocols are in place for
            travellers to Nigeria:
          </p>
          <ul className="px-8 list-decimal text-base font-helvetica">
            <li>
              All travellers arriving in Nigeria must present a negative COVID-19 PCR test result conducted no more than
              48 hours before departure.
            </li>
            <li>
              All travellers are required to do a COVID-19 PCR test on day 2 after arrival. Unvaccinated and partially
              vaccinated (1 dose only) travellers are required to self-isolate for 7 days and to do a COVID-19 test on
              day 2 and day 7 after arrival in order to exit isolation.
            </li>
            <li>All outbound travellers departing Nigeria must
              present evidence of full COVID-19 vaccination OR a negative COVID-19 PCR test conducted no more than 48
              hours before departure. This must be done regardless of the entry requirements of the destination countryS</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default Travel;
