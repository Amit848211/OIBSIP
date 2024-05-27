import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/ContexApi";
import { useNavigate, useNavigation } from "react-router-dom";
import axios from "axios";

function PlaceOrder() {
  const { totalCartAmmount, token, food_list, cartItem, url } =
    useContext(StoreContext);
  //  console.log(import.meta.env.VITE_KEY_ID);
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const userPlaceOrder = async () => {
    let orderItems = [];
    food_list.map((item) => {
      if (cartItem[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItem[item._id];
        orderItems.push(itemInfo);
      }
    });

    const orderData ={
      address:data,
      items:orderItems,
      amount:totalCartAmmount()+2
    }

    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})

    if(response.data.success){

      console.log("responce",response.data);
      const {session_url} = response.data;
     await window.location.replace(session_url);
    }
    else{
      alert("Error")
    }

  };



  useEffect(()=>{
      if(!token){
  navigate("/cart")
      }else if(totalCartAmmount() === 0){
          navigate("/cart")
      }
  },[token])

  return (
    <>
      <div className="w-full  px-2 md:px-40 md:py-20">
        <h1 className="text-3xl px-3 font-[650]">Delivery Information</h1>
        <div className="flex flex-col justify-between md:flex-row w-full mt-10">
          <div className="w-full h-auto flex flex-col gap-5 md:w-[45%] shadow-lg pb-8  px-3">
            <div className="w-full flex justify-between pb-5">
              <input
                required
                type="text"
                name="firstName"
                value={data.firstName}
                onChange={onChangeHandler}
                placeholder="First name"
                className="w-[47%] h-10 placeholder:text-black border-[2px] border-gray-400 text-black pl-2 focus:outline-none rounded"
              ></input>
              <input
                required
                name="lastName"
                value={data.lastName}
                onChange={onChangeHandler}
                type="text"
                placeholder="Last name"
                className="w-[47%] h-10 placeholder:text-black border-[2px] border-gray-400 text-black  pl-2 focus:outline-none rounded"
              ></input>
            </div>
            <input
              required
              name="email"
              value={data.email}
              onChange={onChangeHandler}
              type="email"
              placeholder="Email address"
              className="w-full h-10 placeholder:text-black border-[2px] border-gray-400 text-black  pl-2 focus:outline-none rounded"
            ></input>
            <input
              required
              name="street"
              value={data.street}
              onChange={onChangeHandler}
              type="text"
              placeholder="Street"
              className="w-full h-10 placeholder:text-black border-[2px] border-gray-400 text-black  pl-2 focus:outline-none rounded"
            ></input>
            <div className="w-full flex justify-between pb-5">
              <input
                required
                name="city"
                value={data.city}
                onChange={onChangeHandler}
                type="text"
                placeholder="City"
                className="w-[47%] h-10 placeholder:text-black border-[2px] border-gray-400 text-black  pl-2 focus:outline-none rounded"
              ></input>
              <input
                required
                name="state"
                value={data.state}
                onChange={onChangeHandler}
                type="text"
                placeholder="State"
                className="w-[47%] h-10 placeholder:text-black border-[2px] border-gray-400 text-black  pl-2 focus:outline-none rounded"
              ></input>
            </div>
            <div className="w-full flex justify-between pb-5">
              <input
                required
                name="zipcode"
                value={data.zipcode}
                onChange={onChangeHandler}
                type="text"
                placeholder="Zip code"
                className="w-[47%] h-10 placeholder:text-black border-[2px] border-gray-400 text-black  pl-2 focus:outline-none rounded"
              ></input>
              <input
                required
                name="country"
                value={data.country}
                onChange={onChangeHandler}
                type="text"
                placeholder="Country"
                className="w-[47%] h-10 placeholder:text-black border-[2px] border-gray-400 text-black  pl-2 focus:outline-none rounded"
              ></input>
            </div>
            <input
              required
              name="phone"
              value={data.phone}
              onChange={onChangeHandler}
              type="number"
              placeholder="Phone"
              className="w-full h-10 placeholder:text-black border-[2px] border-gray-400 text-black  pl-2 focus:outline-none rounded"
            ></input>
          </div>
          <div className="w-full h-auto flex flex-col gap-5 md:w-[45%] shadow-lg pb-8  px-3">
            <h1 className="text-3xl font-semibold opacity-85">Cart Totals</h1>
            <div className="flex items-center justify-between">
              <p>Subtotal</p>
              <p>${totalCartAmmount()}</p>
            </div>
            <hr></hr>
            <div className="flex items-center justify-between">
              <p>Deliver fee</p>
              <p>${totalCartAmmount() ? 5 : 0}</p>
            </div>
            <hr></hr>
            <div className="flex items-center justify-between h-6 font-semibold">
              <p>Total fee</p>
              <p>${totalCartAmmount() ? totalCartAmmount() + 5 : 0}</p>
            </div>
            <button
              onClick={userPlaceOrder}
              className="bg-orange-600 w-full md:w-[50%] h-10 rounded-md text-white font-semibold"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaceOrder;
