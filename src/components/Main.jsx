import React from "react";
import Avatar from "@mui/material/Avatar";
 const Main = () => {
  // //Defined a state to manage the isToggled
  // const [isToggled, setIsToggled] = useState(true);

  // //Function to handle Toggle 
  // const handleToggle = () => {
  //   setIsToggled(!isToggled); // Toggle between true and false
  // };

  
  return (
    <div className=" bg-white">
      <h2 className="text-white pt-12 px-14 pb-4 text-lg font-bold ">
        Experience
      </h2>
      <div className="lg:w-5/6 sm:w-5/6 justify-self-center rounded-md bg-gray-100">
            <p className="pt-5 pl-16 pb-4 text-xs italic text-gray-500">
            2020-Present
            </p>
        <div className="flex hover:cursor-pointer">
            <Avatar alt="QONTO" src="./images/qonto_logo.png" className="mx-3"/>
            <h3 className="text-sm md:text-base lg:text-lg font-semibold pb-0 px-3">Senior Developer and VP of product at QONTO</h3>
        </div>
            <p className=" px-20 font-normal">London, UK</p>
            <p className="pt-3 pb-3 text-gray-600 text-justify px-16">Setting vision, leadership, processes while directly participating in communications with clients such as eBay, Amazon, X, Twitch, Instagram, and many others.</p>
      </div>
    </div>
  );
};

export default Main;