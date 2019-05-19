### schema
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id INTEGER(100) AUTO_INCREMENT NOT NULL,
    burger_name varchar(100),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
