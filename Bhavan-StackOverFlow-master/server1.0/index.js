import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"

const app = express();
dotenv.config();
app.use(express.json({ limt: "30mb", extended: true }));
app.use(express.urlencoded({ limt: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a Bhavna stack Overflow clone API");
});

const PORT = process.env.PORT || 5000;

const DATABASE_URL = "mongodb+srv://Bhavna:Mongo@stack-overflow-clone.brwvkdc.mongodb.net/?retryWrites=true&w=majority"

mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
