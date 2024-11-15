import React,{useState} from "react";
import Avatar from "@mui/material/Avatar";
import { useTheme, useThemeUpdate } from "./ThemeContext";

const Header = () => {
  //Defined a state to manage the isHovered
  const [isHovered, setIsHovered] = useState(true);

  //Function to handle Mousehover
  const handleMouseOver = () => setIsHovered(false);
  const handleMouseOut = () => setIsHovered(true);

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  // //Defined a state to manage the isToggled
  // const [isToggled, setIsToggled] = useState(true);

  // //Function to handle Toggle
  // const handleToggle = () => {
  //   setIsToggled(!isToggled); // Toggle between true and false
  // };



  return (
    <div
      className={`sm:h-svh md:h-dvh lg:h-lvh ${darkTheme ? 'bg-white' : 'bg-slate-700'}`} 
    >
          <img
            src="./images/darkmode.svg"
            alt="Darkmode-Toggle"
            className="justify-self-end mt-2 pr-9 pt-6 cursor-pointer"
            onClick={toggleTheme}
          />
      <div>
          <Avatar
            alt="Travis Howard"
            src="./images/avtaar.jpg"
            className="justify-self-center mt-4"
          />
      </div>
          <h1
            className="font-bold text-3xl pt-4 text-center text-slate-700 "
          >
            Jordan Walker
          </h1>
          <p className="text-slate-500 font-sans pt-3 text-center">
            Frontend developer and community builder for NYC us
          </p>
      <div className="text-center">
        <button className="mt-4 btn ">
          Available for Work
        </button>
      </div>
      <div className=" h-50 w-4/5 m-auto mt-2 ">
        <div className="md:flex md:flex-row  gap-5 sm:flex sm:flex-col  sm:justify-self-center">
          <div
            className={`lg:w-60 lg:h-44 md:w-52 md:h-40 sm:w-60 sm:h-40 ease-in-out ${
              isHovered ? "img-1" : ""
            }`}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
          >
            <img
              src="./images/slider3.jpg"
              alt=""
              className="w-full h-full rounded-lg my-5 "
            />
          </div>
          <div
            className={`lg:w-60 lg:h-44 md:w-52 md:h-40 sm:w-60 sm:h-40 ease-in-out ${
              isHovered ? "img-2" : ""
            }`}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
          >
            <img
              src="./images/slider2.jpg"
              alt=""
              className="w-full h-full rounded-lg my-5 "
            />
          </div>

          <div
            className={`lg:w-60 lg:h-44 md:w-52 md:h-40 sm:w-60 sm:h-40 ease-in-out  ${
              isHovered ? "img-1" : ""
            }`}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
          >
            <img
              src="./images/slider1.jpg"
              alt=""
              className="w-full h-full rounded-lg my-5 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
