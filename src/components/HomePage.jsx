import React from "react";
import Head from "./Head";
import Form from "./Form";
import Processes from "./Processes";
import GetStarted from "./GetStarted";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="bg-[#F0F1F6] flex flex-col gap-16">
      <Head />
      <div className="px-[5%]  flex flex-col gap-16">
        <Form />
        <Processes />
      </div>
      <div>
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
