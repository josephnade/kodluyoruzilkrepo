-- 1. Query
(SELECT first_name FROM actor)
UNION
(SELECT first_name FROM customer);

-- 2. Query
(SELECT first_name FROM actor)
INTERSECT
(SELECT first_name FROM customer);

-- 3. Query
(SELECT first_name FROM actor)
EXCEPT
(SELECT first_name FROM customer);

-- 4. Query
(SELECT first_name FROM actor)
UNION ALL
(SELECT first_name FROM customer);

-- 5. Query
(SELECT first_name FROM actor)
INTERSECT ALL
(SELECT first_name FROM customer);

-- 6. Query
(SELECT first_name FROM actor)
EXCEPT ALL
(SELECT first_name FROM customer);