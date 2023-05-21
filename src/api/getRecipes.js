import axios from "axios";

// const apiUrl =
//   "https://api.edamam.com/api/recipes/v2?type=public&app_id=e9329534&app_key=d3c5bf7d32590e7649f3f59d0e3414de&diet=balanced&mealType=Lunch&imageSize=SMALL&random=true&field=uri&field=label&field=image&field=url&field=ingredientLines";

const apiUrl2 =
  "https://api.edamam.com/api/recipes/v2?type=public&app_id=81885ef9&app_key=e5a165c5be09e110f5c701a9653ae8cf&diet=balanced&mealType=Lunch&imageSize=SMALL&random=true&field=uri&field=label&field=image&field=url&field=ingredientLines";
const getRecipes = async () => {
  try {
    const { data } = await axios.get(apiUrl2);
    return data.hits;
  } catch (error) {
    return console.log(error);
  }
};
export default getRecipes;
