import React from "react";
import Avatar from "@mui/material/Avatar";
export const Main = () => {
  return (
    <div className="bg-white">
      <h2 className="text-slate-700 pt-9 px-14 pb-4 text-lg font-semibold">
        Experience
      </h2>
      <div className="w-3/4 justify-self-center rounded-md bg-gray-200 ">
        <p className="pt-5 pl-16 pb-4 text-xs italic text-gray-500">
          2020-Present
        </p>
        <Avatar alt="QONTO" src="./images/qonto_logo.png" className="mx-6 " />
      </div>
    </div>
  );
};
