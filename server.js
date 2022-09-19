import express from "express";
import cors from "cors";

// Import the routes
import mealDataRoutes from './routes/mealData.route.js'
// import instructionDataRoutes from './routes/instructionData.js'
// import usersRoutes from './routes/users.js'
// import sessionsRoutes from './routes/sessions.js'


const app = express()

app.use(cors())
app.use(express.json())

app.use('/meals', mealDataRoutes)
// app.use('/instructions')
// app.use('/users')
// app.use('/sessions')
app.use('*', (req, res) => res.status(404).json({ error: "not found"}))


export default app;