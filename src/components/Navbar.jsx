import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-menu.svg";
import HeroSection from "./HeroSection";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    
      <nav className="py-6">
        <div className="flex items-center gap-6 flex-wrap md:flex-nowrap justify-between">
          <img src={logo} alt="" />
          <div className="hidden md:flex justify-between items-center w-full text-[#9e9aa7ff] font-medium">
            <ul className="flex gap-3">
              <li className="hover:text-[#35323eff] active:text-[#232127ff]">
                <a href="">Features</a>
              </li>
              <li className="hover:text-[#35323eff] active:text-[#232127ff]">
                <a href="">Pricing</a>
              </li>
              <li className="hover:text-[#35323eff] active:text-[#232127ff]">
                <a href="">Resources</a>
              </li>
            </ul>
            <div className="flex items-center gap-3">
              <a
                className="hover:text-[#35323eff] active:text-[#232127ff]"
                href=""
              >
                Login
              </a>
              <a
                className="rounded-full px-4 py-1 bg-[#2acfcfff] hover:bg-[#69eded] active:bg-[#69eded] text-white "
                href=""
              >
                Sign Up
              </a>
            </div>
          </div>
          <button onClick={() => setOpenMenu((prev) => !prev)}>
            <img className="h-6 flex md:hidden" src={menu} alt="" />
          </button>

          {openMenu && (
            <div className=" bg-[#3A3053] text-[#F9F6FC] font-semibold basis-full  flex flex-col md:hidden items-center gap-5 text-center rounded-md p-6 divide-y divide-[#bfbfbfff]">
              <ul className="w-full flex flex-col gap-5 ">
                <li className="">
                  <a href="">Features</a>
                </li>
                <li className="">
                  <a href="">Pricing</a>
                </li>
                <li className="">
                  <a href="">Resources</a>
                </li>
              </ul>
              <div className="w-full flex flex-col gap-5 pt-5">
                <a href="">Login</a>
                <a
                  className="w-full rounded-full px-4 py-1 bg-[#2BD1D1] hover:bg-[#9BE3E2] active:bg-[#9BE3E2] text-[#F9F6FC] "
                  href=""
                >
                  Sign Up
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

  );
};

export default Navbar;
