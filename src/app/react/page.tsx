"use client"
import React from "react";
import Button from "../../../component/ReactLearning/button";
import AboutPage from "../../../component/ReactLearning/aboutpage";
const Reactjs = () => {
  const user = {
    name: "umair",
    role: "developer",
  };

  return (
    <div>
      React Lerning
      <div className="flex-col flex gap-2">
        <Button />
      </div>
      <div className="flex-col flex gap-2">
        <AboutPage />
      </div>
      <div>
        User Name: {user.name}
        User Role: {user.role}
      </div>
    </div>
  );
};

export default Reactjs;
