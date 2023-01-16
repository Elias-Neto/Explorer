## 🔄 API

API (**_Application Programming Interface_** - Interface de Programação de Aplicação) é um termo utilizado para designar uma **interface de comunicação** que um sistema oferece para que outros acessem funções.

Uma interface é quem faz a ponte, o meio de campo entre um lado A e um lado B.

Uma API ela faz a ponte, o meio de campo para que ocorra a comunicação entre o **_Client Side_** (Lado do Cliente) e o **_Server Side_** (Lado do Servidor).

O Server Side oferece uma API para que o Client Side (seja mobile, web e/ou desktop) possa acessar as funções que ele, como o próprio nome diz, serve.

### 👨‍🍳 Analogia do Restaurante

O **Cliente** olha o menu, escolhe um prato e faz um pedido (**_Request_**) para o **Garçom** (API). O Garçon recebe esse pedido e leva-o para a **Cozinha** (Server Side). Na Cozinha o prato que foi pedido vai ser preparado (isso levará um tempo de acordo com a complexidade do pedido) e entregue ao Garçom. Por fim, o Garçom entrega o pedido pronto para o Cliente (**_Response_**).

## 💚 Node.js

Node.js não é uma linguagem de programação.

JavaScript é a linguagem de programação.

Node.js é um **_JavaScript Runtime Environment_** (Ambiente de Execução JavaScript). Ele é um ambiente que oferece recursos que permite escrever e executar aplicações javascript.

Podemos utiliza-lo para fazer o que der na telha:

- API (Web, Desktop, Mobile)
- Scripts de Automação
- Inteligência Artificial
- Machine Learning
- Backend
- Frontend
- Micro serviços

As vantagens do Node.js:

- Node.js Foundation
- Rápido (execução, prototipação)
- Escalável
- Aplicações de ponta
- JS everywhere
- Ecossistema gigante (comunidade, bibliotecas)
- Amplamente utilizada (oportunidades de trabalho)

### ⚙ v8 Engine

v8 engine é o **interpretador JavaScript**. Ele é o responsável por fazer o nosso navegador entender javascript.

Foi desenvolvido pela Google e utilizado em seu navegador Google Chrome. Além disso,foi desenvolvido em C++ com objetivo de aumentar a performance de execução do JavaScript.

Assim como o navegador, o Node.js roda o motor v8 por debaixo dos panos. Isso significa que com o Node é possível fazer o JavaScript ser interpretado fora do navegador.

### ⭐ Express

É um framework js que nos ajuda a lidar com requisições http.

## 🧭 Rotas

Uma rota nada mais é que, como o próprio nome diz, um caminho entre um ponto A e um ponto B.

No contexto da web, temos um Client Side fazendo uma requisição para o Server Side e para que isso ocorra é necessário ter rotas (caminhos) estabelecidos para que o cliente acesse os recursos oferecidos pelo servidor e para que o servidor mande as respostas corretamente.

> OBS: é comum se referir as rotas como "recursos".

## 🛠 Métodos HTTP ou Verbos HTTP

Para que uma API funcione corretamente é necessário não somente ter rotas bem estabelecidas como também a API precisa saber o objetivo das requisições.

Para isso que existe os métodos de requisições HTTP (os HTTP Verbs), eles indicam previamente qual é o objetivo da requisição.

| Método HTTP | Objetivo            |
| ----------- | ------------------- |
| GET         | Leitura             |
| POST        | Criação             |
| PUT         | Atualização         |
| DELETE      | Deleção             |
| PATCH       | Atualização parcial |

## 🗂 Estrutura do Projeto

É super importante pensar na estrutura pois dessa forma não nos perdemos durante o desenvolvimento, separamos as responsabilidades, deixamos o negócio escalável, fácil de dar manutenção, ou seja, só alegria :)

- Pasta `src`: nela colocamos os arquivos que nós vamos criar, separando dos arquivos de configuração (como o node_modules, .gitignore, package.json...).

- Arquivo `server.js`: responsável por inicializar a aplicação.

- Pasta `routes`: responsável pelas rotas da aplicação. Nela você tem o arquivo `index.js` que reuni todos os conjuntos de rotas (facilitando a importação delas para o server.js). Além disso, é bom separar os conjuntos de rotas da aplicação (ex: `user.routes.js` lida com rotas relacionadas ao usuário, `product.routes.js` lida com rotas relacionadas ao produto).

- Pasta `controllers`: responsável por lidar com a lógica trás das rotas, ou seja, essa é a camada responsável por processar as requisições e devolver as respostas - é a parte inteligente da nossa aplicação, aqui são desenvolvidas as regras de negócios, é a camada onde que de fato irá executar aquilo que o usuário solicitou (verificar se um usuário existe, cadastrar um produto, listar um produto, etc...). Cada conjunto de rotas terão seu controller específico.

  - Controllers normalmente são desenvolvidos como classes que podem possuir no máximo 5 métodos. Já há um padrão para cada um desses cinco métodos:

    - `index`: Método GET para listar vários registros.

    - `show`: Método GET para exibir um registro específico.

    - `create`: Método POST para criar um registro.

    - `update`: Método PUT para atualizar um registro.

    - `delete`: Método DELETE para remover um registro.

- Pasta `utils`: como o próprio nome diz, nessa pasta vamos desenvolver ferramentas que vão ser úteis para nossa aplicação (Exemplo: um script para padronizar mensagem para tratamento de erros).

- Pasta `database`: responsável por lidar com o banco de dados da aplicação. Dentro dessa pasta cria-se outra pasta responsável por conectar a aplicação com o banco de dados em questão e criar o arquivo `database.db` (Exemplo: pasta `sqlite`). Dessa form, automatiza-se o processo da criação do database.db. Além disso, dentro da pasta sqlite cria-se uma pasta `migrations` que será responsável por automatizar o processo de criação das tabelas do db.

## 🛑 HTTP Codes

Uma aplicação está o tempo todo recebendo requisições e devolvendo respostas e junto com as respostas pode-se anexar um HTTP Code (também chamado de Status Code).

Os HTTP Codes relacionam uma numeração com um estado da resposta de uma determinada requisição.

Eles estão agrupados por faixas numéricas:

- [1xx] Informativo - a solicitação foi aceita ou processamento continua em andamento.

  - 102 = Processando

- [2xx] Sucesso

  - 200 = Requisição bem sucedida

  - 201 = Criado, geralmente utilizado para o POST após uma inserção

- [3xx] Redirecionando

  - 301 = Movido permanentemente

  - 302 = Movido

- [4xx] Erro do cliente

  - 400 = Bad Request

  - 401 = Unauthorized

  - 404 = Not Found

- [5xx] Erro no servidor - o servidor falou ao concluir a solicitação

  - 500 = Erro interno

## 👮‍♂️ Middleware

O middleware é um meio de campo no caminho entre a criação de uma requisição no Client Side e o processamento dela no Server Side.

O middleware atua como um segurança que vai averiguar a requisição antes dela ser processada.

Ele é uma função que consegue interceptar a requisição, o middleware tem acesso a requisição antes dela chegar no destino final.

> Exemplo: no Cliente Side, é feita uma requisição para cadastrar um novo produto. Porém, apenas usuários administradores podem criar novos produtos. Tendo isso em vista, é necessário a criação de um middleware que intercepte a requisição e verifique se o usuário é um administrador.

Middleware são funções que possuem acessos ao objeto de solicitação (request), o objeto de resposta (response) e à próxima função de middleware no ciclo solicitação-resposta do aplicativo.

Essa próxima função é comumente denotada por uma variável chamada `next`.

Middleware's podem:

- Executar qualquer código;
- Fazer mudanças nos objetos de request e response;
- Encerrar o ciclo de solicitação-resposta;
- Chamar o próximo middleware na pilha.

## 🎲 Banco de Dados

Banco de Dados, o nome é bem sugestivo, é um **conjunto de dados**. Por exemplo, uma lista telefônica, um lista de compras, de convidados, de afazeres...

Todo Banco de Dados possui algum contexto. Por exemplo: Banco de Dados de um Loja, de uma Escola, de um Hospital, etc... A _interpretação_ desses contextos pode ser tão profundo que podemos chamá-los de **"Mini Mundo"**.

Dentro de um Mini Mundo existem elementos cruciais. Por exemplo: uma Escola possui Professores e Alunos. Dentro desse Mini Mundo, os Professores e Alunos são chamados de **Entidades**. Ambas entidades possuem nome e idade; Além disso, cada Professor possuí um salário e cada Aluno possuí um número de matrícula. Dentro desse Mini Mundo, essas características das entidades são chamadas de **Atributos**.

A estrutura de um Banco de Dados é constituída por **Tabelas** que representam as entidades do mini mundo; Cada **Coluna** das tabelas representam os atributos das entidades; E cada **Linha** das tabelas são um registro.

O Banco de Dados que possui essa estrutura é um **_Banco de Dados Relacional_**. Possui esse nome pois as tabelas podem possuírem relações entre si. Por exemplo: numa Escola os Professores dão Aula para os Alunos. Ou seja, nesse exemplo, há uma relação entre a tabela Professores e a tabela Alunos.

> Em resumo, um banco de dados é uma coleção de dados organizada em tabelas que se dividem por assuntos, cada tabela possuí seus registros e podem possuírem relações umas com as outras. (Ex: Banco de dados de uma Loja, há uma tabela de Clientes, uma tabela de Produtos e uma tabela de Vendas).

Tendo em vista essa visão inicial de Banco de Dados, vamos explorar outros conceitos.

Um atributo super comum de se ver em tabelas é o famoso **id**. Ele é um identificador único (ou seja, não se repete) para cada registro da tabela. Essa característica de ser único é tão importante que os atributos que possuem ela são chamados de **Chave Primária**. Então, por exemplo, em uma tabela de usuários cada usuário possuirá um id específico e único. Dessa forma, evita-se conflitos.

Quando uma tabela possui um relacionamento com outra surge outro conceito importante, a **Chave Estrangeira** (que nada mais é que a chave primária de outra tabela). Por exemplo, em uma escola "Professores ministram Disciplinas", logo, no banco de dados da escola, há uma tabela de Professores, uma tabela de Disciplinas e há uma relação entre ambas. Portanto, na tabela Professores deve haver o id relacionado a disciplina que ele ministra. Como o id de disciplina está na tabela de Professores mas não pertence a ela, esse atributo é considerado uma Chave Estrangeira.

Ainda sobre relacionamento, toda relação possui um **Cardinalidade** (frequência). Por exemplo, "um Professor pode ministrar várias Disciplinas mas uma Disciplina só pode ser Ministrada por um Professor." isso que dizer a relação Professor-Disciplina é de 1 para N (essa é a cardinalidade da relação).

## ⭐ Sistema de Gerenciamento de Banco de Dados (SGBD)

Um SGBD é uma ferramenta que nos ajuda a trabalhar com Banco de Dados. Com ele podemos visualizar de forma mais clara o BD e, consequentemente, manipulá-lo, organizá-lo e gerenciá-lo melhor.

## ⭐ SQL - Structured Query Language

É uma linguagem padrão para desenvolvimento de Banco de Dados Relacionais.

Os comandos SQL são divididos em dois grupos: Comandos DDL e Comandos DML.

### 🔨 Comandos DDL (Data Definition Language)

São comandos para definição de dados:

- `CREATE`
- `DROP`
- `ALTER`

> Criar Tabela e Colunas

```SQL
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR,
  email VARCHAR,
)
```

> Deletar Tabela

```SQL
DROP TABLE users
```

> Alterar nome da Tabela

```SQL
ALTER TABLE users
RENAME TO clients
```

> Adicionar Coluna

```SQL
ALTER TABLE users
ADD password VARCHAR
```

> Renomear Coluna

```SQL
ALTER TABLE users
RENAME COLUMN password TO senha
```

> Deletar Coluna

```SQL
ALTER TABLE users
DROP COLUMN password
```

### 🔧 Comandos DML (Data Manipulation Language)

São comandos para manipulação de dados.

As operações de manipulações de dados podem ser resumidas em 4 operações fundamentais: Criar, Ler, Atualizar e Deletar. É o famoso **CRUD**:

- C - Create | `INSERT`
- R - Read | `SELECT`
- U - Update | `UPDATE`
- D - Delete | `DELETE`

> Inserindo Dados na Tabela

```SQL
INSERT INTO users
(name, email, password)
VALUES
('Elias', 'elias@gmail.com', '123')
```

> Buscando Dados na Tabela

```SQL
SELECT * FROM users;
SELECT id, name, email, password FROM users;
SELECT name, email, password FROM users WHERE id = 1;
```

> Atualizando Dados na Tabela

```SQL
UPDATE users SET
name = "Elias Neto"
WHERE id = 1
```

> Deletando Dados na Tabela

```SQL
DELETE FROM users
WHERE id = 3
```

## 👷‍♂️ Query Builder

Query Builder é um Construtor de Consulta.

O Query Builder permite que você construa instruções SQL independente do banco de dados utilizado.

## 🎲 Migrations

É uma forma de versionar a base de dados.

Migrations trabalha na manipulação da base de dados: criando, alterando ou removendo.

### Métodos de uma Migration

- UP - responsável por criar ou alterar algo no banco de dados.

- DOWN - responsável pelo rollback, ou seja, desfazer as alterações realizadas pela migration.

## ⭐ Node Package Manager (NPM)

É o gerenciador de pacotes padrão para Node.js.

Os pacotes e módulos necessários no projeto Node são instalados usando npm.

E também utilizamos o npm para executar scripts e bibliotecas já instaladas.

## ⭐ Node Package Execute (NPX)

É um executador de pacotes npm que pode executar qualquer pacote que disponível no registro npm sem sequer instalar esse pacote.

<br>
<br>

<p align="center"> Desenvolvido com ❤ por Elias de Araújo Ferreira Neto 👋 <p>

<br>

<a href="../README.md">Voltar</a>
