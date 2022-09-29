import fetchSelectedMeal from '../api/selectMealApi.js'

export const getSelectedMealData = (req, res) => {
  fetchSelectedMeal(req.query.id)
  .then(response => res.send(response))
}
