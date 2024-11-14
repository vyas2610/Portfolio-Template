import React from "react";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <div className="text-center bg-white ">
      <img
        src="./images/darkmode.svg"
        alt="Darkmode-Toggle"
        className="justify-self-end mt-2 pr-9 pt-6"
      />
      <div>
        <Avatar
          alt="Travis Howard"
          src="./images/avtaar.jpg"
          className="justify-self-center mt-4"
        />
      </div>
      <h1 className="text-slate-700 font-bold text-3xl pt-4">Jordan Walker</h1>
      <p className="text-slate-500 font-sans pt-3">
        Frontend developer and community builder for NYC us
      </p>
      <button className="btn mt-4">Available for Work</button>
      <div className=" h-50 w-4/5 m-auto mt-2 ">
        <div className=" md:flex md:flex-row  gap-5 sm:flex sm:flex-col  sm:justify-self-center">
          <div className="lg:w-60 lg:h-48 md:w-52 md:h-40 sm:w-60 sm:h-40">
            <img
              src="./images/slider3.jpg"
              alt=""
              className="w-full h-full rounded-lg  img-1 my-5 "
            />
          </div>

          <div className="lg:w-60 lg:h-48 md:w-52 md:h-40 sm:w-60 sm:h-40 sm:hover:scale-110 sm:hover:ease-in-out">
            <img
              src="./images/slider2.jpg"
              alt=""
              className="w-full h-full rounded-lg  img-2 my-5 "
            />
          </div>

          <div className="lg:w-60 lg:h-48 md:w-52 md:h-40 sm:w-60 sm:h-40">
            <img
              src="./images/slider1.jpg"
              alt=""
              className="w-full h-full rounded-lg  img-1 my-5 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
