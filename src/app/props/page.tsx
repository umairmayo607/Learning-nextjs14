import React from "react";
import PropsTest from "../../../component/propsTest";
const props = () => {
  return (
    <div>
      <h1 className="text-green-800 text-4xl text-center">Props</h1>
      <h1 className="text-orange-800 ">
      <PropsTest name="Umair" cast="Mayo"/>
      <PropsTest name="shoaib" cast="Mayo"/>
      <PropsTest name="Zeeshan" cast="Mayo"/>
      <PropsTest name="Nasir" cast="Mayo"/>
      <PropsTest name="Basit" cast="Mayo"/>
      </h1>
      
    </div>
  );
};
export default props;
