"use client";
import React, { useState } from "react";

export default function onChange() {
  const [changeVal, setChangeVal] = useState("");
  const [radioVal, setRadioVal] = useState("");
  return (
    <div className="flex justify-center items-center flex-col p-25">
      <h1 className="text-[36px] mb-6 text-green-500">On_Change Handler</h1>

      <input
        type="text"
        value={changeVal}
        placeholder="Write here what you want..."
        className="text-[36px] border-green"
        onChange={(e) => setChangeVal(e.target.value)}
      />
      <br />
      <label>
        <input
          type="radio"
          name="country"
          value="Pakistan"
          onChange={(e) => setRadioVal(e.target.value)}
        />
        {""}
        Pakistan
      </label>
      <label>
        <input
          type="radio"
          name="country"
          value="India"
          onChange={(e) => setRadioVal(e.target.value)}
        />
        {""}
        India
      </label>
      <br />
      <p className="text-blue-500 text-[36px]">
        {changeVal} {radioVal}
      </p>
    </div>
  );
}
