import React from "react";

function RecipeItem({ recipe, deleteRecipes }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt=""/>
      </td>
      <td>
        <p className="content_td">{recipe.ingredients}</p>
      </td>
      <td>
        <p className="content_td">{recipe.preparation}</p>
      </td>
      <td>
      <button name="delete" onClick={deleteRecipes}>
        Delete
      </button>
      </td>
    </tr>
  );
}

export default RecipeItem;
