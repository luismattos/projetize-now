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
- [ ] Definir rotas
  - [ ] Comment
  - [ ] Project
  - [ ] Task
  - [ ] Team Member
  - [ ] User
- [ ] Criar validacoes de entrada e middlewares de Validacao para cada rota
  - [ ] Comment
  - [ ] Project
  - [ ] Task
  - [ ] Team Member
  - [x] User
- [ ] Criar as rotas no servidor (CRUD)
  - [ ] Create (POST /...)
  - [ ] List (GET /...)
  - [ ] Read (GET /.../:id)
  - [ ] Update (PUT /.../:id)
  - [ ] Destroy (DELETE /.../)
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

Validation & Sanitization

Validação de entrada (Input validation)
Middleware de validação (Validation middleware)
Validação no esquema (Schema validation)

Unique deve ser validado no service atraves do count ou findOne.
