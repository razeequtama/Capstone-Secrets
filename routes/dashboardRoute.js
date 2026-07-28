import express from "express";
import { renderDashboardPage } from "../controller/dashboardController.js";
import { add_secret, delete_secret } from "../controller/apiController.js";

const dashboardRoute = express.Router();

dashboardRoute.post("/", async (req, res, next) => {
  try {
    await add_secret(req, res, next);
  } catch (error) {
    next(error);
  }
});
dashboardRoute.get("/", renderDashboardPage);

dashboardRoute.get("/delete", async (req, res, next) => {
  try {
    await delete_secret(req, res, next);
  } catch (error) {
    next(error);
  }
});

export default dashboardRoute;