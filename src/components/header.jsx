import React from "react";
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const Header = () =>
    {
        return(
            <div className="text-center">
                <img src="./images/darkmode.svg" alt="Darkmode-Toggle" className="justify-self-end mt-2"/>
                <div>
                <Avatar alt="Travis Howard" src="./images/avtaar.jpg" className="justify-self-center mt-4" />
                </div>
                <h1 className="text-slate-700 font-bold text-3xl pt-4">Jordan Walker</h1>
                <p className="text-slate-500 font-sans pt-3">Frontend developer and community builder for NYC us</p>
                <button className="btn mt-4">Available for Work</button>
                <div className="flex justify-self-center mt-7">
                    {/* <Card sx={{ maxWidth: 245 }} >
                    <CardMedia
                        sx={{ height: 140 }}
                        image="./images/slider3.jpg"
                        title="slider-image"
                    />    
                    </Card>
                    <Card sx={{ maxWidth: 245 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="./images/slider2.jpg"
                        title="slider-image"
                    />    
                    </Card>
                    <Card sx={{ maxWidth: 245 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="./images/slider1.jpg"
                        title="slider-image"
                    />    
                    </Card> */}
                    <img src="./images/slider3.jpg" alt="" className="max-w-64 max-h-48 rounded-lg mr-3 img-1"/>
                    <img src="./images/slider2.jpg" alt="" className="max-w-64 max-h-48 rounded-lg mr-3 img-2"/>
                    <img src="./images/slider1.jpg" alt="" className="max-w-64 max-h-48 rounded-lg img-1"/>
                </div>
            </div>
        )
    }

export default Header;