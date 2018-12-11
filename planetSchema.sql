\c space_rover

DROP TABLE IF EXISTS planet;

CREATE TABLE planet (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  image VARCHAR(255),
  general_environment VARCHAR(15000),
  day_length VARCHAR(255),
  random1 VARCHAR(1500),
  random2 VARCHAR(1500)
);

INSERT INTO planet (name, image, general_environment, day_length, random1, random2)
VALUES ('SUN', '/styles/images/sun.jpg', 'The Sun''s core is about 27 million degrees Fahrenheit (15 million degrees Celsius). As a star, the Sun is a ball of gas (92.1 percent hydrogen and 7.8 percent helium) held together by its own gravity.', 'The Sun is the center of the solar system and all planets orbit around it. The length of a year on a planet is based around the time it takes that planet to orbit the Sun.','The sun is 26,000 light years from the galactic center of the milky way!','The Sun is the center of our solar system and makes up 99.8 percent of the mass of the entire solar system.');

INSERT INTO planet (name, image, general_environment, day_length, random1, random2)
VALUES ('MERCURY', '/styles/images/mercury.png', 'Mercury is a rocky planet with craters similar to the earth''s moon. Its atmosphere is composed mostly of oxygen (O2), sodium (Na), hydrogen (H2), helium (He), and potassium (K), so humans cannot breathe on Mercury. Daytime Temperatures can reach 430 degrees Celsius (800 degrees Fahrenheit) and drop to -180 degrees Celsius (-290 degrees Fahrenheit) at night. Suffice it to say, with our current technologies, humans could not survive here.','It takes 88 Earth days for Mercury to orbit the sun!', 'Mercury is the smallest planet in our solar system—only slightly larger than Earths Moon.','If you could stand on Mercury, the sun would appear 3 times larger than it would from Earth.');

INSERT INTO planet (name, image, general_environment, day_length, random1, random2)
VALUES ('VENUS', '/styles/images/venus.jpg', 'Venus'' solid surface is a volcanic landscape covered with extensive plains featuring high volcanic mountains and vast ridged plateaus. The planet’s surface temperature is about 900 degrees Fahrenheit (465 degrees Celsius)—hot enough to melt lead.','It takes 225 Earth Days for Venus to orbit the sun!' ,'Venus is roughly the same size as Earth!' ,'More than 40 spacecraft have explored Venus.');

INSERT INTO planet (name, image, general_environment, day_length, random1, random2)
VALUES ('EARTH', '/styles/images/earth.jpg', 'Earth is a rocky planet with a solid and dynamic surface of mountains, canyons, plains and more. Most of our planet is covered in water. Earth''s atmosphere is 78 percent nitrogen, 21 percent oxygen and 1 percent other ingredients—the perfect balance to breathe and live.','It takes 365 Earth days for Earth to orbit the sun!','Earth''s atmosphere protects us from incoming meteoroids, most of which break up in our atmosphere before they can strike the surface.', 'Earth is the only planet reported to have dogs on it. This is one h*ckin good fact.');

INSERT INTO planet (name, image, general_environment, day_length, random1, random2)
VALUES ('MOON', '/styles/images/moon.jpg', 'The Moon is a rocky, solid-surface body with much of its surface cratered and pitted from impacts.', 'It takes approximately 27 Earth days to complate a year for the Moon.','The Moon is Earth''s satellite and orbits the Earth at a distance of about 384 thousand km (239 thousand miles) or 0.00257 AU.','The Moon has had 24 human visitors, but only 12 moonwalkers.');

INSERT INTO planet (name, image, general_environment, day_length, random1, random2)
VALUES ('MARS', '/styles/images/mars.jpg', 'Mars is a rocky planet. Its solid surface has been altered by volcanoes, impacts, winds, crustal movement and chemical reactions. Mars has a thin atmosphere made up mostly of carbon dioxide (CO2), argon (Ar), nitrogen (N2), and a small amount of oxygen and water vapor.','It takes 687 Earth days for Mars to orbit the sun!','Mars is known as the Red Planet because iron minerals in the Martian soil oxidize, or rust, causing the soil and atmosphere to look red.','With about 1/3 the gravity of Earth, anyone on Mars could dunk a basketball in a regulation goal.');

INSERT INTO planet (name, image, general_environment, day_length, random1, random2)
VALUES ('JUPITER', '/styles/images/jupiter.jpg', 'Jupiter is a gas giant and so lacks an Earth-like surface. If it has a solid inner core at all, it’s likely only about the size of Earth. Jupiters atmosphere is made up mostly of hydrogen (H2) and helium (He).','It takes 4,333 Earth days for Jupiter to orbit the sun!','Eleven Earths could fit across Jupiter’s equator. If Earth were the size of a grape, Jupiter would be the size of a basketball.','Jupiter''s Great Red Spot is a gigantic storm that’s about twice the size of Earth and has raged for over a century.');

INSERT INTO planet (name, image, general_environment, day_length, random1, random2)
VALUES ('SATURN', '/styles/images/saturn.jpg', 'Saturn is a gas-giant planet and therefore does not have a solid surface like Earth’s. But it might have a solid core somewhere in there. Saturn''s atmosphere is made up mostly of hydrogen (H2) and helium (He).' ,'It takes 10,759 Earth days for Saturn to orbit the sun!' ,'Nine Earths side by side would almost span Saturn’s diameter. That doesn’t include Saturn’s rings.','Saturn has 53 known moons with an additional nine moons awaiting confirmation of their discovery—that is a total of 62 moons.');

INSERT INTO planet (name, image, general_environment, day_length, random1, random2)
VALUES ('URANUS', '/styles/images/uranus.jpg', 'Uranus is an ice giant. Most of its mass is a hot, dense fluid of icy materials – water, methane and ammonia – above a small rocky core. Uranus has an atmosphere made mostly of molecular hydrogen and atomic helium, with a small amount of methane.','It takes 30, 687 Earth days for Uranus to orbit the sun!', 'Uranus has 27 known moons, and they are named after characters from the works of William Shakespeare and Alexander Pope.', 'Uranus has 13 known rings. The inner rings are narrow and dark and the outer rings are brightly colored.');

INSERT INTO planet (name, image, general_environment, day_length, random1, random2)
VALUES ('NEPTUNE', '/styles/images/neptune.jpg', 'Neptune is an ice giant. Most of its mass is a hot, dense fluid of icy materials – water, methane and ammonia – above a small rocky core. Neptune''s atmosphere is made up mostly of molecular hydrogen, atomic helium and methane.', 'It takes 60,190 Earth days for Neptune to orbit the sun.', 'Neptune has 13 moons (and one more awaiting confirmation of discovery), which are named after sea gods and nymphs in Greek mythology.', 'Neptune is about four times wider than Earth. If Earth were a large apple, Neptune would be the size of a basketball.');

INSERT INTO planet (name, image, general_environment, day_length, random1, random2)
VALUES ('PLUTO', '/styles/images/pluto.jpg', 'Pluto’s surface is far too cold, -378 to -396 degrees F (-228 to -238 C), to sustain life as we know it. Pluto has a thin atmosphere of nitrogen, methane and carbon monoxide. The atmosphere has a blue tint and distinct layers of haze.','It takes 90, 530 Earth days for Pluto to orbit the sun.','Venetia Burney, just 11 years old at the time, suggested the name Pluto in 1930.','Pluto has 5 moons. The largest, Charon, is so big that Pluto and Charon orbit each other like a double planet.');

