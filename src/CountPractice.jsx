import React, { useEffect, useState } from "react"


const CountPractice = () => {

    //useState() => state li manage garxa/change garxa
    const [count, setCount] = useState(0)    //setCount bata number set garne tesli show garnu count use hunxa

    //useEffect
    useEffect(()=>{
        console.log("Button Clicked")
        console.log("State Changed")
    })

    return(
        <>
            <h1 className="text-2xl bg-blue-500">Hello React </h1>

            <div className="flex justify-center mt-8">
                <button onClick={()=>setCount(count+1)} className="px-3 py-3 rounded-2xl bg-green-300">Increase</button>
                <h1 className="text-2xl">{count}</h1>
                <button onClick={()=>setCount(count-1)} className="px-3 py-3 rounded-2xl bg-red-300">Decrease</button>
            </div>
        </>
    )
}

export default CountPractice