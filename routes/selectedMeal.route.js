import express from "express";

import { getSelectedMealData } from '../controllers/selectMealController.js'

const router = express.Router()

router.route('/selectmeal').get(getSelectedMealData)

export default router