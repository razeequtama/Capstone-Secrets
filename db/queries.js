export const create_user_table = 
`
    CREATE TABLE user(
        user_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    );
`;

export const create_secret_table = 
`
    CREATE TABLE secret(
        secret_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        secret TEXT NOT NULL,
        user_id BIGINT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE
    );
`;