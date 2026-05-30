# support-tickets

A simple support ticket management API built with pure Node.js and no external server frameworks.

- project link: [support-tickets](./)
- link to the README (Português): [README.md](README.md)

## Required installations and tools used

1. Node.js
   - Install the stable LTS version from [https://nodejs.org](https://nodejs.org).
   - The project uses ECMAScript modules (`type: "module"`) and listens on port `3333`.

2. Insomnia (or another API client such as Postman)
   - Use Insomnia to send HTTP requests to the API endpoints.
   - Create `POST`, `GET`, `PUT`, `PATCH`, and `DELETE` requests to test ticket management.
   - Set the request header `Content-Type: application/json` when sending JSON bodies.

3. Code editor
   - Visual Studio Code is recommended for editing and navigating the project.
   - Helpful extensions: ESLint, Prettier, Node.js.

4. Terminal / command prompt
   - Run `npm install` if you add dependencies and `npm run dev` to start the server.

## Project objective

The goal of this project is to build a REST API using pure Node.js, without frameworks like Express.
The API manages support tickets with creation, listing, updating, closing, and deletion.
The focus is on understanding native routing, HTTP request handling, JSON parsing, and simple file-based persistence.

## Technologies Used

- Node.js
- Native Node HTTP module (`node:http`)
- Native ES6 module syntax (`import` / `export`)
- Manual routing system
- Local `Database` persistence
- Insomnia (for manual API testing)

## Features

- `POST /tickets` - create a new ticket with `equipment`, `description`, and `user_name`.
- `GET /tickets` - list all tickets.
- `GET /tickets?status=open|closed` - filter tickets by status.
- `PUT /tickets/:id` - update equipment and description for an existing ticket.
- `PATCH /tickets/:id/close` - mark a ticket as closed and add a solution.
- `DELETE /tickets/:id` - remove a ticket from the database.

## Insomnia request examples

1. `POST /tickets`
   - Method: POST
   - URL: `http://localhost:3333/tickets`
   - JSON body:
     ```json
     {
       "equipment": "Notebook",
       "description": "Screen freezes on startup",
       "user_name": "Maria"
     }
     ```

2. `GET /tickets`
   - Method: GET
   - URL: `http://localhost:3333/tickets`

3. `GET /tickets?status=open`
   - Method: GET
   - URL: `http://localhost:3333/tickets?status=open`

4. `PUT /tickets/:id`
   - Method: PUT
   - URL: `http://localhost:3333/tickets/<ticket-id>`
   - JSON body:
     ```json
     {
       "equipment": "Notebook",
       "description": "Screen freezes on startup after update"
     }
     ```

5. `PATCH /tickets/:id/close`
   - Method: PATCH
   - URL: `http://localhost:3333/tickets/<ticket-id>/close`
   - JSON body:
     ```json
     {
       "solution": "Updated the video driver"
     }
     ```

6. `DELETE /tickets/:id`
   - Method: DELETE
   - URL: `http://localhost:3333/tickets/<ticket-id>`

## Responsiveness

This project is a back-end API and does not include a responsive user interface. If it is extended in the future with a front-end, responsiveness will be addressed in that separate UI layer.
