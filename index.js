import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import mongoose from 'mongoose'
dotenv.config()

// Import the routes
import mealDataRoutes from './routes/mealData.route.js'
import selectedMealRoute from './routes/selectedMeal.route.js'
import userRoutes from './routes/user.route.js'
// import instructionDataRoutes from './routes/instructionData.js'
// import usersRoutes from './routes/users.js'
// import sessionsRoutes from './routes/sessions.js'


const app = express()

app.use(cors())
app.use(express.json())

app.use('/', selectedMealRoute)
app.use('/meals', mealDataRoutes)
app.use('/user', userRoutes)
// app.use('/users')
// app.use('/sessions')
app.use('*', (req, res) => res.status(404).json({ error: "not found"}))

const port = process.env.PORT || 8000

mongoose.connect(
  process.env.BRAINSONBRIOCHE_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server running on port: ${port}`)))
  .catch((error) => console.log(error.message));
// app.listen(port, () => console.log(`Server running on port: ${port}`))

