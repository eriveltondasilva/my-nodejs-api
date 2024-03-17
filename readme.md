# API Node.js com Prisma e SQLite para Listagem de Livros

Este repositório apresenta uma API simples desenvolvida em Node.js, utilizando o ORM Prisma para interagir com um banco de dados SQLite. A principal funcionalidade da API é listar livros armazenados no banco de dados.

## Recursos

- **/api/books**: Endpoint para recuperar todos os livros armazenados no banco de dados.
- **/api/books/:id**: Endpoint para recuperar um livro específico armazenado no banco de dados.

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