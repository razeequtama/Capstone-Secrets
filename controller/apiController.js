import bcrypt from "bcrypt";
import { check_account as check_account_function, register_account as register_account_function} from "../model/registerModel.js";
const saltRounds = 10;


export function authenticateLogin(req, res)
{
    res.send("hehe login");
}

export async function register(req, res)
{
    const {email, password: passwordRaw} = req.body;
    
    const check_account = check_account_function(email);

    if(check_account.length > 0)
    {
        return res.render("register.ejs", {
            error: "Account already exists!"
        });
    }

    const password = await bcrypt.hash(passwordRaw, saltRounds);

    const register_account = register_account_function(email, password);

    res.redirect("/login");
}