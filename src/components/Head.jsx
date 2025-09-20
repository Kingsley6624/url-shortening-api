import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const Head = () => {
  return (
    <section className="flex flex-col bg-white pb-28 px-[5%]">
      <Navbar />
      <HeroSection />
    </section>
  );
};

export default Head;
