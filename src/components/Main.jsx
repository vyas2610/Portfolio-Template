import React from "react";
import Avatar from "@mui/material/Avatar";
export const Main = () => {
  
  return (
    <div className="bg-white">
      <h2 className="text-slate-700 pt-9 px-14 pb-4 text-lg font-semibold">
        Experience
      </h2>
      <div className="lg:w-3/4 sm:w-5/6 justify-self-center rounded-md bg-gray-200 ">
            <p className="pt-5 pl-16 pb-4 text-xs italic text-gray-500">
            2020-Present
            </p>
        <div className="flex  hover:cursor-pointer">
            <Avatar alt="QONTO" src="./images/qonto_logo.png" className="mx-3 " />
            <h3 className="text-sm md:text-base lg:text-lg font-semibold">Senior Developer and VP of product at QONTO</h3>
        </div>
      </div>
    </div>
  );
};
