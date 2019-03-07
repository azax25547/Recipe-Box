import React from "react";
// import EditRecipe from "./EditRecipe";

export default function ViewRecipe({ recipeName, ingredients, directions }) {
  let ingredient = ingredients.map((v, i) => {
    return (
      <li key={i} className="lead">
        {v}
      </li>
    );
  });
  let direction = directions.map((v, i) => {
    return (
      <li key={i} className="lead">
        {v}
      </li>
    );
  });
  return ingredient.length > 0 ? (
    <>
      <div className="recipe-name">
        <h1>
          {recipeName}
          {/* <EditRecipe name={recipeName} ing={ingredients} des={directions} /> */}
        </h1>
      </div>
      <h3>Ingredients: </h3>
      <ol>{ingredient}</ol>
      <br />
      <h3> Directions: </h3>
      <ul>{direction}</ul>
    </>
  ) : (
    <p className="text-warning text-center p-2 display-4">
      Click the above Dishes to see their Info
    </p>
  );
}
