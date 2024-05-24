import React from "react";
import { CloseFullscreen } from "@mui/icons-material";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";

function Editor({ language, name, color, symbol, value, setter, onchange }) {
  const style = {
    backgroundColor: color,
  };

  return (
    <>
      <div className="w-[505px] h-[350px] bg-zinc-900 flex flex-col">
        <div className="flex justify-between">
          <div className="mt-3 flex ml-3 gap-5 ">
            <p
              style={style}
              className="w-5 h-5 flex items-center justify-center  text-[14px] font-bold rounded-md text-gray-900"
            >
              {symbol}
            </p>
            <h1 className="-mt-1 font-bold text-gray-400">{language}</h1>
          </div>
          <div className="w-[300px] h-12 bg-black flex items-center justify-end pr-5">
            <CloseFullscreen className="text-white" />
          </div>
        </div>
        <div>
        <CodeMirror
        value={value}
        height="342px"
        theme="dark"
        extensions={[name(true)]}
        onChange={onchange}
      />
        </div>
      </div>
     
    </>
  );
}

export default Editor;
