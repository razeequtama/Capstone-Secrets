import db from "../db/db.js";
import {CHECK_ACCOUNT as CHECK_ACCOUNT_QUERY, REGISTER_ACCOUNT} from "../db/queries.js";

export async function check_account(email)
{
    try {
        const check = await db.query(CHECK_ACCOUNT_QUERY, [email])
        return check.rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
}