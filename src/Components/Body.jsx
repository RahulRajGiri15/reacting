import React, { useState } from "react";

function Body( ) {
    const [val , setval] = useState(true);

   return(
    <div>
        <h1>val : {val == false ? "Mat jaoo " :"Jaoo Jaoo"}</h1>
        <button onClick={()=>setval(!val)} className="bg-blue-400 rounded-2xl">click</button>

    </div>
   )
}

export default Body;