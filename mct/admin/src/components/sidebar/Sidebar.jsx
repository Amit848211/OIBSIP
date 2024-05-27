import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <div className="w-[150px] pt-6 ml-5  h-[100vh] border-r-[1px] border-r-[#a9a9a9] px-2">
        <div className="flex flex-col gap-5">
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            {" "}
            <div className="flex items-center gap-5 border-[1px] px-1 py-1 border-[#a9a9a9]">
              <img src={assets.add_icon} alt="add_icon" />
              <p>Add Items</p>
            </div>
          </NavLink>

          <NavLink
            to="/list"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            {" "}
            <div className="flex items-center gap-5 border-[1px] px-1 py-1 border-[#a9a9a9]">
              <img src={assets.order_icon} alt="order_icon" />
              <p>List Items</p>
            </div>
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            {" "}
            <div className="flex items-center gap-5 border-[1px] px-1 py-1 border-[#a9a9a9]">
              <img src={assets.order_icon} alt="add_icon" />
              <p>Order Items</p>{" "}
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
