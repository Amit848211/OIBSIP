import React, { useEffect, useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify';
function List({url}) {
    const [list,setList]=useState([]);
  // const url = "http://localhost:4000";
  const fetchList = async ()=>{
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if(response.data.success){
        setList(response.data.data)
        
    }else{
        toast.error("Error")
    }
  }


//  logic for remove food

const removeFood = async (foodId)=>{
  console.log(foodId)
  const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
  await fetchList()
  if(response.data.success){
    toast.success(response.data.message)
  }else{
    toast.error("Error")
  }
}




  useEffect(()=>{
    fetchList()
  },[])
  return (
    <>
    <div className="w-full md:px-20 py-20">
        <h1 className='text-2xl text-orange-600'>All Foods List</h1>
        <div className="grid mt-6 grid-cols-6 font-semibold text-orange-600">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
        </div>
        <div className="mt-6  ">
          {list.map((item,index)=>{
            return (
              <div className="grid grid-cols-6 font-semibold items-center shadow-lg mt-2">
                <img className="w-12 h-12 md:w-24 md:h-24 rounded-lg" src={`${url}/images/`+item.image}></img>
                <p className="w-16 h-auto md:w-24">{item.name}</p>
                <p className="w-10 md:w-5">{item.category}</p>
                <p className="w-10 pl-5 md:pl-0 md:w-5">{item.price}</p>
                <p  className=" w-5" onClick={()=>removeFood(item._id)}>x</p>
              </div>
            )
          })}
        </div>
        </div>
    </>
  )
}

export default List