import React from 'react'

function Result( {Result} ) {
    return (
        <div>
            <div className="bg-[#282c34] p-4 shadow mt-10 ">
                <h2
                    className="text-lg font-semibold mb-2 text-white">
                   Result
                </h2>
                <iframe
                    className="w-full h-[240px] border border-gray-700 rounded-md"
                    srcDoc={Result}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                >
                </iframe>
            </div>
        </div>
    )
}

export default Result