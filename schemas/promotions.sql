CREATE TABLE if not exists promotion (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  status TINYINT NOT NULL DEFAULT 1,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO promotion (title, image_url, description) VALUES
(
  'Promo 1',
  'https://images.unsplash.com/photo-15191404',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et'
),
(
  'Promo 2',
  'https://images.unsplash.com/photo-15191404',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et'
),
(
  'Promo 3',
  'https://images.unsplash.com/photo-15191404',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et'
),
(
  'Promo 4',
  'https://images.unsplash.com/photo-15191404',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et'
),
(
  'Promo 5',
  'https://images.unsplash.com/photo-15191404',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et'
)