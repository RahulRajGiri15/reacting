import React from 'react'

function Song() {
    const data = [
        {name:"chnaa mere ya " ,
             description:"aye mere ya dil ke chain chain aa mere dil dua kijye " },
        {
            name:"dil se kuchh gaya",
            description:"dil se kuchh gaya kaise na hoon kaise na hoon"
        }
    ]
  return (
    <div className='w-full h-screen bg-zinc-500 flex  flex-col justify-center items-center gap-10 rounded-lg'>
        {data.map((elem,index)=>(
            <div className='w-60 min-h-20 bg-[#DFD3C3] rounded-xl'>
                <div className='w-full min-h-5'>
                    <h1 className='font-semibold pl-3'>{elem.name}</h1>
                <p className='text-xs text-center py-2'>{elem.description}</p>
                <button onClick={()=>alert("Your Song is Downloading")} className='bg-blue-600 rounded-xl text-xs ml-4 pb-1 font-semibold px-1  mb-1'>Download Now</button>
                </div>
                
            </div>
        ))}
         
    
     
    </div>
  )}


export default Song
