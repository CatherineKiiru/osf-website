import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/SEO/seo";
import Breadcrumb from "../../components/2023/breadcrumb";
import Hotels from "../../components/2023/hotels";

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
          className="mt-14 w-full h-[223px] sm:min-h-[600px] md:px-6 lg:px-[120px]"
          width="1000"
          height="400"
          src="https://www.youtube.com/embed/HbsdLI8kaWc"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="text-[#D1D1E3] mt-14 max-w-[792px] mx-auto">
          <div>
            <h1 className="font-clashDisplay font-black text-2xl md:text-4xl">COVID GUIDELINES</h1>
            <p className="pt-6 md:pt-10 font-helvetica font-normal text-base md:text-lg ">
              We intend to strictly observe all COVID-19 guidelines throughout the duration of the festival. Please
              endeavour to observe the following guidelines:
            </p>
            <ul className="px-8 pt-4 list-decimal text-base font-helvetica">
              <li>All attendees are to wear a nose mask during the festival.</li>
              <li>Social distancing will be maintained in all the halls used for the festival</li>
            </ul>
            <p className="text-base pt-4 md:pt-10 font-helvetica font-normal md:text-lg">
              For attendees and speakers travelling to Nigeria, you must complete an online declaration form, upload a
              copy of a negative PCR COVID-19 test, and book post-arrival tests via the online portal. Once you have
              done this, you will be issued with a “permit to travel” via the portal.The following protocols are in
              place for travellers to Nigeria:
            </p>
            <ul className="px-8 pt-4 list-decimal text-base md:text-lg font-helvetica">
              <li>
                All travellers arriving in Nigeria must present a negative COVID-19 PCR test result conducted no more
                than 48 hours before departure.
              </li>
              <li>
                All travellers are required to do a COVID-19 PCR test on day 2 after arrival. Unvaccinated and partially
                vaccinated (1 dose only) travellers are required to self-isolate for 7 days and to do a COVID-19 test on
                day 2 and day 7 after arrival in order to exit isolation.
              </li>
              <li>
                All outbound travellers departing Nigeria must present evidence of full COVID-19 vaccination OR a
                negative COVID-19 PCR test conducted no more than 48 hours before departure. This must be done
                regardless of the entry requirements of the destination countryS
              </li>
            </ul>
            <h1 className="mt-14 font-clashDisplay font-black text-2xl md:text-4xl">VISA INFORMATION</h1>
            <p className="mt-6 md:mt-10 text-base md:text-lg font-helvetica text-[#D1D1E3]">
              Are you a citizen of a Benin, Burkina Faso, Cameroon, Cape Verde, Chad, Côte d&apos;ivoire, Gambia, Ghana?
              Then you do not require a visa to visit Nigeria. Citizens of all other countries require a visa obtainable
              from any Nigerian Embassy or Consulate close to them. Kindly visit here to apply for Visa. If you have an
              African passport, you can visit here here to apply for Visa-on-Arrival (VoA). You will also be required to
              have proof of polio, yellow fever, and Covid19 vaccinations to enter Nigeria.
            </p>
            <h1 className="mt-14 font-clashDisplay font-black text-2xl md:text-4xl">AIRPORT AND TRAVEL</h1>
            <p className="mt-6 md:mt-10 text-base md:text-lg font-helvetica text-[#D1D1E3]">
              All international travel will be through Murtala Muhammed International Airport, Lagos main international
              airport. Major airlines provide daily services to many international destinations. The airport is about
              17-24 minutes’ drive from Zone Tech Park, the conference venue. Some hotels also offer pick-up services
              and we encourage participants with such options to use the services. Airport pick-up will be available on
              request for attendees arriving from the 23rd of March, 2022. Please email the event organizers with your
              arrival details ahead of time to allow us to plan for pick-ups. Taxis are also available in addition to
              Uber and Bolt services.
            </p>
            <h1 className="mt-14 font-clashDisplay font-black text-2xl md:text-4xl max-w-[327px] md:max-w-full">
              ADVICE FOR INTERNATIONAL VISITORS
            </h1>
            <p className="mt-6 md:mt-10 text-base md:text-lg font-helvetica text-[#D1D1E3]">
              We are super excited about your visit and we can’t wait to welcome you to the OSCA FESTIVAL. Please read
              this information carefully, and check every item. Some of it is crucial and it will help you have a better
              travel process.
            </p>
          </div>
          <div className="mt-6 font-helvetica px-6">
            <ul className="list-decimal">
              <li>
                <span className="font-bold"> Visa:</span> You may need a visa to enter Nigeria. You must check this,
                otherwise, you will likely be denied entry, or probably not even be allowed to board your plane. If you
                have any questions, please contact us immediately.
              </li>
              <li>
                <span className="font-bold"> Vaccination certificate:</span> You must have yellow fever, polio
                vaccination, and Covid19 certificate to enter Nigeria. Otherwise, you will likely be denied entry.
                Please ensure you have this in advance, do not leave it until the last minute. Other optional
                certificates include Hepatitis A, Tetanus, and Typhoid.
              </li>
              <li>
                <span className="font-bold"> Malaria precautions:</span> All of Nigeria, including Lagos, is indicated
                as a high-risk zone for malaria. Travelers are advised to take antimalarial medication such as Malarone
                (atovaquone/proguanil hydrochloride) and other precautions. After sunset, avoid mosquito bites by
                covering up with clothing (long sleeves, long trousers), using insect repellents on exposed skin, and
                when necessary: sleeping under a mosquito net. Ensure to bring the appropriate clothing and creams.
              </li>
              <li>
                <span className="font-bold"> Arrival times:</span> We hope to co-ordinate transport on arrival at the
                airport for some groups. We might not be able to do this for everyone, but please let us know:
                <ul className="list-disc px-8">
                  <li>The date and time of your arrival in Nigeria</li>
                  <li>The date and time of your departure from Nigeria</li>
                  <li>Your airline and flight numbers</li>
                  <li>Your accommodation location</li>
                </ul>
              </li>
            </ul>
          </div>
          <p className="mt-4">We will help if we can, please provide this information in good time.</p>
          <div className="mt-4 font-helvetica px-6">
            <ul className="list-decimal ">
              <li>
                <span className="font-bold"> Movie Recommendation:</span> You can watch any of the following Nigerian
                movies on Netflix if you can to get a feel of the vibe of urban Nigeria.
              </li>
            </ul>
            <ul className="list-disc px-8 font-helvetica">
              <li>The Wedding Party</li>
              <li>Up North</li>
              <li>Fifty</li>
            </ul>
          </div>
        <div className="">
        <h1 className="text-white mt-14 font-clashDisplay font-black text-2xl md:text-4xl max-w-[327px] md:max-w-full">
          ACCOMODATION
        </h1>
        <p className="text-[#D1D1E3] font-helvetica font-normal">
          The organizers of OSCA FESTIVAL aim to promote a comfortable and flexible lodging experience for attendees.
          Nigeria provides a large number and wide range of hotels, which you can book on the usual online sites. Here
          are a few recommendations according to your budget. We encourage all attendees to make reservations early as
          prices may change.
        </p>
        </div>
        </div>
        <Hotels/>

      </section>
    </Layout>
  );
}

export default Travel;
