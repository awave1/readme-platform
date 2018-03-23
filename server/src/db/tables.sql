CREATE TABLE users (
    id serial PRIMARY KEY,
    uid VARCHAR UNIQUE NOT NULL,
    first VARCHAR NOT NULL,
    last VARCHAR NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR UNIQUE NOT NULL,
    bookmarks VARCHAR [],
    likes VARCHAR []
);

-- author is user id
CREATE TABLE posts (
    id serial PRIMARY KEY,
    post_id VARCHAR UNIQUE NOT NULL,
    title VARCHAR NOT NULL,
    content VARCHAR NOT NULL,
    author VARCHAR UNIQUE NOT NULL,
    likes INT,
    tags VARCHAR []
);

CREATE TABLE tags (
    id serial PRIMARY KEY,
    tag_id VARCHAR UNIQUE NOT NULL,
    name VARCHAR UNIQUE NOT NULL,
    posts VARCHAR []
);
