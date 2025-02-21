import express from "express";
import mongoose from "mongoose";
import userRoutes from "./Routes/userRoutes.js";
import channelRoutes from "./Routes/channelRoutes.js";
import videoRoutes from "./Routes/videoRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

console.log("MongoDB URI:", MONGO_URI ? "Loaded" : "Not Found");
console.log("JWT Secret:", JWT_SECRET ? "Loaded" : "Not Found");

const app = express();
app.use(express.json());
app.use(cors());
const userRouter = express.Router();
const channelRouter = express.Router();
const videoRouter = express.Router();

app.use("/user", userRouter);
app.use("/channel", channelRouter);
app.use("/videos", videoRouter);

userRoutes(userRouter);
channelRoutes(channelRouter);
videoRoutes(videoRouter);

app.listen(5100, () => {
  console.log("server is running port 5100");
});

mongoose.connect(MONGO_URI);
const db = mongoose.connection;

db.on("open", () => {
  console.log("connection successful");
});

db.on("error", () => {
  console.log("Error in connection");
});
