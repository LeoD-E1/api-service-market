import express, { Request, Response } from "express";
import morgan from "morgan";
import path from "path";
import fs from "fs";
var OAuthServer = require("express-oauth-server");
import model from "./models/model";
const OAuth2Server = require("oauth2-server");

// constanst
import { PORT } from "./constants/constants";

const app = express();

// config
app.set("port", process.env.PORT || PORT);
let oauth = new OAuth2Server({ model });

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
