import express from "express";
import { add_secret, authenticate_login, register } from "../controller/apiController.js";
import passport from "../config/passport.js";

const apiRoute = express.Router();

//COOKIE IMPLEMENTATION 4: PASSPORT.JS AUTHENTICATION
apiRoute.post("/auth/login", passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
);

apiRoute.post("/auth/register", register);

export default apiRoute;