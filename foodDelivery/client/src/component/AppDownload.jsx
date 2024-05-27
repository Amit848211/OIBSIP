import React from 'react'
import { assets } from '../assets/assets'

function AppDownload() {
  return (
    <>
        <div id='downloadApp' className="mt-32 mb-20 flex flex-col items-center justify-center">
            <p className="text-4xl font-semibold text-center opacity-90">For Better experience Download<br/>Tomato App</p>
            <div className="flex mt-4 gap-5">
                <img src={assets.play_store}
                className="w-40 h-14 hover:scale-105"
                ></img>
                <img src={assets.app_store}
                className="w-40 h-14 hover:scale-105"
                ></img>
            </div>
        </div>
    </>
  )
}

export default AppDownload