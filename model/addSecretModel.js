import db from "../db/db.js";
import {ADD_SECRET, VIEW_SECRET, DELETE_SECRET} from "../db/queries.js";

export async function add_secret(secret, user_id)
{
    try {
        const insert = await db.query(ADD_SECRET, [secret, user_id]);
        return insert.rows;
    } catch (error) {
        console.error(error);
    }
}

export async function view_secret(user_id)
{
    try {
        const secrets = await db.query(VIEW_SECRET, [user_id]);
        return secrets.rows;
    } catch (error) {
        console.error(error);
    }
}

export async function delete_secret(secret_id, user_id)
{
    try {
        const deleted = await db.query(DELETE_SECRET, [secret_id, user_id]);
        return deleted.rows;
    } catch (error) {
        console.error(error);
    }
}