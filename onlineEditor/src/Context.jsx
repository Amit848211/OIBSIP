import React, { useState } from 'react'
import { createContext } from 'react'


export const DataContext = createContext();

const Context =({children})=> {

  const[html,setHtml]=useState("")
  const[css,setCss]=useState("")
  const[javascript,setJs]=useState("")



  return (
     <DataContext.Provider
        value={{
            html,
            setHtml,
            css,
            setCss,
            js,setJs
        }}>

        {children}
     </DataContext.Provider>
  )
}

export default Context