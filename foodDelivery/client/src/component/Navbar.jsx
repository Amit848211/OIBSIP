import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink,useNavigate } from "react-router-dom";
import { StoreContext } from "../context/ContexApi";
import "./Navbar.css"

function Navbar({ setlogin }) {
  const [menu, setMenu] = useState("Home");
  const navigate =useNavigate()
  const navigate1 =useNavigate()

  const { totalCartAmmount,token,setToken } = useContext(StoreContext);

  const active = {
    paddingBottom: "2px",
    borderBottom: "2px solid orange",
    color: "orange",
  };
  const logOut =()=>{
      localStorage.removeItem("token")
      setToken("")
      navigate1("/")
  }

  return (
    <>
      <div className="w-full px-5 h-10 flex bg-slate-950 md:h-16 md:px-20 items-center justify-between">
        <Link to="/">
          <div className="">
            <img src={assets.logo} alt="" className="w-32 h-8 "></img>
          </div>
        </Link>
        <div>
          <ul className="hidden text-white font-semibold md:flex gap-5 items-center">
            <Link
              to="/"
              onClick={() => setMenu("Home")}
              style={menu === "Home" ? active : {}}
              className="cursor-pointer"
            >
              Home
            </Link>
            <a href="#menu">
              <li
                onClick={() => setMenu("Menu")}
                style={menu === "Menu" ? active : {}}
                className="cursor-pointer"
              >
                Menu
              </li>
            </a>
            <a href="#downloadApp">
              <li
                onClick={() => setMenu("Mobile")}
                style={menu === "Mobile" ? active : {}}
                className="cursor-pointer"
              >
                Mobile App
              </li>
            </a>
            <a href="#contact">
              <li
                onClick={() => setMenu("Contact")}
                style={menu === "Contact" ? active : {}}
                className="cursor-pointer"
              >
                Contact Us
              </li>
            </a>
          </ul>
        </div>
        <div className="flex items-center gap-8">
          <img src={assets.search_icon} alt=""></img>
          <div className="flex">
            <Link to="/cart">
              <img src={assets.basket_icon} alt=""></img>
              
            </Link>
            {totalCartAmmount()?<div className="w-2 h-2 bg-orange-500 rounded-full"></div>:<></>}
          </div>
           {
            !token?
           
          <button
            onClick={()=>setlogin(true)}
            className="text-gray-200 font-semibold bg-transparent border border-gray-400 w-20 h-8 rounded-2xl cursor-pointer hover:bg-pink-50 hover:text-black"
          >
            Sing In
          </button>:<>
            <div className="navbar-profile">
              <img src={assets.profile_icon} alt=""/>
              <ul className="navbar-profile-dropdown">
                <li onClick={()=>navigate("/myorders")}>
                <img src={assets.bag_icon} alt=""/>
                <p>Oredrs</p>
                </li>
                <hr />
                <li onClick={logOut}>
                <img src={assets.logout_icon} alt=""/>
                <p>Logout</p>
                </li>
              </ul>
            </div>
          </>
           }
        </div>
      </div>
    </>
  );
}

export default Navbar;
