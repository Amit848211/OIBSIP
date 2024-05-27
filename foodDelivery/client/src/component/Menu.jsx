import React from 'react'
import {menu_list} from '../assets/assets'

function Menu({categary,setCatagery}) {

    const active = {
        paddingBottom:"2px",
        borderBottom:"3px solid orange",
        color:"orange"
    }

console.log("categary",categary,"setcatagary",setCatagery);


  return (
   <>
    <div id='menu' className="w-full h-full pl-6 md:px-40 mt-4 pb-5">
        <div>
            <h1 className="text-black opacity-90 text-3xl font-bold cursor-pointer">Explore our menu</h1>
            <p className="w-full md:w-[60%] text-black text-base mt-2 opacity-90 cursor-pointer">
            Choose from diverse menu featuring a delactable array of dishes.
            Our
            mission is to satisfy your cravings and elevate your dining
            experience,one delicious metal at a time
            </p>
            <div className="flex flex-wrap md:flex-nowrap items-center gap-2  md:gap-6 mt-4">
                {menu_list.map((item,index)=>{
                    return(
                        <>
                            <div key={index} className="flex flex-col items-center"
                            onClick={()=>setCatagery(prev=>item.menu_name===prev?"All":item.menu_name)}
                            style={item.menu_name===categary?active:{}}>
                                <div>
                                    <img src={item.menu_image}
                                    
                                    className="cursor-pointer"></img>
                                </div>
                                <p className="font-semibold opacity-80">{item.menu_name}</p>
                            </div>
                        </>
                    )
                })}
            </div>

        </div>
    </div>
   </>
  )
}

export default Menu