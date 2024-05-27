import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { StoreContext } from '../context/ContexApi';



function FoodItem({item,id}) {
    console.log("item",item);
    const[count,setcount]=useState(0)


     const{cartItem,setcartItem,addToCart,removeToCart ,url} =useContext(StoreContext)



  return (
   <>
    <div className="w-[48%] md:w-[270px] h-auto pb-3 rounded-xl shadow-md">
        <div>
            <img src={url+"/images/"+item.image}
             className="w-full h-[150px]  md:w-[270px] md:h-[250px] rounded-t-xl"></img>
        </div>
        {!cartItem[id]? <img 
        className="flex w-10 h-10 items-center gap-3 pl-3 mt-2"
        src={assets.add_icon_white}
        onClick={()=>addToCart(id)}
        ></img>
        :<div className="flex items-center gap-1 pl-3 w-24 mt-3 h-8 rounded-full bg-blue-100">
            <img src={assets.remove_icon_red}
            onClick={()=>removeToCart(id)}
            className="w-7 h-7"
            ></img>
            <p>{cartItem[id]}</p>
            <img src={assets.add_icon_green}
            onClick={()=>addToCart(id) }
            className="w-7 h-7"
            ></img>
        </div>}
        <div className="px-3 flex flex-col gap-2 mt-4">
        <div className="flex justify-between">
        <h3 className="font-semibold opacity-90">{item.name}</h3>
        <img src={assets.rating_starts} className="w-[70px] h-[16px]"></img></div>
        <p className="text-[14px] font-semibold opacity-80">{item.description}</p>
        <p className="font-semibold opacity-90 text-orange-500">${item.price}</p>
        </div>
    </div>
   </>
  )
}

export default FoodItem