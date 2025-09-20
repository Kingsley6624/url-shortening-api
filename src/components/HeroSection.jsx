import React from "react";
import hero_img from "../assets/images/illustration-working.svg";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row md:items-center w-full gap-6 md:gap-0 ">
      <div className="flex flex-col justify-between items-center gap-6 basis-1/2 w-full text-center">
        <h1 className="text-[#33303A] font-bold md:text-6xl text-4xl">
          More than just shorter links
        </h1>
        <p className="text-[#A3A2A8]">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <a
          className="rounded-full px-4 py-1 bg-[#2BD1D1] hover:bg-[#9BE3E2] active:bg-[#9BE3E2] text-white w-fit "
          href=""
        >
          Get Started
        </a>
      </div>
      <div className="basis-1/2">
        <img src={hero_img} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
