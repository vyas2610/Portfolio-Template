import React, {useState} from "react";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  const [isHovered, setIsHovered] = useState(true);

 const handleMouseOver = () => setIsHovered(false);
  const handleMouseOut = () => setIsHovered(true);


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
        <div className="md:flex md:flex-row  gap-5 sm:flex sm:flex-col  sm:justify-self-center">

          <div className={`lg:w-60 lg:h-44 md:w-52 md:h-40 sm:w-60 sm:h-40 ease-in-out ${isHovered ? 'img-1' : ''}`} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
            <img
              src="./images/slider3.jpg"
              alt=""
              className="w-full h-full rounded-lg my-5 "
            />
          </div>
          <div className={`lg:w-60 lg:h-44 md:w-52 md:h-40 sm:w-60 sm:h-40 ease-in-out ${isHovered ? 'img-2' : ''}`} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
            <img
              src="./images/slider2.jpg"
              alt=""
              className="w-full h-full rounded-lg my-5 "
            />
          </div>

          <div className={`lg:w-60 lg:h-44 md:w-52 md:h-40 sm:w-60 sm:h-40 ease-in-out  ${isHovered ? 'img-1' : ''}`} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
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
