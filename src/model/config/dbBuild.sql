BEGIN;

DROP TABLE IF EXISTS users,post,comment CASCADE;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  date_of_birth DATE NOT NULL,
  mobile_no INTEGER NOT NULL
);

CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(user_id),
  content VARCHAR NOT NULL,
  date_of_publish DATE DEFAULT CURRENT_TIMESTAMP,
  up_votes INTEGER DEFAULT 0,
  down_votes INTEGER DEFAULT 0

);

CREATE TABLE comments (
  comment_id SERIAL PRIMARY KEY NOT NULL,
  post_id INTEGER REFERENCES posts(post_id),
  user_id INTEGER REFERENCES users(user_id),
  content VARCHAR NOT NULL,
  date_of_publish DATE DEFAULT CURRENT_TIMESTAMP,
  up_votes INTEGER DEFAULT 0,
  down_votes INTEGER DEFAULT 0
);

CREATE TABLE replies (
  replay_id SERIAL PRIMARY KEY NOT NULL,
  comment_id INTEGER REFERENCES comments(comment_id),
  user_id INTEGER REFERENCES users(user_id),
  content VARCHAR NOT NULL,
  up_votes INTEGER DEFAULT 0,
  down_votes INTEGER DEFAULT 0
);
COMMIT;