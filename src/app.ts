import express, { Request, Response } from "express";
import morgan from "morgan";
import path from "path";
import fs from "fs";

// constanst
import { PORT } from "./constants/constants";

const app = express();

// config
app.set("port", process.env.PORT || PORT);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.use((req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public/404.html"));
});

export default app;
