import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <>
      <div id="contact" className="w-full h-auto md:h-[300px] bg-slate-800  pt-10 flex flex-col justify-between">
        <div className="w-full flex px-5 gap-5 flex-col md:flex-row md:justify-between md:px-40">
          <div className="w-full md:w-[30%] flex flex-col gap-3">
            <h1 className="text-orange-600 text-3xl font-semibold">Tomato</h1>
            <p className="text-white text-start text-xs">
              Choose from diverse menu featuring a delactable array of dishes.
              Our mission is to satisfy your cravings and elevate your dining
              experience,one delicious metal at a time
            </p>
            <div className="flex gap-2">
              <img src={assets.linkedin_icon} className="w-7 h-7"></img>
              <img src={assets.twitter_icon} className="w-7 h-7"></img>
              <img src={assets.facebook_icon} className="w-7 h-7"></img>
            </div>
          </div>
          <div className="w-full md:w-[30%] flex flex-col gap-3">
            <h1 className="text-white text-3xl font-semibold">company</h1>
            <ul className="text-white cursor-pointer">
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="w-full md:w-[30%] flex flex-col gap-3">
            <h1 className="text-white text-3xl font-semibold">Contact Us</h1>
            <ul className="text-white cursor-pointer">
              <li>Mpbile No. : +91-7644994101</li>
              <li>Email : amitkumarsmpt@gmail.com</li>
              <li>Address : Samastipur,Bihar,848211</li>
            </ul>
          </div>
        </div>
        <div className="w-full pb-2 px-5  md:px-40 flex flex-col md:items-center md:justify-center">
        <div className="w-full bg-gray-500 h-[1.5px] mt-3"></div>
        <p className="text-gray-300">Copyright 2024 © Tomato.com-All Right Reserved.</p>
        <p className="text-gray-300">Developed By-Amit kumar</p>

        </div>
      </div>
    </>
  );
}

export default Footer;
