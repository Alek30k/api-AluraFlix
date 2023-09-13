import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import videoRoutes from "./routes/videos.js";
import categoryRoutes from "./routes/videos.js";

dotenv.config();

const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://Alek30k:aleisa562196@cluster0.xxdbz30.mongodb.net/alauraflix?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

const app = express();
app.use(express.json());

app.use(cors());

app.use("/api/video", videoRoutes);
app.use("/api/category", categoryRoutes);

app.listen(8800, () => {
  connect();
  console.log("backend corriendo");
});
