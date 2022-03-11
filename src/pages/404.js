import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";

import Nav from "../components/2022/nav";
import Footer from "../components/2022/footer";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Nav />
      <div className="bg-army-green-primary w-full h-full z-20 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-12 pb-10 sm:pb-6 lg:pt-32 xl:pb-24 2xl:pt-56 2xl:pb-48">
        <div className="text-white text-center py-32">
          <h1 className="font-anisette text-4xl lg:text-6xl leading-tight font-bold uppercase">PAGE NOT FOUND!</h1>
          <p className="font-workSans text-lg lg:text-xl mt-4">Looks like someone abandoned me in staging :(</p>

          <a
            href="/"
            className="w-1/2 inline-block xl:inline-block sm:w-auto mt-20 px-12 py-4 bg-orange-primary text-black text-center uppercase"
          >
            Return Home
          </a>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default NotFoundPage;
