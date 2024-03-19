# Uma API Node.js com Prisma e SQLite para Gerenciamento de Livros

Este repositório apresenta uma API desenvolvida em Node.js, utilizando o ORM Prisma para interagir com um banco de dados SQLite. A principal funcionalidade da API é realizar operações CRUD (Create, Read, Update, Delete) com os dados de livros armazenados no banco de dados.

## Recursos

### Recuperar todos os livros
- Endpoint: `/api/books`
- Método HTTP: GET
- Descrição: Retorna todos os livros armazenados no banco de dados.

### Recuperar um livro específico
- Endpoint: `/api/books/:id`
- Método HTTP: GET
- Parâmetros:
  - `id`: Identificador único do livro.
- Descrição: Retorna um livro específico com base no ID fornecido.

### Criar um novo livro
- Endpoint: `/api/books`
- Método HTTP: POST
- Corpo da requisição: JSON contendo os dados do novo livro a ser criado.
- Descrição: Cria um novo livro com os dados fornecidos e o armazena no banco de dados.

### Atualizar um livro existente
- Endpoint: `/api/books/:id`
- Método HTTP: PUT
- Parâmetros:
  - `id`: Identificador único do livro a ser atualizado.
- Corpo da requisição: JSON contendo os dados atualizados do livro.
- Descrição: Atualiza os dados de um livro existente com base no ID fornecido.

### Excluir um livro existente
- Endpoint: `/api/books/:id`
- Método HTTP: DELETE
- Parâmetros:
  - `id`: Identificador único do livro a ser excluído.
- Descrição: Remove um livro existente com base no ID fornecido.

## Como Utilizar

1. Clone este repositório em sua máquina local.
2. Instale as dependências utilizando `npm install`.
3. Execute o servidor com o comando `node index.js`.
4. Acesse as rotas da API utilizando um cliente de API, como o Postman ou o Insomnia.

## Tecnologias Utilizadas

- Node.js
- Express
- Prisma ORM
- SQLite
- Vercel

## Deploy

Esta API está implementada na Vercel para facilitar o acesso e a utilização. Você pode acessá-la [aqui](https://my-nodejs-api.vercel.app/).

Este projeto serve como um excelente ponto de partida para explorar o desenvolvimento de APIs em Node.js e o uso do Prisma como ORM para interagir com bancos de dados SQLite, especialmente focado na gestão e listagem de livros, e o deploy de aplicações com essas tecnologias na vercel, de forma rápida e fácil.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença
Este projeto está licenciado sob a Licença MIT.
