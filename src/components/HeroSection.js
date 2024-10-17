import React from "react";

const HeroSection = () => (
  <section className="relative">
    <img
      src="https://storage.googleapis.com/a1aa/image/giVWQWPenKRNDSEEBKzA9PtpHZof63bFmuRuQcxSLjz6bknTA.jpg"
      alt="Modern houses with a tree and a fence"
      className="w-full h-96 object-cover"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <button className="bg-gray-800 bg-opacity-50 text-white text-2xl px-6 py-3">
        Enquire Now
      </button>
    </div>
  </section>
);

export default HeroSection;
