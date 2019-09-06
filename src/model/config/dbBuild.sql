BEGIN;

DROP TABLE IF EXISTS users,post,comment CASCADE;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR NOT NULL,
  date_of_birth DATE NOT NULL,
  mobile_no INTEGER NOT NULL
);

CREATE TABLE post (
  post_id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(user_id),
  content VARCHAR NOT NULL,
  date_of_publish DATE DEFAULT CURRENT_TIMESTAMP,
  up_votes INTEGER DEFAULT 0,
  down_votes INTEGER DEFAULT 0

);

CREATE TABLE comment (
  comment_id SERIAL PRIMARY KEY NOT NULL,
  post_id INTEGER REFERENCES post(post_id),
  user_id INTEGER REFERENCES users(user_id),
  content VARCHAR NOT NULL,
  date_of_publish DATE DEFAULT CURRENT_TIMESTAMP
);
COMMIT;