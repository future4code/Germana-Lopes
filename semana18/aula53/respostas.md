## Respostas 
--

### Herança

#### Exercício 1
* letra a) 
Não seria possível imprimir a senha pois ela não foi tornada pública em nenhum momento, ao contrário da Id, Nome e Email que tiveram suas informações tornadas acessíveis no código.

* letra b)
A mensagem `Chamando o construtor da classe User` apareceu impressa apenas um vez no console.

#### Exercício 2
* letra a)
A mensagem `Chamando o construtor da classe Customer` foi impressa apenas uma vez no console.

* letra b)
A mensagem `Chamando o construtor da classe User` apareceu impressa duas vezes no console, pois para ser um Customer, precisa antes também ser um User.

#### Exercício 3
* letra a)
Novamente não seria possível imprimir o password pois ele não foi tornado público em nenhum momento.

--

### POLIMORFISMO

#### Exercício 1
* letra a)
Sim, foi possível imprimir todas as propriedades, incluindo a `calculateBill` que era uma função e precisou ser chamada também com os () dentro do `console.log`

#### Exercício 2
* letra a)
Ao tentar instanciar place1 o TypeScript gerou o erro `Cannot create an instance of an abstract class.ts(2511)`

* letra b)
Devemos criar uma nova classe com relação de filha com a classe `Place`

#### Exercício 4
* letra a)
A classe possui todas as propriedades e métodos internos presentes nela e também os externos `getCep` e `getResidentsQuantity`

#### Exercício 5
* letra a) 
As mesmas relações de herança com Place e interface Client.

* letra b) 
As diferenças são que agora recebemos a `floorsQuantity` e há a informação nova de CNPJ.

#### Exercício 6
* letra a) 
Deve ser filha da classe Industry, pois é ela quem vai dispor as heranças necessárias para a classe `IndustrialClient`.

* letra b) 
Implementa a interface `Client`.

* letra c)
O pedido para fazermos apenas os `getters` pois no exercício estamos apenas acessando informações de objetos já instanciados, não sendo necessários os `setters`