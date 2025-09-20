import React from "react";
import { data } from "../data/data";
import ProcessesCard from "./ProcessesCard";

const Processes = () => {
  return (
    <section>
      <div className="flex flex-col text-center mb-20 gap-4">
        <h3 className="font-bold text-[#33303A] text-2xl md:text-3xl">
          Advanced Statistics
        </h3>
        <p className="text-[#A3A2A8]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 -z-10 flex items-center">
          <span className="h-1 w-full bg-black"></span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-6 md:h-72">
          {data.map((item) => (
            <ProcessesCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Processes;
