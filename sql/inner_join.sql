-- 1. Query
SELECT city.city, country.country FROM city
INNER JOIN country ON city.country_id = country.country_id;

-- 2. Query
SELECT customer.first_name, customer.last_name FROM customer
INNER JOIN payment ON customer.customer_id = payment.customer_id;

-- 3. Query
SELECT customer.first_name, customer.last_name FROM customer
INNER JOIN rental ON customer.customer_id = rental.customer_id;