-- 1. Query
SELECT DISTINCT replacement_cost FROM film;

-- 2. Query
SELECT COUNT(DISTINCT replacement_cost) FROM film;

-- 3. Query
SELECT COUNT(*) FROM film
WHERE title LIKE 'T%' AND rating = 'G';

-- 4. Query
SELECT COUNT(*) FROM country
WHERE country LIKE '_____';

-- 5. Query
SELECT COUNT(city) FROM city
WHERE city ILIKE '%r';