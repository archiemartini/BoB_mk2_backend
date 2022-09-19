import fetchMealData from '../api/mealDataApi.js'

export const getMealData = (req, res) => {
  fetchMealData(req.body.search, req.body.ranking)
  .then(response => res.send(response))
}
