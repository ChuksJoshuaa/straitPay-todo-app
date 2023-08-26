import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import rateLimiter from "express-rate-limit";

import { connectDB, configDb } from "./db/connect.js";

//Error imports
import notFound from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import { getUrl } from "./constant.js";

//Routes
import taskRoutes from "./routes/task.js";

const app = express();
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    configDb();
    await connectDB(getUrl());
    app.listen(port, () =>
      console.log(
        `Server is listening on port: ${port} and Url: ${getUrl()}...`
      )
    );
  } catch (error) {
    console.log(error);
  }
};

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Extra packages
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("Api working perfectly");
});
app.use("/api/v1/tasks", taskRoutes);

// Error handling
app.use(notFound);
app.use(errorHandlerMiddleware);

start();

export default app;
