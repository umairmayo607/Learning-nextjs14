import { trace } from "console";
import React from "react";

function track() {
  alert("Why you clicking me?Are you in your senses?");
}
const Button = () => {
  return (
    <div>
      <button onClick={track}>I'm Button</button>
    </div>
  );
};

export default Button;
