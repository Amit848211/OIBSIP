import React from 'react'
import { useState } from 'react';

function Card({data,setdata,name,index,isPurchased}) {

    const [isChecked, setIsChecked] = useState(isPurchased);  

    const deleteHandler = ()=>{
      setdata((prevState)=>{
          const data = [...prevState];
  
          data.splice(index, 1)
  
          return data
      })
      
    }
    
  return (
    <>
       <div className="flex w-64 px-2 items-center justify-between gap-1 mt-3 ">
             <input type='checkBox'
             checked={isPurchased ? true : false}
             onChange={(e)=>{setIsChecked((prevValue)=>!prevValue)
                setdata((prevState)=>{
                    const data = [...prevState]

                    data[index].purchased = !isPurchased;

                    return data
                })
             }} 
             >
            
             </input>
             <p style={{
                    textDecoration : isPurchased ? 'line-through' : 'none'
                }}>{name}</p>
             <button 
             onClick={deleteHandler}
             className="bg-orange-500 px-2 rounded-md text-white">Delete</button>
       </div>
    </>
  )
}

export default Card