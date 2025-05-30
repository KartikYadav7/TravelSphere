import React, { useState } from "react";

import { Nav } from "../Navbar";
import Footer from "../Footer";
import PackageDetail from "./PackageDetail";
import Button from "../Button";
import CustomTourForm from "./CustomTourForm";


const Package = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div
        style={{ backgroundImage: `url(/travelus.png)` }}
        className="relative h-screen w-full object-cover bg-center text-white"
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <Nav />

        <div className="relative pt-40 font-cursive z-10 text-center justify-center text-3xl md:text-8xl italic cursive">
          Travel With Us
        </div>
      </div>

      <PackageDetail />

      <section className="py-12 md:py-12 ">
        <div className="text-center">
          <p className="text-sm text-red-500 font-semibold uppercase">
            create Package
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mt-2">
            Create your Own custom Package
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            You can Create & Book your Own Custom Packages and help us Improve
            the quality of service.
          </p>

          <Button
            text="Create Package"
            className={`mt-8`}
            onClick={() => setShowForm(true)}
          />
          {showForm && <CustomTourForm />}
        </div>
      </section>
      {/* <TourDetailPage /> */}

      <Footer />
    </>
  );
};

export default Package;
