import express from "express";
import { renderLoginPage } from "../controller/loginController.js";

const loginRoute = express.Router();

loginRoute.get("/", renderLoginPage);

export default loginRoute;