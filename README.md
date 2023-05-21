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
  - [x] Comment
  - [x] Project
  - [x] Task
  - [x] Team Member
  - [x] User
- [x] Criar validacoes nos schemas
  - [x] Comment
  - [x] Project
  - [x] Task
  - [x] Team Member
  - [x] User
- [x] Definir rotas
  - [x] server
  - [x] Comment
  - [x] Project
  - [x] Task
  - [x] Team Member
  - [x] User
- [x] Criar input validations
  - [x] Comment
  - [x] Project
  - [x] Task
  - [x] Team Member
  - [x] User
- [ ] Criar validation middlewares (verificar unique, etc.)
  - [ ] Comment
  - [ ] Project
  - [ ] Task
  - [ ] Team Member
  - [ ] User
- [x] Criar as rotas no servidor (CRUD)
  - [x] Create (POST /...)
  - [x] List (GET /...)
  - [x] Read (GET /.../:id)
  - [x] Update (PUT /.../:id)
  - [x] Destroy (DELETE /.../)
- [ ] Criar Controllers
  - [ ] Comment
  - [ ] Project
  - [ ] Task
  - [ ] Team Member
  - [ ] User
- [ ] Criar Services
  - [ ] Comment
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
