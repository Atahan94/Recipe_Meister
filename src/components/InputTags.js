// InputTags Component
import React from "react";

const InputTags = (props) => {
  return <div className="input-tags">
  <span className="label">{props.label}</span>
  <input type="text" placeholder="Type and press enter..." onKeyDown={(e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      props.onEnter(e.target.value);
    }
  }}/>
  {props.keywordsList.map((item) => <div class="inp-tag" key = {item.id}>{item.label}<span class="rem-tag-btn" onClick={() => {props.onDelete(item.id)}}>X</span></div>)}
  
</div>;
};

export default InputTags;
