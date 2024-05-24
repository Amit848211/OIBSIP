import React, { useState } from 'react'
import Card from './Card'

function Inner() {

    const[inputValue,setinputValue]=useState("")
    const[checked,setchecked]=useState("false")
    const[data,setdata]=useState([])

    const handleData = ()=>{
        setdata((prevData)=>{
            return [...prevData,{
                name:inputValue,
                purchased:false
            }]
        })
        setinputValue("")
    }
     console.log(data);
  return (
    <div className="flex items-center justify-center">
        <div className="flex w-80 h-auto px-20 py-10 rounded-sm shadow-md shadow-orange-500 bg-slate-300 flex-col gap-2 items-center justify-center mt-[10%]">
            <h4 className="text-orange-600 text-2xl">Grocery Bud</h4>
            <div className="flex gap-1">
                <input
                type='text'
                placeholder='Grocery name'
                value={inputValue}
                className="pl-3 h-8 w-56"
                onChange={(e)=>setinputValue(e.target.value)} >

                </input>
                <button className="text-white bg-green-600 w-20 h-8 rounded-sm"
                onClick={handleData}>Add Item</button>
            </div>
            <div>
                {data.map((ele,index)=><Card data={data} setdata={setdata} name={ele.name} isPurchased={ele.purchased} index={index}/>)}
            </div>
        </div>
    </div>
  )
}

export default Inner