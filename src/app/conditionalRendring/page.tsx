"use client";
import React, { useState } from "react";
import Conditionalrendring from "../../../component/conditionalRendring";
let arr = [0, 1, 2, 3, 4, 5];
const ConditionalRendring = () => {
  const [show, setshow] = useState(true);
  const isLogged = true;
  return (
    <div className="text-center">
      <h1 className="text-center text-green-500 font-bold text-3xl">
        Conditional Rendring
      </h1>

      {arr.map((item, index) => {
        return <div>{item}</div>;
      })}

      {show ? (
        <Conditionalrendring />
      ) : (
        <h3>This content is showing for False statement</h3>
      )}
      {isLogged && <div>I am And conditionRendring</div>}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setshow(!show)}
      >
        Click Here For Rendring
      </button>
    </div>
  );
};

export default ConditionalRendring;
