import express from "express";

import { getMealData } from '../controllers/mealDataController.js'

const router = express.Router()

router.route('/').post(getMealData)

export default router