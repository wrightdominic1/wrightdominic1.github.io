DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
  item_id int(11) NOT NULL AUTO_INCREMENT,
  product_name varchar(100) NOT NULL,
  department_name varchar(45) NOT NULL,
  price int(11) ,
  stock_quantity int(11) ,
  PRIMARY KEY (item_id)
) 