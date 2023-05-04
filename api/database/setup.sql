DROP table IF EXISTS entries;

CREATE TABLE entries (
    id INT GENERATED ALWAYS AS IDENTITY,
    date VARCHAR(20) NOT NULL,
    category VARCHAR(20) NOT NULL,
    content VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);   

INSERT INTO entries (date, category, content)
VALUES ('4th May 2023', 'Wildest Dream', 'Hello world.');
