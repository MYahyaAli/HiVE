"use client"

import bg2 from "../assets/bg2.jpg";

const CareersHeader = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 lg:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bg2}
            alt="Background"
            className="w-full h-full object-cover opacity-70"
          />
          {/* Decorative blobs */}
          <div className="absolute -top-24 -left-20 h-64 w-60 rounded-full bg-yellow-500/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-20 h-64 w-60 rounded-full bg-yellow-500/20 blur-3xl"></div>
        </div>

        {/* Foreground content (optional text) */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold">Careers at MyHive</h1>
          <p className="mt-4 text-lg">Join us and build the future</p>
        </div>
      </section>

      {/* Search Section */}
      <section className="px-4 md:px-12">
        <div className="max-w-5xl mx-auto bg-white flex flex-col sm:flex-row items-center gap-4 p-6 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search for jobs or keywords"
            className="flex-grow py-3 px-4 border border-gray-100 rounded-md bg-gray-100 w-full sm:w-auto"
          />
          <button className="rounded-full bg-yellow-600 px-8 py-3 font-bold text-white transition-colors hover:bg-yellow-500">
            Search
          </button>
        </div>
      </section>
    </>
  );
};

export default CareersHeader;
