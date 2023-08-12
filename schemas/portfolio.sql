CREATE TABLE if not exists portfolioModel (
  id integer PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  category_id INT NOT NULL,
  FOREIGN KEY (category_id)  REFERENCES categoryModel (id),
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO portfolio (name, image_url, category_id) VALUES
(
  'Portfolio 1',
  'https://images.unsplash.com/photo-15191412',
  1
),
(
  'Portfolio 2',
  'https://images.unsplash.com/photo-15191412',
  2
),
(
  'Portfolio 3',
  'https://images.unsplash.com/photo-15191412',
  3
),
(
  'Portfolio 4',
  'https://images.unsplash.com/photo-15191412',
  2
)