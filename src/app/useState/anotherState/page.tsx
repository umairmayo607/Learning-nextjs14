"use client"
import {useState} from 'react'

const newFunction=()=>{
    const [text, setText]=useState("I am writing this text on my own behalf")
    const newText=()=>{
setText("you should read everything that helps you to achieve something in life")
    }
return(
    <div>
<p>{text}</p>
<button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={newText}
      >
        Change Text
      </button>
</div>
)
}
export default newFunction
