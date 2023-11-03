-- 1. Query
CREATE TABLE IF NOT EXISTS employee (
	id INT,
	name VARCHAR(50),
	birthday DATE,
	email VARCHAR(50)
);
-- 2 . Query

-- 1
UPDATE employee
SET birthday = '1999-07-07'
WHERE id = 2
RETURNING *;

-- 2
UPDATE employee
SET name = 'Joseph'
WHERE name LIKE 'Nan%'
RETURNING *;

-- 3
UPDATE employee
SET email = 'joseph@gmail.com'
WHERE id > 30
RETURNING *;

-- 4
UPDATE employee
SET email = 'example@gmail.com'
WHERE id > 40
RETURNING *;

-- 5
UPDATE employee
SET name = 'Joseph'
WHERE name LIKE 'A%'
RETURNING *;

-- 3 . Query

-- 1
DELETE FROM employee
WHERE id > 45
RETURNING *;

-- 2
DELETE FROM employee
WHERE name = 'Joseph'
RETURNING *;

-- 3
DELETE FROM employee
WHERE email LIKE 'example%'
RETURNING *;

-- 4
DELETE FROM employee
WHERE birthday = '1999-07-07'
RETURNING *;

-- 1
DELETE FROM employee
WHERE id >= 11
RETURNING *;