CREATE TABLE if not exists partnerModel (
  id integer PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO partner (name, image_url) VALUES
(
    'Samsung',
    'https://cdn.pixabay.com/photo/2017/0'
),
(
    'Apple',
    'https://cdn.pixabay.com/photo/2017/0'
),
(
    'Google',
    'https://cdn.pixabay.com/photo/2017/0'
),
(
    'Microsoft',
    'https://cdn.pixabay.com/photo/2017/0'
)