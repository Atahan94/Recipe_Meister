// Select Component
import React from "react";

const Select = ({label, handleSelectChange}) => {
    

  return <div className="select-list">
  <span className="label">{label}</span>
  <select onChange={handleSelectChange}>
    <option disabled selected>Select</option>
    <option>Vegetarian</option>
    <option>Vegan</option>
    <option>Meat</option>
    <option>Poultry</option>
    <option>Seafood</option>
  </select>;
  </div>
};

export default Select;
