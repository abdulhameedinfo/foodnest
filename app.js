import  express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import noteRoutes from "./routes/notes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/notes", noteRoutes);

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch(err => {
        console.log(err);
    });

app.listen(3000, () => {
    console.log("Server Started");
});

