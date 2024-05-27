import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
function Navbar() {
  return (
    <div>
      <div  className="flex items-center justify-between md:px-10 mb-3">
        {" "}
        <img src={assets.logo} />
        <div>
          <img src={assets.profile_image} alt="profile_image" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
