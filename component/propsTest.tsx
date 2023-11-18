import React from "react";

const PropsTest = ({name,cast}: {name:string,cast:string}) => {
 
  return <div> 
    
    <h3 className="text-center">{`Hello ${name} ${cast}`}</h3>
  </div>;
};

export default PropsTest;
