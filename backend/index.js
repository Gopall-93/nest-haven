import express, { json, urlencoded } from "express";
import { route } from "./Routes/routes.js";
import { main } from "./config/mongoose.config.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { globalErrorHandler } from "./errorhandlers/globalErrorhandler.js";

dotenv.config();

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

app.listen(3000, () => {
  console.log(`App is listening at http://localhost:3000`);
  main();
});

app.use(route);
app.use(globalErrorHandler);
