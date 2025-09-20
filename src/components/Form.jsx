import React, { useEffect, useState } from "react";
import shorten_desktop from "../assets/images/bg-shorten-desktop.svg";
import shorten_mobile from "../assets/images/bg-shorten-mobile.svg";
import illustration from '../assets/images/illustration-working.svg'
import axios from "axios";

const Form = () => {
  const [value, setValue] = useState('')
  const [results, setResults] = useState([])
  const [backgroundImg, setBackgroundImg] = useState(() => {
    const width = window.innerWidth;
    if (width < 768) return shorten_mobile;
    return shorten_desktop;
  });
  useEffect(() => {
    const handleImg = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setBackgroundImg(shorten_mobile);
      } else {
        setBackgroundImg(shorten_desktop);
      }
    };
    window.addEventListener("resize", handleImg);
    return () => {
      window.removeEventListener("resize", handleImg);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
     
      try {
        const res = await axios.post('https://cleanuri.com/api/v1/shorten', new URLSearchParams({url: value}),
      {
        headers: {
            "content-type": "application/x-www-form-urlencoded",
  
        },
      }
      );
        setResults((prev) => [...prev, res.data.result_url])
      } catch (error) {
        console.log("failed to shorten URL:", error);
      }

  }
  console.log(results)
  return (
    <div
      className="bg-black relative bg-cover bg-no-repeat bg-center p-6 w-full rounded-md bottom-32 md:bottom-28 -mb-14"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >


      <form className="flex flex-col md:flex-row gap-3 z-30" onSubmit={handleSubmit}>
        <input
          className="md:w-full p-2 rounded-md"
          type="text"
          placeholder="Shorten a link here..."
          value={value}
          onChange={e=> setValue(e.target.value)}
        />
        <button
          className="bg-[#2BD1D1] hover:bg-[#9BE3E2] active:bg-[#9BE3E2] rounded-md py-2 px-4 whitespace-nowrap"
          type="submit"
        >
          Shorten It!
        </button>
      </form>
      

    </div>
  );
};

export default Form;
