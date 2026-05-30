# support-tickets

Uma API simples para gerenciamento de tickets de suporte, construída com Node.js puro e sem frameworks de servidor externos.

- link do projeto: [support-tickets](./)
- link para o README (Inglês): [README-en.md](README-en.md)

## Instalações necessárias e programas utilizados

1. Node.js
   - Instale a versão LTS estável de [https://nodejs.org](https://nodejs.org).
   - O projeto usa módulos ECMAScript (`type: "module"`) e escuta na porta `3333`.

2. Insomnia (ou outra ferramenta de API como Postman)
   - Use o Insomnia para enviar requisições HTTP aos endpoints da API.
   - Crie requisições `POST`, `GET`, `PUT`, `PATCH` e `DELETE` para testar a rotina de tickets.
   - Configure headers: `Content-Type: application/json` para enviar o corpo JSON.

3. Editor de código
   - Recomenda-se Visual Studio Code para edição e navegação do projeto.
   - Extensões úteis: ESLint, Prettier, Node.js.

4. Terminal / Prompt de comando
   - Execute `npm install` caso tenha dependências adicionais e `npm run dev` para iniciar o servidor.

## Objetivo do projeto

O objetivo do projeto é construir uma API REST básica usando Node.js puro, sem frameworks como Express.
A API deve gerenciar tickets de suporte com criação, listagem, atualização, fechamento e remoção.
O foco é entender manipulação de rotas, requisições HTTP nativas, tratamento de JSON e persistência simples em um arquivo de banco de dados.

## Tecnologias Utilizadas

- Node.js
- HTTP nativo do Node (`node:http`)
- Módulos ES6 nativos (`import` / `export`)
- Sistema de rotas manual
- Persistência simples via `Database` local
- Insomnia (para testes manual de API)

## Funcionalidades

- `POST /tickets` - cria um novo ticket com `equipment`, `description` e `user_name`.
- `GET /tickets` - lista todos os tickets.
- `GET /tickets?status=open|closed` - filtra tickets por status.
- `PUT /tickets/:id` - atualiza equipamento e descrição de um ticket existente.
- `PATCH /tickets/:id/close` - marca o ticket como fechado e adiciona a solução.
- `DELETE /tickets/:id` - remove o ticket do banco.

## Exemplos de requisições com Insomnia

1. `POST /tickets`
   - Método: POST
   - URL: `http://localhost:3333/tickets`
   - Body JSON:
     ```json
     {
       "equipment": "Notebook",
       "description": "Tela travando ao iniciar",
       "user_name": "Maria"
     }
     ```

2. `GET /tickets`
   - Método: GET
   - URL: `http://localhost:3333/tickets`

3. `GET /tickets?status=open`
   - Método: GET
   - URL: `http://localhost:3333/tickets?status=open`

4. `PUT /tickets/:id`
   - Método: PUT
   - URL: `http://localhost:3333/tickets/<ticket-id>`
   - Body JSON:
     ```json
     {
       "equipment": "Notebook",
       "description": "Tela travando ao iniciar após atualização"
     }
     ```

5. `PATCH /tickets/:id/close`
   - Método: PATCH
   - URL: `http://localhost:3333/tickets/<ticket-id>/close`
   - Body JSON:
     ```json
     {
       "solution": "Atualizei o driver da placa de vídeo"
     }
     ```

6. `DELETE /tickets/:id`
   - Método: DELETE
   - URL: `http://localhost:3333/tickets/<ticket-id>`

## Responsividade

Este projeto é uma API back-end e não possui interface responsiva de usuário. Caso seja estendido no futuro para front-end, a responsividade será aplicada a partir de uma interface web separada.
