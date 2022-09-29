import axios from "axios";
import dotenv from 'dotenv';
dotenv.config()

const fetchSelectedMealApi = (data) => {
  console.log(data)
  const options = {
    method: 'GET',
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${data}/information`,
    headers: {
      'X-RapidAPI-Key': process.env.X_RAPIDAPI_AUTHKEY,
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  
  const selectedMeal =  axios.request(options).then(function (response) {
    return(response.data);
  }).catch(function (error) {
    console.log(error.message);
  });


  return selectedMeal


  
  // const options = {
  //   method: 'GET',
  //   url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
  //   params: {
  //     ingredients: input,
  //     number: '25',
  //     ignorePantry: 'true',
  //     ranking: ranking
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': process.env.X_RAPIDAPI_AUTHKEY,
  //     'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  //   }
  // };
  
  // const recipes = axios.request(options).then(function (response) {
  //   return(response.data);
  // }).then().catch(function (error) {
  //   console.error(error);
  // });

  // return recipes
}

export default fetchSelectedMealApi;