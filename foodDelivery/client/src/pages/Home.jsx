import React, { useState } from 'react'
import {assets} from "../assets/assets"
import Header from '../component/Header'
import Menu from '../component/Menu'
import FoodDisplay from '../component/FoodDisplay'
import Footer from '../component/Footer'
import AppDownload from '../component/AppDownload'
function Home() {
  const[categary,setCatagery]=useState("All")
  console.log(categary);
   
  return (
    <>
        <div className="w-full h-full">
            <div className="w-full h-full">
            <Header />
            <Menu categary={categary} setCatagery={setCatagery} />
             <FoodDisplay categary={categary} setCatagery={setCatagery} />
             <AppDownload />
            </div>
        </div>
    </>
  )
}

export default Home