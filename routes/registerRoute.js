import express from "express";
import { renderRegisterPage } from "../controller/registerController.js";

const registerRoute = express.Router();

registerRoute.get("/", renderRegisterPage);

export default registerRoute;