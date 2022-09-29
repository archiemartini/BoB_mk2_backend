import express from "express";

import { getMealData } from '../controllers/mealDataController.js'

const router = express.Router()

router.route('/meals').post(getMealData)

export default router