import React, { useContext } from "react";
import { StoreContext } from "../context/ContexApi";
import { assets } from "../assets/assets";
import {useNavigate} from "react-router-dom"

function Card() {
  const { food_list, cartItem, removeToCart,totalCartAmmount,url } = useContext(StoreContext);
  console.log(totalCartAmmount);


  const navigate = useNavigate()

  return (
    <>
     {totalCartAmmount()?
      (<div className="w-full md:px-20 py-20">
        <div>
          <div className="grid grid-cols-6 font-semibold text-orange-600">
            <p>Item</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <div className="mt-6  ">
            {food_list.map((item, index) => {
              if (cartItem[item._id] > 0) {
                return (
                  <div className="grid grid-cols-6 font-semibold items-center shadow-lg mt-2">
                    <img
                      className="w-12 h-12 md:w-24 md:h-24 rounded-lg"
                      src={url+"/images/"+item.image}
                    ></img>
                    <p className="w-16 h-auto md:w-24">{item.name}</p>
                    <p className="w-10 md:w-5">${item.price}</p>
                    <p className="w-10 pl-5 md:pl-0 md:w-5">{cartItem[item._id]}</p>
                    <p className=" w-5">
                      ${cartItem[item._id] * item.price}
                    </p>
                    <img
                      className="w-7 h-7  cursor-pointer"
                      src={assets.remove_icon_red}
                      onClick={() => removeToCart(item._id)}
                    ></img>
                  </div>
                );
              }
            })}
          </div>
          <div className="flex flex-col-reverse md:flex md:flex-row justify-between mt-12">
            <div className="w-full md:w-[40%] flex flex-col gap-3 shadow-lg pb-5 px-3 pt-3">
              <h1 className="text-3xl font-semibold opacity-85">Cart Totals</h1>
              <div className="flex items-center justify-between">
                <p>Subtotal</p>
                <p>${totalCartAmmount()}</p>
              </div>
              <hr></hr>
              <div className="flex items-center justify-between">
                <p>Deliver fee</p>
                <p>${totalCartAmmount()? 5 : 0}</p>
              </div>
              <hr></hr>
              <div className="flex items-center justify-between h-6 font-semibold">
                <p>Total fee</p>
                <p>${totalCartAmmount()?totalCartAmmount()+5 : 0}</p>
              </div>
              <button 
              onClick={()=>navigate("/order")}
              className="bg-orange-600 w-full md:w-[50%] h-10 rounded-md text-white font-semibold">Proceed to Checkout</button>
            </div>
            <div className="w-full md:w-[40%] shadow-lg pb-5 px-3 pt-3">
              <div className="flex flex-col gap-10">
                <p className="text-orange-500 font-semibold">If you have a promo code,Enter it here</p>
                <div className="flex">
                  <input type="text" placeholder="Apply promo code"
                  className="w-full h-12 placeholder:text-slate-100 bg-gray-400 text-black font-semibold pl-2 focus:outline-none rounded-lg"></input>
                  <button className="w-40 h12 bg-green-500 text-white font-semibold text-center -ml-40 rounded-r-lg">Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>):(
      <div className="my-28">
          <h1 className="text-3xl font-semibold text-orange-500 text-center">Cart empty, Please add some product</h1>
      </div>)}
    </>
  );
}

export default Card;
