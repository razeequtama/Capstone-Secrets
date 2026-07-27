import express from "express";
import { add_secret, authenticate_login, register } from "../controller/apiController.js";

const apiRoute = express.Router();

apiRoute.post("/auth/login", authenticate_login);

apiRoute.post("/auth/register", register);

apiRoute.post("/add", add_secret);

export default apiRoute;