import axios from "axios";
import dotenv from 'dotenv';
import * as fs from 'fs'
dotenv.config()



const fetchMealDataApi = (input = 'apples,flour,sugar', ranking = '1') => {
  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
    params: {
      ingredients: input,
      number: '25',
      ignorePantry: 'true',
      ranking: ranking
    },
    headers: {
      'X-RapidAPI-Key': process.env.X_RAPIDAPI_AUTHKEY,
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  
  const recipes = axios.request(options).then(function (response) {
    return(response.data);
  }).then().catch(function (error) {
    console.error(error);
  });

  // const saveData = async (data) => {
  //   await data; 
  //   fs.writeFile('mealData.json', sData, (err) => {
  //     if (err) {
  //       throw err
  //     }
  //   })
  // }
  // saveData(recipes)
  return recipes
}

export default fetchMealDataApi