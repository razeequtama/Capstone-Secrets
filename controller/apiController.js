import bcrypt from "bcrypt";
import { check_account as check_account_function, register_account as register_account_function} from "../model/registerModel.js";
import { check_account as check_account_login_function} from "../model/loginModel.js";
const saltRounds = 10;


export async function authenticateLogin(req, res)
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
        res.render("secrets", {id: user.user_id});
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