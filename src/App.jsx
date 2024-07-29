//to run react file we nedd - npm run dev
// import React from "react";
// import Navbar from "./Components/Navbar";
// import Body from "./Components/Body";
// import Head from "./Components/Head";
// import Card from "./Components/Card.jsx";
// import Test from "./Components/Test.jsx"
// function App() {
//   return (
//     <div>
//       <Head />
//       <Body />
//       <Navbar />

//       <h1>This is a heading</h1>
//       <Test />
//       <Card />
//     </div>
//   );
// }

// export default App;

//2nd

// import React from "react";
// import Card from "./Components/Card.jsx";

// function App() {
//   return (
//     <div>
//       <Card />
//     </div>
//   );
// }

// export default App;

///4th
// import React from 'react'

// function App() {
//   const data = ["Harsh", "Harsh Sharma", "Rahul", "Rakul"];
//   //console.log("Hello!");
//   //const data2 = 13;
//   const data1="rahul";
//   return (
//     <div>
//       {/* {data} {data1}  */}
//       {data.map((elem,index) => <h1 key={index}> {elem} </h1>)}
//     </div>
//   )
// }

// export default App

/// 4th

// import React from "react";

// function App() {
//   const data = ["Harsh", "Harsh Sharma", "Rahul", "Rakul"];

//     // <div>
//     //   {data.map((elem, index) => (
//     //     <div key={index} className="px-3 py-4 bg-blue-300 rounded-md w-fit">
//     //       {elem}
//     //     </div>
//   //     ))}
//   //   </div>

//   return (
//     <div>
//       {data.map((elem,index) => (
//         <div key={index} className="px-3 py-4 bg-blue-300 rounded-md w-fit">
//           {elem}
//         </div>
//       ))}
//     </div>

//   )
// }

// export default App;

//  5th

import React, { useState } from "react";
import Body from "./Components/Body";
import Head from "./Components/Tutorial_css";
import Card from "./Components/Card";
import Song from "./Components/Song";

///1st

// function App() {

//   const [val , setval] = useState(100) /// this always returns a array

//   return (
//     <>
//     <div>

//       <h1>{val}</h1>
//       <button onClick={() => setval(prev=>prev+1)} className='bg-blue-500 rounded-xl text-center mx-1 text-sm px-2'>click to change</button>
//       <button onClick={() => setval(val+100)} className='bg-blue-500 rounded-xl text-center mx-1 text-sm px-2'>click to + 100 </button>
//     </div>

//     </>

//   )
// }

///2nd

// function App() {
//   const [val, setval] = useState({ name: "Rahul", age: 45 }); /// this always returns a array

//   return (
//     <>
//       <div>
//         <h1> </h1>
//         <button
//           onClick={() =>{ setval({...val  , age : 23})
//           console.log(val)}}
//           className={`bg-blue-500 rounded-xl text-center mx-1 text-sm px-2`}
//         >
//           click to change
//         </button>
        
//       </div>
//     </>
//   );
// }

///4th

// function App() {
//   const [val, setval] = useState({ name: "Rahul", age: 45 }); /// this always returns a array

//   return (
//     <>
//       <div>
//         <h1> </h1>
//         <button
//           onClick={() =>{ setval({...val  , gender : 'maleee'})
//           console.log(val)}}
//           className={`bg-blue-500 rounded-xl text-center mx-1 text-sm px-2`}
//         >
//           click to change
//         </button>
        
//       </div>
//     </>
//   );
// }



// function App() {

// const [val , setval] = useState({name: "Rahul" , isBanned :false}) /// this always returns a array

//   return (
//     <>
//     <div>

//       <h1>name : {val.name}</h1>
//       <h1>isBanned : {val.isBanned.toString()}</h1>
//       <button onClick={()=> setval({...val , isBanned:!val.isBanned})} className={`${val.isBanned ? "bg-blue-400" : "bg-red-500" } rounded-xl px-2 text-sm`}>Click</button>

//     </div>

//     </>

//   )
// }




// function App() {
//   const [val, setval] = useState([1,2,3,4,5,6,7]); /// this always returns a array

//   return (
//     <>
//       <div>
//         {val.map(item => <h1>{item}</h1>)}
//         <button onClick={()=> setval (() => val.filter ((item ,index ) => index !=val.length-1))} className="rounded-lg bg-blue-500 text-sm "> click</button>
//       </div>
//     </>
//   );
// }


// ///////removing 2nd index word
// function App() {
//   const [val, setval] = useState([1,2,3,4,5,6,7]); /// this always returns a array

//   return (
//     <>
//       <div>
//         {val.map(item => <h1>{item}</h1>)}
//         <button onClick={()=> setval(()=>val.filter((item,index)=> index !=2))} className="rounded-lg bg-blue-500 text-sm "> click</button>
//       </div>
//     </>
//   );
// }


///////removing item / 2

// function App() {
//   const [val, setval] = useState([1,2,3,4,5,6,7]); /// this always returns a array

//   return (
//     <>
//       <div>
//         {val.map(item => <h1>{item}</h1>)}
//         <button onClick={()=> setval(()=>val.filter(item => item % 2 !==0))} className="rounded-lg bg-blue-500 text-sm "> click</button>
//         <button onClick={()=> setval([...val , 8])} className="rounded-lg bg-blue-500 text-sm  m-4"> click to add 8</button>
//       </div>
//     </>
//   );
// }


// function App() {
//   const [val, setval] = useState(
//     [
//       {name:"Harsh", age:30},
//       {name:"Rahul", age:26},
//       {name:"Rakesh", age:28},
//     ]
//   ); 

//   return (

//     <div className="p-5">
//       {val.map((item ,index)=>(
//         <div key ={index}>
//           <h1>{item.name}</h1>
//           <h1>{item.age}</h1>
          
//         </div>
//       ))}
//       <button onClick={()=>setval(()=>val.map(item=>item.name === "Rahul" ? {name:"Rahul", age: 23} : item))} className="rounded-lg bg-blue-500 text-sm "> click to update

//       </button>
      
//     </div>
    
//   );
// }



function App() {
  

  return (
    <>
    <div>
      
      <Card/>
    </div>
    </>
    
  );
}

export default App;
