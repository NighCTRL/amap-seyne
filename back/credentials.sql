CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE IF EXISTS users;

CREATE TABLE users (
       user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
       user_email VARCHAR(64) NOT NULL UNIQUE,
       user_password VARCHAR(128) NOT NULL
);

