import React from "react";

const getAlignment = (id) => {
if(id === 2) return 'md:self-center';
if(id === 3) return 'md:self-end';
return ''
} 

const ProcessesCard = ({ icon, heading, body, id }) => {
  return (
    <div className={`bg-white flex flex-col items-center md:items-start text-center md:text-start px-4 py-6 h-fit w-full md:w-1/3 rounded-md ${getAlignment(id)}`}>
      <div className="bg-[#3A3053] rounded-full p-4 relative bottom-14 -mb-8">
        <img src={icon} alt="" className="h-8" />
      </div>

      <h4 className=" text-[#33303A] text-lg font-semibold mb-2">{heading}</h4>
      <p className="text-sm text-[#A3A2A8]">{body}</p>
    </div>
  );
};

export default ProcessesCard;
