-- TABLES --

CREATE TABLE products (
  id int PRIMARY KEY NOT NULL,
  name varchar,
  slogan varchar,
  description varchar,
  category varchar,
  default_price varchar
);

CREATE TABLE related (
  id int PRIMARY KEY NOT NULL,
  current_product_id int references products(id),
  related_product_id int references products(id)
);

CREATE TABLE features (
  id int PRIMARY KEY NOT NULL,
  productId int references products(id),
  feature varchar,
  value varchar,
);

CREATE TABLE productFeatures (
  id int,
  productId int references products(id),
  feature_id int references features(id)
);

CREATE TABLE styles (
  id int PRIMARY KEY NOT NULL,
  productId int references products(id),
  name varchar,
  sale_price varchar,
  original_price varchar,
  default_style boolean
);


CREATE TABLE photos (
  id int,
  styleId int references styles(id),
  url  varchar,
  thumbnail_url varchar
);

CREATE TABLE skus (
  id int,
  styleId int references styles(id),
  size varchar,
  quantity int
);

-- INSERTION --