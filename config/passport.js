//COOKIE IMPLEMENTATION 2: PASSSPORT CONFIGURATION
import passport from "passport";
import bcrypt from "bcrypt";
import { Strategy } from "passport-local";
import db from "../db/db.js";
import { check_account } from "../model/loginModel.js";

passport.use(
  new Strategy({ usernameField: "email" }, async (email, password, done) => {
    try {
      const result = await check_account(email);

      if (result.length === 0) {
        return done(null, false);
      }

      const user = result[0];
      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        return done(null, false);
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const result = await db.query("SELECT * FROM users WHERE user_id = $1", [id]);

    if (result.rows.length === 0) {
      return done(null, false);
    }

    done(null, result.rows[0]);
  } catch (err) {
    done(err);
  }
});

export default passport;