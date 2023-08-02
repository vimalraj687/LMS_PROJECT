import express from "express";
import finalhandler from "finalhandler";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
// dotenv
import { config } from "dotenv";
import morgan from "morgan";
config();
const app = express();

// const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

// cookie handle
app.use(cookieParser());
// morgan
app.use(morgan("dev"));

//User Routing
app.use("/app/v1/user", userRoutes);

// ping
app.use("/ping", function (req, res) {
  res.send("/pong");
});

// routes of 3 modules
app.all("*", (req, res) => {
  res.status(404).send("OOPS !! 404 Page Not Found");
});

export default app;
