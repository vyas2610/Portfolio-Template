import React, {useState} from "react";
import Avatar from "@mui/material/Avatar";
import {  useTheme} from "./ThemeContext";

// NewsLatter Imports
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

//Icon Import
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

 const Main = () => { 
  const darkTheme = useTheme();
    //Defined a state to manage the isHovered
    const [isHovered, setIsHovered] = useState(true);

    //Function to handle Mousehover
    const handleMouseOver = () => setIsHovered(false);
    const handleMouseOut = () => setIsHovered(true);
  
  return (
    // Experience Section
    <div className={`${darkTheme ? 'bg-white' : 'bg-slate-800'}`}>
        <h2 className={`pt-12 px-14 pb-4 text-lg font-bold ${darkTheme ? 'text-slate-700' : 'text-white'}`}>
          Experience
        </h2>
      {/* Three Experience Div's */}
        <div className={`lg:w-5/6 sm:w-5/6 justify-self-center rounded-md  ${darkTheme ? 'bg-gray-100' : 'bg-slate-700'}`}>
              <p className="pt-5 pl-16 pb-4 text-xs italic text-gray-500">
              2020-Present
              </p>
          <div className="flex hover:cursor-pointer">
              <Avatar alt="QONTO" src="./images/qonto_logo.png" className="mx-3" sx={{width:28, height:28}}/>
              <h3 className={`text-sm md:text-base lg:text-lg font-semibold pb-0 px-3  ${darkTheme ? 'text-black' : 'text-white'}`}>Senior Developer and VP of product at QONTO</h3>
          </div>
              <p className={`px-20 font-normal ${darkTheme ? 'text-black' : 'text-white'}`}>London, UK</p>
              <p className={`pt-3 pb-3 text-justify px-16 sm:tracking-tighter sm:whitespace-normal md:tracking-tighter md:whitespace-normal ${darkTheme ? 'text-gray-600' : 'text-gray-400'}`}>Setting vision, leadership, processes while directly participating in communications with clients such as eBay, Amazon, X, Twitch, Instagram, and many others.</p>
        </div>
        <div className="lg:w-5/6 sm:w-5/6 justify-self-center rounded-md mt-2 mb-2">
              <p className="pt-5 pl-16 pb-4 text-xs italic text-gray-500">
              2019-21
              </p>
          <div className="flex hover:cursor-pointer">
              <Avatar alt="Medium Inc." src={`${darkTheme ? './images/medium_err.png' : './images/medium_logo.png'}`} className="mx-3" sx={{width:28, height:28}}/>
              <h3 className={`text-sm md:text-base lg:text-lg font-semibold pb-0 px-3 ${darkTheme ? 'text-black' : 'text-white'} `}>Fullstack Developer at Medium Inc.</h3>
          </div>
              <p className={`px-20 font-normal ${darkTheme ? 'text-black' : 'text-white'}`}>New York, NYC</p>
              <p className={`pt-3 pb-3  text-justify px-16 sm:tracking-tighter sm:whitespace-normal md:tracking-tighter md:whitespace-normal1 ${darkTheme ? 'text-gray-600' : 'text-gray-400'}`}>Setting vision, leadership, processes while directly participating in communications with clients such as eBay, Amazon, X, Twitch, Instagram, and many others.</p>
        </div>
        <div className={`lg:w-5/6 sm:w-5/6 justify-self-center rounded-md mt-2 mb-2 ${darkTheme ? 'bg-gray-100' : 'bg-slate-700'}`}>
              <p className="pt-5 pl-16 pb-4 text-xs italic text-gray-500">
              2017-19
              </p>
          <div className="flex hover:cursor-pointer">
              <Avatar alt="QONTO" src="./images/vimeo_img.png" className="mx-3" sx={{width:28, height:28}}/>
              <h3 className={`text-sm md:text-base lg:text-lg font-semibold pb-0 px-3  ${darkTheme ? 'text-black' : 'text-white'}`}>System Engineer and Web Developer at Vimeo</h3>
          </div>
              <p className={`px-20 font-normal  ${darkTheme ? 'text-black' : 'text-white'}`}>London, UK</p>
              <p className={`pt-3 pb-3 text-justify px-16 sm:tracking-tighter sm:whitespace-normal md:tracking-tighter md:whitespace-normal ${darkTheme ? 'text-gray-600' : 'text-gray-400'}`}>Setting vision, leadership, processes while directly participating in communications with clients such as eBay, Amazon, X, Twitch, Instagram, and many others.</p>
        </div>
      {/* Tutorial Section */}
        <h2 className={`pt-12 px-14 pb-4 text-lg font-bold ${darkTheme ? 'text-slate-700' : 'text-white'}`}>
          Tutorials
        </h2>
        <div className="md:flex md:flex-row  gap-5 sm:flex sm:flex-col  sm:justify-self-center">
            <div
                  className={`lg:w-72 lg:h-40 md:w-64 md:h-40 sm:w-64 sm:h-40 ease-in-out ${
                    isHovered ? "img-3" : ""
                  }`}
                  onMouseEnter={handleMouseOver}
                  onMouseLeave={handleMouseOut}
                >
                  <img
                    src="./images/Tutorial 1.jpg"
                    alt=""
                    className="w-full h-full rounded-lg my-5 "
                  />
            </div>
            <div
                  className={`lg:w-72 lg:h-40 md:w-64 md:h-40 sm:w-64 sm:h-40 ease-in-out ${
                    isHovered ? "img-4" : ""
                  }`}
                  onMouseEnter={handleMouseOver}
                  onMouseLeave={handleMouseOut}
                >
                  <img
                    src="./images/Tutorial 2.jpg"
                    alt=""
                    className="w-full h-full rounded-lg my-5 "
                  />
            </div>
        </div>
      {/* Article Section */}
        <h2 className={`pt-12 px-14 pb-4 text-lg font-bold ${darkTheme ? 'text-slate-700' : 'text-white'}`}>
          Articles
        </h2>
      {/* Three Articles  */}
        <div className= {`lg:w-5/6 sm:w-5/6 justify-self-center rounded-md cursor-pointer ${darkTheme ? 'bg-gray-100' : 'bg-slate-700'}`}>
          <div className="flex hover:cursor-pointer">
              <p className={`pt-5 pl-4 text-sm  ${darkTheme ? 'text-gray-800' : 'text-white'}`}>
              medium.com
              </p>
          </div>
              <h3 className={`text-sm md:text-base lg:text-lg font-semibold pb-0 px-4  ${darkTheme ? 'text-black' : 'text-white'}`}>KumoX Images Now available On Docker Hub
              </h3>
              <p className={`pt-1 pb-3 text-justify px-4 sm:tracking-tighter sm:whitespace-normal md:tracking-tighter md:whitespace-normal ${darkTheme ? 'text-gray-600' : 'text-gray-400'}`}>Today, KumoX announced that it has become a DVP, marking a significant milestone for our shared mission to enhance the security.</p>
        </div>
        <div className="lg:w-5/6 sm:w-5/6 justify-self-center rounded-md cursor-pointer">
              <div className="flex hover:cursor-pointer">
                  <p className={`pt-5 pl-4 text-sm  ${darkTheme ? 'text-gray-800' : 'text-white'}`}>
                  medium.com
                  </p>
              </div>
              <h3 className={`text-sm md:text-base lg:text-lg font-semibold pb-0 px-4  ${darkTheme ? 'text-black' : 'text-white'}`}>
                Nobody Wants To Work with Josh
              </h3>
              <p className={`pt-3 pb-3 text-justify px-4 sm:tracking-tighter sm:whitespace-normal md:tracking-tighter md:whitespace-normal ${darkTheme ? 'text-gray-600' : 'text-gray-400'}`}>
                There was a wizard engineer (we'll call him “Josh”) who worked for me a few years ago. His code was good. His PRs were quick.
              </p>
        </div>
        <div className={`lg:w-5/6 sm:w-5/6 justify-self-center rounded-md cursor-pointer ${darkTheme ? 'bg-gray-100' : 'bg-slate-700'}`}>
          <div className="flex hover:cursor-pointer">
              <p className={`pt-5 pl-4 text-sm  ${darkTheme ? 'text-gray-800' : 'text-white'}`}>
              indiehackers.com
              </p>
          </div>
              <h3 className={`text-sm md:text-base lg:text-lg font-semibold pb-0 px-4  ${darkTheme ? 'text-black' : 'text-white'}`}>A Sharp And Solid Outline Of 3D Grid Magic
              </h3>
              <p className={`pt-3 pb-3 text-justify px-4 sm:tracking-tighter sm:whitespace-normal md:tracking-tighter md:whitespace-normal ${darkTheme ? 'text-gray-600' : 'text-gray-400'}`}>
              Since the world is 3D, it's no surprise that video games, mobile robotics challenges, and architectural design tools often require 3D variants.
              </p>
        </div>
      {/* Side Hustles */}
        <h2 className={`pt-12 px-14 pb-4 text-lg font-bold ${darkTheme ? 'text-slate-700' : 'text-white'}`}>
          Side Hustles
        </h2>
        <div className="sm:flex sm:flex-col  sm:place-content-center md:flex md:flex-row md:place-content-center gap-3 lg:flex lg:flex-row lg:place-content-center">
            <div className={`lg:w-2/5 md:w-3/5 sm:w-5/6 rounded-md cursor-pointer ${darkTheme ? 'bg-gray-100' : 'bg-slate-700'}`}>
              <div className="flex hover:cursor-pointer">
                  <Avatar alt="QONTO" src="./images/qonto_logo.png" className="mx-5 mt-4" sx={{width:28, height:28}}/>
              </div>
                  <h3 className={`text-sm md:text-base lg:text-lg font-semibold pb-0 px-5 pt-3  ${darkTheme ? 'text-black' : 'text-white'}`}>
                    Tail Library
                  </h3>
                  <p className={` pb-3 text-justify px-5 sm:tracking-tighter sm:whitespace-normal md:tracking-tighter md:whitespace-normal ${darkTheme ? 'text-gray-600' : 'text-gray-400'}`}>
                      An easy-to-use components library based on Tailwind CSS.
                  </p>
            </div>
            <div className={`lg:w-2/5 md:w-3/5 sm:w-5/6 rounded-md cursor-pointer`}>
              <div className="flex hover:cursor-pointer">
                  <Avatar alt="QONTO" src={`${darkTheme ? './images/medium_logo.png' : './images/medium_err.png'}`} className="mx-5 mt-4" sx={{width:28, height:28}}/> 
              </div>
                  <h3 className={`text-sm md:text-base lg:text-lg font-semibold pb-0 px-5 pt-3   ${darkTheme ? 'text-black' : 'text-white'}`}>
                    Kumo Next
                  </h3>
                  <p className={`pb-3 text-justify px-5 sm:tracking-tighter sm:whitespace-normal md:tracking-tighter md:whitespace-normal ${darkTheme ? 'text-gray-600' : 'text-gray-400'}`}>
                    A free frontend framework based on Tailwind CSS and Next.js.
                  </p>
            </div>
        </div>
      {/* Mail Box */}
          <h2 className={`pt-12 px-14 pb-4 text-lg font-bold ${darkTheme ? 'text-slate-700' : 'text-white'}`}>
            Let's Connect
          </h2>
          <div className={`mailbox place-items-center ${darkTheme ? 'bg-gray-100' : 'bg-slate-700'}`}>
            <div className={`pt-3 `}>
                <Paper
                    component="form"
                    sx={{ paddingLeft: '6px', display: 'flex', alignItems: 'center', width: 525, backgroundColor:`${darkTheme ? '#ffffff' : '#1e293b'}` }}
                >
            
                    <InputBase
                      sx={{ ml: 1, flex: 1, color:'#9ca3af'}}
                      placeholder="Enter Your Email..."
                      inputProps={{ 'aria-label': 'Enter your email' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} >
                      {/* place my button here */}
                      <button className={` ${darkTheme ? 'btn' : 'btndark'}`}>
                                  Join Newsletter
                        </button>
                    </IconButton>
                </Paper>
            </div>
          </div>
      {/* Footer Section */}
        <div className="place-items-center">
            {/* Font Div */}
            <div className={`foot-font ${darkTheme ? 'text-slate-800' : 'text-gray-100'}`}>PA</div>
            {/* Social Icons */}
            <div className="flex gap-3 pb-2 cursor-pointer">

            <Avatar alt="X"  sx={{width:35, height:35, backgroundColor:`${darkTheme ? '#f9fafb ' : ' #334155'}`, color:`${darkTheme ? '#334155' : '#f9fafb'}` }}>
                <XIcon />
            </Avatar>
            <Avatar alt="Git"  sx={{width:35, height:35, backgroundColor:`${darkTheme ? '#f9fafb ' : ' #334155'}`, color:`${darkTheme ? '#334155' : '#f9fafb'}`}}>
                <GitHubIcon />
            </Avatar>
            <Avatar alt="LinkedIn"  sx={{width:35, height:35, backgroundColor:`${darkTheme ? '#f9fafb ' : ' #334155'}`, color:`${darkTheme ? '#334155' : '#f9fafb'}`}}>
              <LinkedInIcon />
            </Avatar>           
            </div>
            <p className="text-gray-500 pt-1 pb-1">© Piyush Aswani. All rights reserved.</p>
        </div>
    </div>
  );
};

export default Main;