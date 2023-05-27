# projetize-now

## To Do List

- [x] Criar variaveis de ambiente para DB e Server
  - [x] DB URI
  - [x] Server URL
  - [x] Pepper
- [x] Criar config.js para fornecer as variaveis de ambiente
- [x] Criar utils
  - [x] Criptografia de Password utilizando pepper+salt+iteracoes
  - [ ] logger e http-logger
- [x] Criar modelos do DB
  - [x] Project
  - [x] Task
  - [x] Team Member
  - [x] User
- [x] Criar validacoes nos schemas
  - [x] Project
  - [x] Task
  - [x] Team Member
  - [x] User
- [x] Definir rotas
  - [x] server
  - [x] Project
  - [x] Task
  - [x] Team Member
  - [x] User
- [x] Criar input validations nos Ctrls
  - [x] Project
  - [x] Task
  - [x] Team Member
  - [x] User
- [x] Criar middlewares
  - [x] Project
  - [x] Task
  - [x] Team Member
  - [x] User
- [x] Criar as rotas no servidor (CRUD)
  - [x] Create (POST /...)
  - [x] List (GET /...)
  - [x] Read (GET /.../:id)
  - [x] Update (PUT /.../:id)
  - [x] Destroy (DELETE /.../)
- [ ] Criar Controllers
  - [x] Project
  - [x] Task
  - [x] Team Member
  - [x] User
  - [ ] destroy: ON DELETE CASCADE
- [ ] Criar Services
  - [ ] Project
  - [ ] Task
  - [ ] Team Member
  - [ ] User

---

[express-validator](https://express-validator.github.io/docs/api/validation-chain)

Validation & Sanitization

Validação de entrada (Input validation)
Middleware de validação (Validation middleware)
Validação no esquema (Schema validation)

Unique deve ser validado no service atraves do count ou findOne.

Models - The schema definition of the Model
Routes - The API routes maps to the Controllers
Controllers - The controllers handles all the logic behind validating request parameters, query, Sending Responses with correct codes.
Services - The services contains the database queries and returning objects or throwing errors
