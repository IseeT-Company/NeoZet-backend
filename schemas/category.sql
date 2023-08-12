CREATE TABLE if not exists categoryModel (
  id integer PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO category (name) VALUES
(
    'Category 1'
),
(
    'Category 2'
),
(
    'Category 3'
),
(
    'Category 4'
)
