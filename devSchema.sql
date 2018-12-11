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
VALUES('Michael Jahns', '/styles/images/michael_jahns.png', 'The thing about Michael is, he constantly breaks into the unknown, bursting ever further and higher into the infinite abyss of the greater cosmos.', 'Jahnsmic001@gmail.com', 'https://github.com/MichaelJahns', '#','https://www.linkedin.com/in/michaelcjahns/' );

INSERT INTO devs (name, image_url, bio, email, github, twitter, linkedin)
VALUES('Heather Cherewaty', '/styles/images/heather_cherewaty.jpg', 'Heather is a small business owner turned software developer with a passion for creative writing, traveling, and all things dog-related.  She enjoys using her writing, experiences, and code as a means to reach and inspire people in a thoughtful and purposeful way.', 'hr.cherewaty@gmail.com', 'https://github.com/hcherewaty', 'https://twitter.com/abardatlarge', 'https://www.linkedin.com/in/hcherewaty/');

INSERT INTO devs (name, image_url, bio, email, github, twitter, linkedin)
VALUES('Becca Lee', '/styles/images/becca_lee.jpg', 'Becca is a software developer with a background in marketing and customer service, who fell in love with the tech industry while working as the marketing manager for a JavaScript consultancy. She is a voracious learner who loves to translate her knowledge and intuition into thoughtful, user-focused strategies. She is currently studying JavaScript development at Code Fellows and is excited to use her new skills to create user-centric apps and solve challenging software problems. Her favorite planet is Saturn because those rings really make it something special.', 'rebecca.kirstin.lee@gmail.com', 'https://github.com/beccalee123', 'https://twitter.com/the_becca_lee', 'https://www.linkedin.com/in/becca-lee-805922110/');

INSERT INTO devs (name, image_url, bio, email, github, twitter, linkedin)
VALUES('Siobhan Niess', '/styles/images/siobhan_niess.png', 'Siobhan is a mother to an amazing little girl who helps her push herself to be everything she can be and more. She has lived in Washington all her life and absolutely loves the Pacific Northwest. In her spare time, Siobhan enjoys being outside, whether she is hiking up to water falls or just taking her daughter to the park, anything to just get out of the house. She feels that spending time with your family is very important, we help each other become stronger and make it through the tough moments in life. When it comes to planets, her favorite one is Mercury by far because it is simply breathtaking to look at.', 'niesssiobhan@live.com', 'https://github.com/niesssiobhan', '#', 'https://www.linkedin.com/in/siobhan-niess-45351ba7/');

INSERT INTO devs (name, image_url, bio, email, github, twitter, linkedin)
VALUES('Atlas (Sugar Bear) McDoggins', '/styles/images/space_atlas.JPG', 'Atlas is a Pacific Northwest dog, living the Pacific Northwest life.  He has been ignoring personal space since 2012, is an amateur philosopher and astronomer, and is always on the sniff for Uranus', 'atlaswoofs@gmail.com', '#', '#', 'https://instagram.com/atlaswoofs');