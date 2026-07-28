import express from "express";
import path from "path";
import { fileURLToPath } from "url";    

import session from "express-session";

import db from "./db/db.js";
import passport from "./config/passport.js";

import loginRoute from "./routes/loginRoute.js";
import apiRoute from "./routes/apiRoute.js";
import registerRoute from "./routes/registerRoute.js";
import { renderDashboardPage } from "./controller/dashboardController.js";
import { add_secret } from "./controller/apiController.js";

import dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 3000;

try {
    await db.query("SELECT 1");
    console.log("Connected to PostgreSQL");
} catch (err) {
    console.error("Failed to connect:", err);
    process.exit(1);
}

// Set EJS as template engine
app.set("view engine", "ejs");

// Set views directory
app.set("views", path.join(__dirname, "views"));

// Set static default directory to public/
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


//COOKIE IMPLEMENTATION 1: SESSION DECLARE
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,

    cookie: {
        maxAge: 1000 * 60 * 60 *24
    },
}));

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.redirect("/login");
})

app.get("/dashboard", renderDashboardPage);
app.post("/dashboard", add_secret);

app.use("/login", loginRoute);
app.use("/api", apiRoute);
app.use("/register", registerRoute);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});