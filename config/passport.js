//COOKIE IMPLEMENTATION 2: PASSSPORT CONFIGURATION
import passport from "passport";
import bcrypt from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import db from "../db/db.js";
import { check_account } from "../model/loginModel.js";
import { register_account } from "../model/registerModel.js";

passport.use("local",
  new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
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

passport.use("google", new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/secrets"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const email = profile.email || profile.emails?.[0]?.value;

    if (!email) {
      return done(null, false);
    }

    const existingUser = await check_account(email);

    if (existingUser.length > 0) {
      return done(null, existingUser[0]);
    }

    const hashedPassword = await bcrypt.hash(`${profile.id}-${Date.now()}`, 10);
    const createdUser = await register_account(email, hashedPassword);

    return done(null, createdUser[0]);
  } catch (err) {
    return done(err);
  }
}));

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