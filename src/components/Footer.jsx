import React from "react";
import { footerLinks } from "../data/FooterLinks";
import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import insta from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <section>
      <div className="bg-[#232027] grid grid-cols-1 md:grid-cols-5 justify-center  gap-6 py-14 px-[5%]">
        <span className="text-white font-semibold text-3xl text-center md:text-left">
          Shortly
        </span>
        {Object.entries(footerLinks).map(([category, links]) => (
          <div
            className="flex flex-col items-center md:items-start text-center md:text-left gap-6"
            key={category}
          >
            <h4 className="font-semibold text-white">{category}</h4>
            <ul className="flex flex-col gap-3">
              {links.map((link, index) => (
                <li
                  className="  text-sm  text-center md:text-left w-full"
                  key={index}
                >
                  <a
                    className="w-full text-white hover:text-[#2BD1D1] active:text-[#2BD1D1]"
                    href={link.url}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div></div>
          </div>
        ))}
        <div className="flex gap-4 self-center justify-center ">
          <img
            className="h-4 hover:bg-[#2BD1D1] active:bg-[#2BD1D1] "
            src={facebook}
            alt=""
          />
          <img
            className="h-4 hover:bg-[#2BD1D1] active:bg-[#2BD1D1] "
            src={twitter}
            alt=""
          />
          <img
            className="h-4 hover:bg-[#2BD1D1] active:bg-[#2BD1D1] "
            src={pinterest}
            alt=""
          />
          <img
            className="h-4 hover:bg-[#2BD1D1] active:bg-[#2BD1D1] "
            src={insta}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
