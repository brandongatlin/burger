-- DROP DATABASE if exists burgers_db;

CREATE database burgers_db;
USE burgers_db;

CREATE table burgers (
  id INT auto_increment primary key,
  burger_name VARCHAR(30),
  devoured BOOLEAN default false,
  date TIMESTAMP
);
