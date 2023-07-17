// List Component
import React from "react";

const List = ({label, onEnter, keywordsList, onDelete}) => {
  return <div className="list">
  <span className="label">{label}</span>
  <input type="text" placeholder="Type and press enter..." onKeyDown={(e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onEnter(e.target.value);
    }
  }}/>
  {keywordsList.map((item) => <div class="list-item" key = {item.id}>{item.label}<span class="rem-item-btn" onClick={() => {onDelete(item.id)}}>X</span></div>)}
</div>;
};

export default List;
