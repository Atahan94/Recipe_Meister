// Text Component
import React from "react";


const Text = ({label, onEnter}) => {
  return  <div className="text-box">
    <span className="label">{label}</span>
    <textarea onKeyDown={(e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onEnter(e.target.value);
    }
  }}></textarea>
  </div>;
};

export default Text;
