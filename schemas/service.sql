CREATE TABLE if not exists serviceModel (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO service (title, image_url, description) VALUES
(
  'Service 1',
  'https://images.unsplash.com/photo-15191412',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et'
),
(
  'Service 2',
  'https://images.unsplash.com/photo-15191412',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et'
),
(
  'Service 3',
  'https://images.unsplash.com/photo-15191412',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et'
),(
  'Service 4',
  'https://images.unsplash.com/photo-15191412',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et'
)

