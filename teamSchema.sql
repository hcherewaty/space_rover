\c space_rover

DROP TABLE IF EXISTS devs;

CREATE TABLE devs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(500),
    image_url VARCHAR(500),
    bio VARCHAR(1500),
    email VARCHAR(500),
    github VARCHAR(500),
    twitter VARCHAR(500),
    linkedin VARCHAR(500)
);

INSERT INTO devs (name, image_url, bio, email, github, twitter, linkedin)
VALUES('Michael Jahns', 'https://photos.app.goo.gl/AeqhQG8EHX8f9ygc8', 'The thing about Michael is, he constantly breaks into the unknown, bursting ever further and higher into the infinite abyss of the greater cosmos.', 'Jahnsmic001@gmail.com', 'https://github.com/MichaelJahns', '#','https://www.linkedin.com/in/michaelcjahns/' );