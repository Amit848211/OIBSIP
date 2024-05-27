import axios from 'axios';
import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function App() {
  const [url, setUrl] = useState()
  const [shortendUrl, setShortenedUrl] = useState('')

  const apikey="6a8ede9a22933ec80932f964fae39f485aea45a6";

  const shortenUrl = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api-ssl.bitly.com/v4/shorten',{
        "long_url":url,
      },{
        headers:{
          "Content-Type":"application/json",
          "Authorization":apikey,
        }
      })
     
      setShortenedUrl(response.data.id);
    } catch (e) {
      alert(e);
    }
};




  return (
    <div className="flex justify-center pt-20">
      <div >
        <h2 className='text-3xl font-semibold ml-10'>URL shortener</h2>
        {/* form to enter URL to be shortened */}
        <form  className='flex mt-8' onSubmit={shortenUrl}>
          <input
          className='pl-1 ocus:outline-none border-[2px] border-gray-600 h-8 rounded-none'
            placeholder='Enter URL'
            value={url}
            onChange={(e) => setUrl(e.target.value)}/>
          <button className='bg-[#56AFF8] text-white w-20 h-8'>Submit</button>
        </form>
        {/* Section to view shortened URLS */}
        {shortendUrl &&
          <div className='mt-5 border-[2px] flex  items-center border-gray-600 h-8 pl-2'>
            {shortendUrl}

            <CopyToClipboard text={shortendUrl}>
            <button className='bg-green-500 text-white px-2 h-8 ml-[170px]' onClick={() => alert("The URL has been copied")}>copy</button>
          </CopyToClipboard>



          </div>
        }
      </div>
    </div>
  );
}
export default App;