\c space_rover

DROP TABLE IF EXISTS planet;

CREATE TABLE planet (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  image VARCHAR(255),
  fun_facts INT
);

CREATE TABLE fun_facts (
  id SERIAL PRIMARY KEY,
  facts VARCHAR(500)
);

INSERT INTO planet (name, image, fun_facts)
VALUES ('Mercury', '/styles/images/mercury.png', '1');

INSERT INTO planet (name, image, fun_facts)
VALUES ('Venus', '/styles/images/venus.jpg', '2');

INSERT INTO planet (name, image, fun_facts)
VALUES ('Earth', '/styles/images/earth.jpg', '3');

INSERT INTO planet (name, image, fun_facts)
VALUES ('Mars', '/styles/images/mars.jpg', '4');

INSERT INTO planet (name, image, fun_facts)
VALUES ('Jupiter', '/styles/images/jupiter.jpg', '5');

INSERT INTO planet (name, image, fun_facts)
VALUES ('Saturn', '/styles/images/saturn.jpg', '6');

INSERT INTO planet (name, image, fun_facts)
VALUES ('Uranus', '/styles/images/uranus.jpg', '7');

INSERT INTO planet (name, image, fun_facts)
VALUES ('Naptune', '/styles/images/neptune.jpg', '8');

INSERT INTO planet (name, image, fun_facts)
VALUES ('Pluto', '/styles/images/pluto.jpg', '9');

INSERT INTO planet (name, image, fun_facts)
VALUES ('Moon', '/styles/images/mars.jpg', '10');

INSERT INTO planet (name, image, fun_facts)
VALUES ('Sun', '/styles/images/sun.jpg', '11');
