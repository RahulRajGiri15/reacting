// import React, { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";

// function Card() {


  ////////////1st project

  // const data =[
  //   {Image:'https://images.unsplash.com/photo-1704204656144-3dd12c110dd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9uJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D',
  //      Name:'Amazon',
  //       Description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, saepe! Lorem, ipsum dolor.',
  //     instock:true},
  //   {Image:'https://images.unsplash.com/photo-1621768216002-5ac171876625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlfGVufDB8fDB8fHww', 
  //     Name:'Apple',
  //    Description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, saepe! Lorem, ipsum dolor.',
  //   instock:false},
  //   {Image:'https://plus.unsplash.com/premium_photo-1661423616067-abfd050798a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXZlcnlkYXklMjB1c2UlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D',
  //      Name:'Everyday products',
  //      Description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, saepe! Lorem, ipsum dolor.',
  //     instock:true}
  // ]
  // const handleclick =()=>{alert("hey");}
  // return (
  //   <div className='w-full h-screen flex items-center justify-center  gap-10 bg-zinc-400 '>  
    
  //     {data.map((elem ,index)=>(
  //       <div  key={index} className="w-48 min-h-60 rounded-lg bg-zinc-100 overflow-hidden ease-[cubic-bezier(0.5, 0, 0.75, 0)] duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]" >
  //       <div className="w-full h-32  ">
  //         <img className="w-full h-full object-cover" src={elem.Image} alt="" />
  //       </div>
  //       <div className="w-full px-4 py-3 bg-[#929391]">
  //         <h2 className="font-semibold">{elem.Name}</h2>
  //         <p className="text-xs mt-3 text-center">{elem.Description}</p>
  //         <button onClick={handleclick} className= {` rounded-full ${elem.instock ? "bg-blue-600" : "bg-red-600"} text-xs px-2 py-0 mt-2 ml-0 font-semibold text-zinc-100 ease-[cubic-bezier(0.5, 0, 0.75, 0)] duration-300 hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]`}>
  //           {elem.instock ? "Instock" :"out of stock" }</button>
  //       </div>
  //     </div>
  //     ))}
     
      
          
  //     </div>
  //   )

  // };




  ////////////2nd method //////////


    //   <div className='w-full h-screen flex items-center justify-center  gap-10 bg-zinc-400 '>  
    //   {/* <div className='w-52 bg-zinc-100 rounded-md overflow-hidden'>
    //     <div className='w-full h-32 bg-zinc-300'>
    //         <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1704204656144-3dd12c110dd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9uJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
    //     </div> */}
    //     {/* <div className="w-full px-3 py-4">
    //       <h2 className="font-semibold">Amazon Basics</h2>
    //       <p className="text-xs mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptate nulla voluptas iste provident labore dolorum.</p>
    //     </div> */}
      
    //   {/* </div> */}
      

    ///2nd method
    //       <div className="w-48 min-h-60 rounded-lg bg-zinc-100 overflow-hidden" >
    //         <div className="w-full h-32  ">
    //           <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1704204656144-3dd12c110dd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9uJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
    //         </div>
    //         <div className="w-full px-4 py-3 bg-[#929391]">
    //           <h2 className="font-semibold">Amazon Basics</h2>
    //           <p className="text-xs mt-3 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, saepe! Lorem, ipsum dolor. </p>
    //         </div>
    //       </div>
         
    // </div>


    
    //////////3rd  programm -- only two images can be displayed at once -- (because the condition is true and false)

    import React, { useState } from "react";
    import { FaArrowRight } from "react-icons/fa";
    
    function Card() {
    

    const [val, setval] = useState(false)

  return(
    <div className="w-full h-screen bg-zinc-700 flex justify-center items-center">
      <div className=" relative w-60 h-32 bg-zinc-500 rounded-2xl flex overflow-hidden" >
        <img className= {`transition-transform duration-1000 shrink-0 w-full h-full ${val ===false ? "-translate-x-[0%]" :"-translate-x-[100%]"} object-cover  `} src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className= {`transition-transform duration-1000 shrink-0 w-full h-full ${val ===false ? "-translate-x-[0%]" :"-translate-x-[100%]"} object-cover  `} src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className= {`transition-transform duration-1000 shrink-0 w-full h-full ${val ===false ? "-translate-x-[0%]" :"-translate-x-[100%]"} object-cover  `} src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className= {`transition-transform duration-1000 shrink-0 w-full h-full ${val ===false ? "-translate-x-[0%]" :"-translate-x-[100%]"} object-cover  `} src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className= {`transition-transform duration-1000 shrink-0 w-full h-full ${val ===false ? "-translate-x-[0%]" :"-translate-x-[100%]"} object-cover  `} src="https://images.unsplash.com/photo-1508669232496-137b159c1cdb?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className= {`transition-transform duration-1000 shrink-0 w-full h-full ${val ===false ? "-translate-x-[0%]" :"-translate-x-[100%]"} object-cover  `} src="https://images.unsplash.com/photo-1491147334573-44cbb4602074?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className= {`transition-transform duration-1000 shrink-0 w-full h-full ${val ===false ? "-translate-x-[0%]" :"-translate-x-[100%]"} object-cover  `} src="https://images.unsplash.com/photo-1482784160316-6eb046863ece?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        <span onClick={()=>{setval(()=> !val)}} className="   w-8 h-8  flex items-center justify-center rounded-full bg-[#dadada7b] absolute bottom-0 left-1/2 -translate-x-[50%] -translate-y-[50%]">
           <FaArrowRight size={"0.9em"} />
        </span>
       
      </div>
    </div>
  )
    
  


}
export default Card;





// /////////4th program -- to display  many images
// import React, { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";

// function Card() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1508669232496-137b159c1cdb?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1491147334573-44cbb4602074?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1482784160316-6eb046863ece?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   ];

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <div className="w-full h-screen bg-zinc-700 flex justify-center items-center">
//       <div className="relative w-60 h-32 bg-zinc-500 rounded-2xl flex overflow-hidden">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             className={`transition-transform duration-100 shrink-0 w-full h-full ${
//               index === currentIndex
//                 ? "translate-x-0"
//                 : index > currentIndex
//                 ? "translate-x-full"
//                 : "-translate-x-full"
//             } object-cover`}
//             src={image}
//             alt=""
//           />
//         ))}
//         <span
//           onClick={handleNext}
//           className="w-8 h-8 flex items-center justify-center rounded-full bg-[#dadada7b] absolute bottom-0 left-1/2 -translate-x-[50%] -translate-y-[50%] cursor-pointer"
//         >
//           <FaArrowRight size={"0.9em"} />
//         </span>
//       </div>
//     </div>
//   );
// }

// export default Card;
