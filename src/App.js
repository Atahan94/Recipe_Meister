import React from "react";

import Input from "./components/Input.js"
import AddRecipe from "./components/AddRecipe.js"
import RecipeCard from "./components/RecipeCard.js"
import Recipe from "./components/Recipe.js"
import {  useEffect, useReducer } from 'react';

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_RECIPES':
      return { ...state, recipies: action.payload };
    case 'SET_CUR_PAGE':
      return { ...state, curPage: action.payload };
    case 'SET_CUR_RECIPE':
      return { ...state, curRecipe: action.payload };
    default:
      return state;
  }
};

const initialState = {
  recipies: [],
  curPage: 'Recipies',
  curRecipe: 'None',
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchRes = async (re, obj= {}) => {
    if (Object.keys(obj).length !== 0) {
        const response = await fetch(`/api/${re}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
          });
          console.log("POST-RESPONSE" + response);
      } else {
        const res = await fetch(`/api/${re}`);
        const data = await res.json();
        dispatch({ type: 'SET_RECIPES', payload: Array.isArray(data) ? data : data.recipes });
      }
    
  };

  useEffect(() => {
    fetchRes('recipes');
  }, []);

  const { recipies, curPage, curRecipe } = state;

  return (
    <div className="recipe-meister">
      <h1>Recipe Meister</h1>
      {curPage === 'Recipies' && (
        <>
          <Input label="FIND RECIPES" onInput={fetchRes} isOnchange = {true} url = "recipe.title/" />
          <button className="btn btn-black" onClick={() => dispatch({ type: 'SET_CUR_PAGE', payload: 'AddRecipies' })}>
            Add a recipe
          </button>
          {recipies.map((item) => (
            <RecipeCard
              data={item}
              key={item.id}
              onCclick={() => {
                dispatch({ type: 'SET_CUR_RECIPE', payload: item });
                dispatch({ type: 'SET_CUR_PAGE', payload: 'Recipe' });
              }}
            />
          ))}
        </>
      )}
      {curPage === 'Recipe' && <Recipe
       recipeObj={curRecipe} 
       onClose={() => dispatch({ type: 'SET_CUR_PAGE', payload: 'Recipies' })} 
       />}
      {curPage === 'AddRecipies' && <AddRecipe 
      sendObjFunc = {(obj) =>{ fetchRes("recipes", obj)}}  
      onClose={() => dispatch({ type: 'SET_CUR_PAGE', payload: 'Recipies' })}
      />}
    </div>
  );
};

export default App;