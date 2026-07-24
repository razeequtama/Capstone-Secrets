import express from "express";
import { authenticateLogin, register } from "../controller/apiController.js";

const apiRoute = express.Router();

apiRoute.post("/auth/login", authenticateLogin);

apiRoute.post("/auth/register", register);

export default apiRoute;