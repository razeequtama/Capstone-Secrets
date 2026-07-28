import bcrypt from "bcrypt";
import { check_account as check_account_function, register_account as register_account_function} from "../model/registerModel.js";
import { check_account as check_account_login_function} from "../model/loginModel.js";
import { add_secret as add_secret_function, view_secret} from "../model/addSecretModel.js";
import passport from "../config/passport.js";

const saltRounds = 10;

//NO LONGER USEFUL, USE PASSPORT.JS INSTEAD
export async function authenticate_login(req, res)
{
    const {email, password} = req.body;

    const check_account_login = await check_account_login_function(email);

    if(check_account_login.length === 0)
    {
        return res.render("login", {error: "Account not found!"});
    }

    const user = check_account_login[0];

    const validatePassword = await bcrypt.compare(password, user.password);


    if(validatePassword)
    {
        const secrets_on_page = await view_secret(user.user_id);
        console.log(secrets_on_page);
        res.render("secrets", {id: user.user_id, secrets_on_page});
    }
    else
    {
        return res.render("login", {error: "Invalid account!"});
    }
}

export async function register(req, res)
{
    const {email, password: passwordRaw} = req.body;
    
    const check_account = await check_account_function(email);

    if(check_account.length > 0)
    {
        return res.render("register", {
            error: "Account already exists!"
        });
    }

    const password = await bcrypt.hash(passwordRaw, saltRounds);

    const register_account = await register_account_function(email, password);

    res.redirect("/login");
}

export async function add_secret(req, res)
{
    const id = parseInt(req.body.user_id || req.user?.user_id);
    const secret = req.body.secret;

    if (!id || !secret) {
        return res.redirect(303, "/dashboard");
    }

    try {
        await add_secret_function(secret, id);
        res.redirect(303, "/dashboard");
    } catch (error) {
        console.error(error);
        res.redirect(303, "/dashboard");
    }
}