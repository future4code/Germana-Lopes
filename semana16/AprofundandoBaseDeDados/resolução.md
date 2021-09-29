### Exercício 1:
* letra a) 
Essa query deletaria a coluna salary

* letra b)
Essa query muda o nome da coluna gender para sex e limita o número de caracteres em 6.

* letra c)
Essa query muda o número de caracteres para 255.

* letra d)
A query ficaria assim:
ALTER TABLE Actor 
CHANGE gender gender VARCHAR(100);

### Exercício 2:
* letra a) 
UPDATE Actor
SET name = "Antonio Monteiro.", birth_date = "1955-03-12"
WHERE id = 3;

* letra b) 
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

* letra c)
UPDATE Actor
SET name = "Itamar Franco",
    salary = 2000000,
    birth_date = "1940-11-23",
    gender = "male"
WHERE id = 5;

* letra d)
13:55:35 Changed: 0  Warnings: 0	0.172 sec
Nada foi afetado.

### Exercício 3:
* letra a) 
DELETE FROM Actor
WHERE name = "Fernanda Montenegro";

* letra b)
DELETE FROM Actor
WHERE gender = "male"
AND salary > 100000000;

### Exercício 4:
* letra a) 
SELECT MAX(salary) AS "maxSalary" FROM Actor 

* letra b) 
SELECT MIN(salary)
FROM Actor
WHERE gender = "female";

* letra c) 
SELECT COUNT(*) FROM Actor
WHERE gender = "female";

* letra d) 
SELECT SUM(salary) FROM Actor;

### Exercício 5:
* letra a)
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender 
Essa query retorna os resultados agrupados pelo grupo GENDER, ou seja 3 homens e 2 mulheres.

* letra b)
SELECT id, name FROM Actor
ORDER BY name DESC;

* letra c)
SELECT * FROM Actor
ORDER BY salary;

* letra d)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

* letra e)
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;

### Exercício 6:
* letra a)
ALTER TABLE Movie
ADD playing_limit_date DATE DEFAULT(CURDATE());

* letra b) 
ALTER TABLE Movie
CHANGE rate rate FLOAT DEFAULT(0.0);

* letra c)
UPDATE Movie
SET playing_limit_date = "2021-09-20"
WHERE id = "002";

UPDATE Movie
SET playing_limit_date = "2021-11-20"
WHERE id = "001";

* letra d)
14:22:39	UPDATE Movie SET playing_limit_date = "2021-09-20" WHERE id = "002"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.187 sec
Como o ID não foi encontrado, nenhuma alteração foi feita.

### Exercício 7:
* letra a) 
SELECT COUNT(*)
FROM Movie
WHERE rate > 7.5;
Resposta: 2 filmes

* letra b)
SELECT AVG(rate) FROM Movie;
Resposta: Média de 7.5

* letra c)
SELECT COUNT(*) FROM Movie
WHERE playing_limit_date > CURDATE();
Resposta: 1 filme

* letra d)
SELECT COUNT(*) FROM Movie
WHERE release_date > CURDATE();
Resposta: 0 filmes

* letra e)
SELECT MAX(rate) FROM Movie;
Resposta: nota 9

* letra f)
SELECT MIN(rate) FROM Movie;
Resposta: nota 6

### Exercício 8:
* letra a)
SELECT * FROM Movie ORDER BY title;

* letra b)
SELECT * FROM Movie
ORDER BY title DESC
LIMIT 5;

* letra c)
SELECT * FROM Movie
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;

* letra d)
SELECT * FROM Movie
ORDER BY rate DESC
LIMIT 3;






