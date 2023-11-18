"use client";
import React from "react";
import { useState } from "react";

export default function ReactHook() {
  const [name, setName] = useState("Muhammad Umair");
  const [age, setAge] = useState(20);

  const clickButton = () => {
    setName("Zeshan Liaqat");
    setAge(23);
  };

  return (
    <div>
      <h1 className="bg-green-200 text-center">Use State</h1>
      <h1 className="bg-green-200 text-center">React Hook</h1>
      <p className="bg-orange-200">
        Age of {name} is {age}
      </p>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={clickButton}
      >
        Click Me
      </button>
      <br />
      <a href="/useEffect">Go to useEffect Page</a>
    </div>
  );
}
