-- 1. Query
SELECT * FROM country
LEFT JOIN city ON country.country_id = city.country_id;

-- 2. Query
SELECT customer.first_name, customer.last_name, payment.payment_id  FROM payment  
RIGHT JOIN customer on customer.customer_id = payment.customer_id;

-- 3. Query
SELECT customer.first_name, customer.last_name FROM customer
FULL OUTER JOIN rental on rental.customer_id = customer.customer_id;