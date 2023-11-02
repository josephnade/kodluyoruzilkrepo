-- 1. Query
SELECT * FROM country 
WHERE country LIKE 'A%a';

-- 2. Query
SELECT * FROM country
WHERE country LIKE '_____%n';

-- 3. Query
SELECT title FROM film
WHERE title ILIKE 't%t%t%t%';

-- 4. Query
SELECT * FROM film
WHERE title LIKE 'C%' AND length > 90 AND rental_rate = 2.99