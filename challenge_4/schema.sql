CREATE DATABASE IF NOT EXISTS connect4;

CREATE TABLE IF NOT EXISTS games (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  p1_name VARCHAR(25),
  p2_name VARCHAR(25),
  p1_score INT,
  p2_score INT,
  turn INT,
  winner INT,
  board TEXT
);