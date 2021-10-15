## PROJETO DA SEMANA => LABECOMMERCE (BACK END)

- Este é um projeto básico de Backend, utilizando Typescript, MySQL, além das bibliotecas knexJs e expressJs, desenvolvido para atender aos modelos REST API.

---

## DOCUMENTAÇÃO DE FUNCIONAMENTO

### `GET` All Users

- Este endpoint retorna todos os usuários registrados no sistema.
- São exibidos dos usuários seus `id`,`name`, `email` e respectivos `age` como resposta.

---

### `GET` All Products Ordered By Price

- Este endpoint retorna todos os produtos do sistema ordenados pelo preço.
- Os produtos podem receber o tipo de ordenamento desejado (`ASC` para ascendente e `DESC` 
para descendente) por preço do produto.
- São exibidos dos produtos seus `id`,`name`, `description` e respectivos `price` como resposta.

---

### `GET` All Trips

- Este endpoint retorna todas as viagens registradas no sistema.
- São exibidos dos produtos seus `id`,`name`, `description` e respectivos `price` como resposta, além
dos campos obrigatórios `origin` e `destination` (apenas em viagens).

---

### `GET` All Purchases

- Este endpoint retorna todos as compras registradas no sistema.
- A busca é feita através do query param `description`.
- São exibidos dos estudantes seus `name` e respectivos `id` como resposta.
- É exibido também o nome do hobby de busca.

---

### `GET` All Purchases By UserId

- Este endpoint busca todas as compras feitos por um usuário.
- É necessário passar o `userId` como query params.
- São exibidos o `id` de registro da compra, o `user_id`, o `product_id`,
a `quantity` e o `total_price` como resposta.

---
### `POST` New User

- Este endpoint cria um novo usuário no sistema.

---
### `POST` New Product

- Este endpoint cria um novo produto no sistema.

---
### `POST` New Trip

- Este endpoint cria uma nova viagem no sistema.

---

### `POST` New Purchase

-  Este endpoint cria uma nova compra no sistema por um usuário.

---
### Desenvolvido com muita dedicação por Germana Etges =)