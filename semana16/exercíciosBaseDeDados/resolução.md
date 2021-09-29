## RESOLUÇÃO DOS EXERCÍCIOS DA AULA 45

### Exercício 1:
* letra a) Estão presentes na query, além do FLOAT, os comandos: VARCHAR => que significa o número máximo de 
caracteres que pode ter / PRIMARY KEY => idenficador único na tabela / NOT NULL => significa que o campo não pode ficar em branco / DATE => representa uma data.

* letra b) o comando SHOW DATABASES abre um novo espaço abaixo das queries mostrando os bancos de dados e o comando SHOW TABLES mostra as tabelas no mesmo epaço em que antes estavam exibidos os bancos de dados.

* letra c) o comando DESCRIBE Actor detalhou a tabela Actors, mostrando as categorias presentes => id (como PK), name, salary, bith date e gender.

### Exercício 2:
* letra a) A query da Glória Pires (é a mãe da Cléo Pires, do Fiuk não) ficaria assim:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "00", 
  "Glória Pires",
  120000,
  "1963-08-23", 
  "female"
);

* letra b) 13:37:07	Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0.172 sec
"Entrada duplicada para a Key primária"
Significa que a PK 002 já está em uso e não pode ser duplicada.
A query de entrada pro erro foi:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Angelina Jolie",
  120000,
  "1963-08-23", 
  "female"
);

* letra c) 13:40:28	Error Code: 1136. Column count doesn't match value count at row 1	0.188 sec
"Contagem de colunas não bate com o contador de valor"
Significa que passamos menos valores do que eram necessários pra rodar a query. Ela correta fica assim:
INSERT INTO Actor (id, name, salary, birth_date, gender) (((FOI ADICIONADO birth_date e gender)))
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

* letra d) 13:44:02	Field 'name' doesn't have a default value	0.172 sec
"Campo "nome" não tem valor"
Significa que o campo "name" não foi preenchido. A query correta fica assim:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Lazaro Ramos",
  400000,
  "1949-04-18", 
  "male"
);

* letra e) 13:46:33  Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1	0.172 sec
"Valor de data incorreto: 1950 para coluna bith_date na coluna 1"
Significa que a data foi passada como núemro e a query responde fazendo um cálculo ao invés de ler a data. Para corrigir isso basta colocar a data entre aspas, e ficaria correto assim:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

* letra f) ator:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006",
  "Brad Pitt",
  400000,
  "1969-04-18", 
  "male"
);

atriz:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007",
  "Angelina Jolie",
  400000,
  "1969-10-17", 
  "female"
);

### Exercício 3:
* letra a)  SELECT id, name, salary, birth_date from Actor WHERE gender = "female";

* letra b) SELECT salary from Actor WHERE name = "Tony Ramos";

* letra c) SELECT id, name, salary, birth_date from Actor WHERE gender = "invalid";
Não retornou nenhum resultado pois não temos nenhum item com gender = "invalid"

* letra d) SELECT id, name, salary from Actor WHERE salary <= 500000;

* letra e) 14:04:45	Error Code: 1054. Unknown column 'nome' in 'field list'	0.171 sec
"Coluna desconhecida "nome"" => o correto seria "name", por isso o erro. A query correta fica assim:
SELECT id, name from Actor WHERE id = "002";

### Exercício 4:
* letra a) A query SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
está buscando os itens que comecem com a letra A ou com a letra J e com salário maior que 300000

* letra b) SELECT * FROM Actor
WHERE (name NOT LIKE "A%" ) AND salary > 350000;

* letra c) SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";

* letra d) SELECT * FROM Actor
WHERE LOWER(name) LIKE LOWER("%A%") 
OR LOWER(name) LIKE LOWER("%G%")
AND salary BETWEEN 35000000 AND 90000000;

### Exercício 5: 
* letra a) CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rate INT NOT NULL
);
Nessa query temos a PK, o título que não pode ficar em branco nem ser duplicado, a sinopse que também não pode ficar em branco nem ser duplicada e é do tipo texto, pois assim pode conter mais caracteres, a data de nascimento que é do tipo data e não pode ficar em branco e a avaliação que é um número inteiro e não pode ficar em branco.

* letra b) INSERT INTO Movie (id, title, synopsis, release_date, rate)
VALUES(
  "001",
  "Se eu fosse você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

* letra c) INSERT INTO Movie (id, title, synopsis, release_date, rate)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

* letra d) INSERT INTO Movie (id, title, synopsis, release_date, rate)
VALUES(
  "003",
  "Dona Flor e seus dois maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

* letra e) INSERT INTO Movie (id, title, synopsis, release_date, rate)
VALUES(
  "004",
  "Bacurau",
  "Os moradores de Bacurau, um pequeno povoado do sertão brasileiro, descobrem que a comunidade não consta mais em qualquer mapa. Aos poucos, eles percebem algo estranho na região: enquanto drones passeiam pelos céus, estrangeiros chegam à cidade. Quando carros são baleados e cadáveres começam a aparecer, Teresa, Domingas, Acácio, Plínio, Lunga e outros habitantes chegam à conclusão de que estão sendo atacados. Agora, o grupo precisa identificar o inimigo e criar coletivamente um meio de defesa.",
  "2019-08-23", 
  9
);

### Exercício 6:
* letra a) SELECT id, title, rate from Movie WHERE id = "002";

* letra b) SELECT id, title, synopsis, release_date, rate from Movie WHERE title = "Bacurau";

* letra c) SELECT id, title, synopsis from Movie WHERE rate > 7;

### Exercício 7: 
* letra a) SELECT * FROM Movie
WHERE title LIKE "%vida%";

* letra b) SELECT * FROM Movie
WHERE title or synopsis LIKE "%carro%";

* letra c) SELECT id, title, synopsis, release_date, rate from Movie;

* letra d) SELECT id, title, synopsis, release_date, rate from Movie WHERE title or synopsis LIKE "%vida%" AND rate > 7;






