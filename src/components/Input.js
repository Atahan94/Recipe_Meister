// Input Component
import React from "react";

const Input = (props) => {
  return <div className="input-box">
   <span className="label" for= "recipeInput">{props.label}</span>
   {props.isOnchange? (<input name="recipeInput" onChange={(e) => {props?.onInput(props.url+e.target.value)}}/>) : (<input onKeyDown={(e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      props.onEnter(e.target.value);
    }
  }}/>)}
  </div>;
};

export default Input;
