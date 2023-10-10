import icons from "../img/icons.svg"
import { ingredientList } from "./ingredientList";
import { recipeDetailsMarkup } from "./recipe";
import { renderSpinner } from "./spinner";

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


async function showRecipe(url) {
  renderSpinner(recipeContainer)
  const response = await fetch(url)
  
  const { data } = await response.json()
  
  const { recipe } = data
  
  return (recipe)
}

const URL_API = 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
showRecipe(URL_API)
.then((recipe) => {
  // Colocamos el HTML
    recipeContainer.insertAdjacentHTML('afterbegin', recipeDetailsMarkup(recipe))
    recipeContainer.insertAdjacentHTML('afterbegin', ingredientList(recipe))
    console.log(recipe);
  })
  .catch((er) => {
    console.error('URL mal', er)
  })
