import app from "./server.js";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT || 8000

mongoose.connect(
  process.env.BRAINSONBRIOCHE_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server running on port: ${port}`)))
  .catch((error) => console.log(error.message));