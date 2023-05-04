DROP table IF EXISTS entries;

CREATE TABLE entries (
    id INT GENERATED ALWAYS AS IDENTITY,
    date DATE NOT NULL,
    time TIME NOT NULL,
    category VARCHAR(20) NOT NULL,
    content VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);   


INSERT INTO entries
    (date, time, category, content)
VALUES 
('2023/05/04','00:00:00', 'Wildest Dream', 'Hello world.'),
('2023/05/04','17:02:03', 'Wildest Dream', 'Hello world.'),
('2023/05/03','00:00:00', 'Deepest Fears', 'Hello world.'),
('2023/05/02','00:00:00', 'Regrettable Choices', 'Hello world.'),
('2023/05/01','00:00:00', 'Wildest Dream', 'Hello world.');
