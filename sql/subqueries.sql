-- 1. Query
SELECT COUNT(*) FROM film
WHERE film.length > (SELECT AVG(film.length) FROM film);

-- 2. Query
SELECT COUNT(*) FROM film
WHERE film.rental_rate = (SELECT MAX(film.rental_rate) FROM film);

-- 3. Query
SELECT * FROM film
WHERE film.rental_rate = (SELECT MIN(film.rental_rate) FROM film) AND 
	  film.replacement_cost = (SELECT MIN(film.replacement_cost) FROM film);
	 
-- 4. Query
SELECT * FROM payment
WHERE payment.amount = (SELECT MAX(payment.amount) FROM payment);