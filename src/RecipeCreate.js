import React, { useState } from "react";

function RecipeCreate({createRecipes}) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleNameChange = (event) => setName(event.target.value);

  const handleCuisineChange = (event) => setCuisine(event.target.value);

  const handlePhotoChange = (event) => setPhoto(event.target.value);

  const handleIngrediantsChange = (event) =>
    setIngredients(event.target.value);

  const handlePreparationChange = (event) =>
    setPreparation(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipes({name, cuisine, photo, ingredients, preparation});
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleNameChange}
                value={name}
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleCuisineChange}
                value={cuisine}
              />
            </td>
            <td>
              <input
                id="photo"
                type="text"
                name="photo"
                placeholder="URL"
                onChange={handlePhotoChange}
                value={photo}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                type="text"
                name="ingredients"
                placeholder="ingredients"
                onChange={handleIngrediantsChange}
                value={ingredients}
              ></textarea>
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                type="text"
                placeholder="preparation"
                onChange={handlePreparationChange}
                value={preparation}
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
