CREATE TABLE students (
  id integer PRIMARY KEY NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  middle_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  age integer NOT NULL,
  location VARCHAR(50) NOT NULL
);

INSERT INTO 
  students(id, first_name, middle_name, last_name, age, location)
VALUES
  (1, 'Oliver', 'Balauag', 'Nero', 28, 'Quezon City'),
  (2, 'Anica', '', 'Sagun', 29, 'Quezon City'),
  (3, 'Kenneth', 'Nicolas', 'Ducusin', 26, 'Quezon City'),
  (4, 'Luffy', 'D.', 'Monkey', 21, 'East Blue'),
  (5, 'Naruto', '', 'Uzumaki', 21, 'Konoha'),
  (6, 'Chandler', 'Muriel', 'Bing', 31, 'New York City');

UPDATE students
SET first_name = 'Ivan',
    middle_name= 'Ingram',
    last_name = 'Howard', 
    age = 25, 
    location = 'Bulacan' 
WHERE id = 1;

DELETE FROM students WHERE id = 6;