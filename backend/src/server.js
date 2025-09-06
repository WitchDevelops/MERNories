import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";

console.log("Starting server...");
console.log("Connecting to database...");

dotenv.config();

const app = express();
const PORT = process.env.PORT;
connectDb();

//middleware
app.use(express.json());

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
