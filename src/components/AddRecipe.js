// AddRecipe Component
import React from "react";
import Input from "./Input.js";
import InputTags from "./InputTags.js";
import Select from "./Select.js";
import List from "./List.js";
import Text from "./Text.js";
import {useState, useEffect} from "react";
import { v4 as uuidv4 } from "uuid";

 

const AddRecipe = ({sendObjFunc, onClose}) => {
  const [objToSend, setobjToSend] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    keywords: [{id: "", label: ""}],
    instructions: "",
    ingredients: [{id: "", label: ""}],
    dishType: "",
    recipeImg: ""
  });

  useEffect(() =>{
    console.log(objToSend);
  },[objToSend])

  return <div className="add-recipe">
  <h2>Add a Recipe</h2>
  <Input label="Title" onEnter = {(e) => {setobjToSend({...objToSend, title : e})}} isOnchange = {false} url=""/>
  <Input label="Description" onEnter = {(e) => {setobjToSend({...objToSend, description : e})}} isOnchange = {false} url=""/>
  <InputTags label = "Keywords" onDelete ={(id) => {setobjToSend({...objToSend, keywords : objToSend.keywords.filter((el) => el.id != id) })}} onEnter = {(e) => {setobjToSend({...objToSend, keywords : [...objToSend?.keywords, {id:uuidv4(), label:e}]})}} keywordsList = {[...objToSend.keywords]}/>
  <Select label ="Type" handleSelectChange = {(event) => setobjToSend({...objToSend, dishType: event.target.value})}/>
  <Input label="Image Url" onEnter = {(e) => {setobjToSend({...objToSend, recipeImg: e})}} isOnchange = {false} url=""/>
  <List label="Ingredients" onDelete ={(id) => {setobjToSend({...objToSend, ingredients : objToSend.ingredients.filter((el) => el.id != id) })}} onEnter = {(e) => {setobjToSend({...objToSend, ingredients : [...objToSend?.ingredients, {id:uuidv4(), label:e}]})}} keywordsList = {[...objToSend.ingredients]}/>
  <Text label="Instructions" onEnter = {(e) => {setobjToSend({...objToSend, instructions: e})}}/>
  <div className="buttons">
    <button className="btn small-btn" onClick = {() => 
     { let res = true; 
        Object.entries(objToSend).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            if (value.length === 0 || value.some(item => item.id === "")) {
              // Handle empty array case
              res = false;
            }
          } else if (value === "") {
            res = false;
          }
      })
      console.log(objToSend);
      res? sendObjFunc(objToSend) : console.log("Error");
     return onClose();
    }
    }>Save</button>
    <button className="btn btn-black small-btn" onClick={onClose}>Exit</button>
  </div>
</div>;
};

export default AddRecipe;
