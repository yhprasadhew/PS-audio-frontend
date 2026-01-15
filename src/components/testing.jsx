import { useState } from "react";
export default function Testing() { 

    const [count,setCount] = useState(0)
     

    
    return( 
        <div className = "w-full h-screen flex flex-col items-center justify-center bg-slate-300">
            <h1 className = "text-2xl font-bold">{count}</h1>
            <button  className= "w-[200px] h-[60px] bg-black text-3xl text-white rounded-lg"  onClick={() => {
                const newCount = count + 1;
                setCount(newCount);
            }}>

                Increment
            </button>

        </div>
    )}



