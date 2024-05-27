import React from "react";

function Header() {
  return (
    <>
      <div className="w-full h-full px-5 py-5 md:px-40 md:pt-20">
        <div className="bg-[url(/header_img.png)] h-[60vh] flex flex-col px-10 md:pl-[10%] md:pt-[10%] w-full md:h-[70vh] bg-no-repeat rounded-r-xl rounded-b-xl">
          <h1 className="text-white text-5xl font-bold md:w-[60%] mt-10 animate-pulse">Order your </h1>
          <h1 className="w-full text-white text-5xl font-bold md:w-[60%] animate-pulse">favourite food here</h1>
          <p className="w-full md:w-[60%] text-white mt-5 animate-pulse">
            Choose from diverse menu featuring a delactable array of dishes
            crafted with the finest ingredients and culinary experties.Our
            mission is to satisfy your cravings and elevate your dining
            experience,one delicious metal at a time
          </p>
          <button className="w-28 h-8 bg-white text-gray-900 rounded-full mt-10 hover:animate-pulse">View menu</button>
        </div>
      </div>
    </>
  );
}

export default Header;
