module.exports = {
  products: `
    CREATE TABLE products (
      id int PRIMARY KEY NOT NULL,
      name varchar,
      slogan varchar,
      description varchar,
      category varchar,
      default_price varchar
    )`,

  related: `
    CREATE TABLE related (
      id int PRIMARY KEY NOT NULL,
      current_product_id int references products(id),
      related_product_id int references products(id)
    )`,

  features: `
    CREATE TABLE features (
      id int PRIMARY KEY NOT NULL,
      productId int references products(id),
      feature varchar,
      value varchar
    )`,

  // productFeatures: `
  //   CREATE TABLE productFeatures (
  //     id int,
  //     productId int references products(id),
  //     feature_id int references features(id)
  //   )`,

  styles: `
    CREATE TABLE styles (
      id int PRIMARY KEY NOT NULL,
      productId int references products(id),
      name varchar,
      sale_price varchar,
      original_price varchar,
      default_style boolean
    )`,

  photos: `
    CREATE TABLE photos (
      id int,
      styleId int references styles(id),
      url  varchar,
      thumbnail_url varchar
    )`,

  skus: `
    CREATE TABLE skus (
      id int,
      styleId int references styles(id),
      size varchar,
      quantity int
    )`
}