"use client";
import { useState, useEffect } from "react";

import React from "react";

export default function MainUseEffect() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("useEffect count1");
  },[count]);
  useEffect(() => {
    console.log("useEffect count2");
  },[count2]);

  return (
    <div>
      <h1 className="bg-green-200 text-center">UseEffect</h1>
      <h1 className="bg-green-200 text-center">React Hook</h1>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>
        Counter increment = {count}
      </button>
      <br />
      <br />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount2(count2 + 1)}>
        Counter increment = {count2}
      </button>
    </div>
  );
}
