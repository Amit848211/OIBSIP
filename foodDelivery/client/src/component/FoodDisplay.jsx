import React, { useContext } from 'react'
import { StoreContext } from '../context/ContexApi'
import FoodItem from './FoodItem';

function FoodDisplay({categary,setCatagery}) {
   
     const{food_list} = useContext(StoreContext)

      console.log("cat",categary,"list",food_list);

  return (
    <>
        <div className="w-full h-full px-6 md:px-40 mt-4 pb-5 ">
            <div>
                <h1 className="text-black opacity-90 text-3xl font-bold">Top dishes near you</h1>
                <div className="flex flex-wrap gap-4 md:gap-8 mt-5">
                {food_list.map((item,index)=>{
                    if(categary==="All" || categary===item.category){
                    return <FoodItem key={index} item={item} id={item._id}/>}
                })}
                </div> 
            </div>
        </div>
    </>
  )
}

export default FoodDisplay