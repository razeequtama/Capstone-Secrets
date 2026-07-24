export const CREATE_USER_TABLE = 
`
    CREATE TABLE user(
        user_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    );
`;

export const CREATE_SECRET_TABLE = 
`
    CREATE TABLE secret(
        secret_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        secret TEXT NOT NULL,
        user_id BIGINT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE
    );
`;

export const REGISTER_ACCOUNT = 
`
    INSERT INTO users (email, password)
    VALUES ($1, $2)
    RETURNING *;
`;

export const CHECK_ACCOUNT =
`
    SELECT *
    FROM users
    WHERE email = $1;
`;