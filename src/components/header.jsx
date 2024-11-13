import React from "react";
import Avatar from '@mui/material/Avatar';


const Header = () =>
    {
        return(
            <div className="text-center bg-white ">
                    <img src="./images/darkmode.svg" alt="Darkmode-Toggle" className="justify-self-end mt-2 pr-9 pt-6"/>
                <div>
                    <Avatar alt="Travis Howard" src="./images/avtaar.jpg" className="justify-self-center mt-4" />
                </div>
                    <h1 className="text-slate-700 font-bold text-3xl pt-4">Jordan Walker</h1>
                    <p className="text-slate-500 font-sans pt-3">Frontend developer and community builder for NYC us</p>
                     <button className="btn mt-4">Available for Work</button>
                <div className="sm:flex sm:flex-col sm:w-64 sm:max-h-48 sm:gap-3 text-sm sm:flex-nowrap md:flex md:gap-3 md:flex-nowrap  md:text-base md:flex-col md:w-64 md:max-h-48 lg:flex lg:gap-2 lg:text-lg lg:flex-row lg:w-60 lg:max-h-48 mt-8 lg:justify-self-start lg:flex-nowrap">
                    <img src="./images/slider3.jpg" alt="" className="w-full h-full rounded-lg  img-1"/>
                    <img src="./images/slider2.jpg" alt="" className="w-full h-full rounded-lg  img-2"/>
                    <img src="./images/slider1.jpg" alt="" className="w-full h-full rounded-lg img-1"/>
                </div>
            </div>
        )
    }

export default Header;