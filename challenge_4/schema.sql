CREATE DATABASE IF NOT EXISTS connect4;

USE connect4;

CREATE TABLE IF NOT EXISTS games (
  id INT PRIMARY KEY AUTO_INCREMENT,
  p1_name VARCHAR(25),
  p2_name VARCHAR(25),
  p1_score INT,
  p2_score INT,
  status BOOLEAN,
  turn INT,
  winner INT,
  board TEXT
);