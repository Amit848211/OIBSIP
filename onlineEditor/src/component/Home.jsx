import React, { useCallback,  useState } from 'react'
import Editor from './Editor'



import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import Result from './Result';

function Home() {

  const[html1,setHtml]=useState("")
  const[css1,setCss]=useState("")
  const[javascript1,setJs]=useState("")


  const onChangeHtml = useCallback((value) => {
    setHtml(value);
  }, []);

  //* Css onchange handler 
  const onChangeCss = useCallback((value) => {
    setCss(value);
  }, []);

  //* JavaScript onchange handler 
  const onChangeJavaScript = useCallback((value) => {
    setJs(value);
  }, []);


       const result=
       `
       <htm>

       <body>${html1}</body>
       <style>${css1}</style>
       <script>${javascript1}</script>
       </htm>
       
       `


  return (
   <>
   <div className='flex justify-between'>
    <Editor language="html" name={html} symbol="/" color="red" value={html1} setter={setHtml}  onchange={onChangeHtml}/>
    <Editor  language="css"  name={css} symbol="*" color="blue" value={css1} setter={setCss}  onchange={onChangeCss}/>
    <Editor  language="js"  name={javascript} symbol="{}" color="yellow" value={javascript1} setter={setJs} onchange={onChangeJavaScript} />
   </div>
    <div className='w-full h-[200px] mt-10'>
      <Result Result={result} />
    </div>
   </>
  )
}

export default Home