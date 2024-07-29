import React from "react";

function Tutorial_css( ) {
    return (
    <>
        <div className=" relative max-w-screen-lg h-screen border-red-500 border-4 bg-cyan-100 rounded-lg m-0 pl-7" > 
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  w-[200px] h-[200px] bg-black boreder-3 border-green-600 rounded-[4px] "></div>
            
        </div>
        <div className=" flex justify-center items-center w-full min-h-screen bg-[#DFD3C3] p-4 gap-2">
            <div className=" w-[200px] h-[200px]  bg-[#987D9A] rounded-md"></div>
            <div className=" w-[200px] h-[200px]  bg-[#987D9A] rounded-md"></div>
           
        </div>
        <div className=" flex flex-col justify-between items-center w-full min-h-screen bg-[#DFD3C3] p-4 gap-2">
            <div className=" w-[150px] h-[150px]  bg-[#987D9A] rounded-md"></div>
            <div className=" w-[150px] h-[150px]  bg-[#987D9A] rounded-md"></div>
           
        </div>
        <div className=" flex  flex-col justify-center items-center p-6 w-full h-screen bg-gradient-to-br to-[#12e4f4] from-[#94bbe9] via-[#fd1d1d]  ">
         <h1 className="opacity-50 text-[50px] font-bold ">RAHUL KUMAR GIRI</h1>
         <p className="text-green-900 font text-center font-['tomato_grotesk'] capitalize leading-10 tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus quos beatae qui similique atque recusandae corrupti amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis! Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex justify-center items-center w-full h-screen bg-zinc-400">
            <div className="w-[150px] h-[150px] bg-red-300 rounded-2xl hover:bg-zinc-400 ease-[cubic-bezier(0.5, 0, 0.75, 0)] duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"></div>
        </div>
    </>
    )
}

export default Tutorial_css;