# 🔄 Fluxo da Requisição - Como a API Processa Dados

Entenda exatamente o que acontece quando você faz uma requisição à API.

---

## 📊 Diagrama Geral

```
┌─────────────────┐
│     Cliente     │  (Insomnia, navegador, app)
│   (GET/POST)    │
└────────┬────────┘
         │ Requisição HTTP
         ▼
┌─────────────────────────────────────────┐
│          Express (server.ts)            │
│  ┌───────────────────────────────────┐  │
│  │ app.use(express.json())           │  │ Middleware global
│  │ Parse JSON do body                │  │
│  └─────────────┬─────────────────────┘  │
│                │                         │
│  ┌─────────────▼─────────────────────┐  │
│  │ app.use(routes)                   │  │ Roteamento
│  │ Direciona para rota correta       │  │
│  └─────────────┬─────────────────────┘  │
│                │                         │
│  ┌─────────────▼─────────────────────┐  │
│  │ productsRoutes                    │  │
│  │ GET / ou POST /                   │  │
│  └─────────────┬─────────────────────┘  │
│                │                         │
│  ┌─────────────▼─────────────────────┐  │
│  │ Middlewares (se POST)             │  │
│  │ myMiddleware (adiciona user_id)   │  │
│  └─────────────┬─────────────────────┘  │
│                │                         │
│  ┌─────────────▼─────────────────────┐  │
│  │ Controller (handler)              │  │
│  │ ProductsController.index/create() │  │
│  └─────────────┬─────────────────────┘  │
│                │                         │
│  ┌─────────────▼─────────────────────┐  │
│  │ Resposta HTTP                     │  │
│  │ response.json() ou response.send()│  │
│  └─────────────┬─────────────────────┘  │
└────────────────┼────────────────────────┘
                 │ Resposta HTTP
                 ▼
         ┌─────────────────┐
         │    Cliente      │
         │  (mostra dados) │
         └─────────────────┘
```

---

## 🔍 Fluxo Detalhado: GET /products/?page=1&limit=10

### 1️⃣ Requisição Chega

```http
GET /products/?page=1&limit=10 HTTP/1.1
Host: localhost:3333
```

### 2️⃣ Middleware Global: express.json()

```typescript
// server.ts
app.use(express.json());
```

**O que faz:**

- Lê o corpo da requisição (se existir)
- Converte de texto para objeto JavaScript
- Deixa em `request.body`

**Para GET:** Não há body, então passa direto

### 3️⃣ Roteamento: routes

```typescript
// routes/index.ts
routes.use("/products", productsRoutes);
```

**O que faz:**

- Verifica se URL começa com `/products`
- Se sim, passa para `productsRoutes`
- Se não, error 404

**Nossa URL:** `GET /products/?page=1&limit=10` ✓ Passa

### 4️⃣ Roteamento Específico: productsRoutes

```typescript
// routes/products-routes.ts
productsRoutes.get("/", productsController.index);
```

**O que faz:**

- Verifica se método é GET
- Verifica se caminho é "/" (relativo a /products)
- Se ambos combinar, executa controller

**Nossa URL:** `GET /` (relativo a /products) ✓ Passa

### 5️⃣ Sem Middlewares (GET não tem)

Para GET, nenhum middleware extra

```typescript
productsRoutes.get("/", productsController.index);
// Sem myMiddleware
```

### 6️⃣ Controller: ProductsController.index()

```typescript
index ( request: Request, response: Response ) {
    const { page, limit } = request.query
    response.send(`Página ${ page } de ${ limit }`)
}
```

**request.query:**

```javascript
{
  page: "1",   // sempre string
  limit: "10"
}
```

**Resposta enviada:**

```
Página 1 de 10
```

### 7️⃣ Resposta Retorna ao Cliente

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Content-Length: 14

Página 1 de 10
```

---

## 🔍 Fluxo Detalhado: POST /products/ (Sucesso)

### 1️⃣ Requisição Chega

```http
POST /products/ HTTP/1.1
Host: localhost:3333
Content-Type: application/json
Content-Length: 37

{"name":"Notebook","price":2500}
```

### 2️⃣ Middleware Global: express.json()

**O que faz:**

- Lê body: `{"name":"Notebook","price":2500}`
- Converte para objeto JavaScript
- Deixa em `request.body`

**request.body:**

```javascript
{
  name: "Notebook",
  price: 2500
}
```

### 3️⃣ Roteamento: routes

```typescript
routes.use("/products", productsRoutes);
```

Verifica: `POST /products/` ✓ Passa

### 4️⃣ Roteamento Específico: productsRoutes

```typescript
productsRoutes.post("/", myMiddleware, productsController.create);
```

Verifica:

- Método é POST? ✓ Sim
- Caminho é "/"? ✓ Sim
- Então executa middlewares e controller

### 5️⃣ Middleware: myMiddleware

```typescript
export function myMiddleware(request, response, next) {
  request.user_id = "123456";
  return next();
}
```

**O que faz:**

- Adiciona `user_id` ao request
- Chama `next()` para continuar

**request agora tem:**

```javascript
{
  body: { name: "Notebook", price: 2500 },
  user_id: "123456"
}
```

### 6️⃣ Controller: ProductsController.create()

#### 6.1 Definir Schema Zod

```typescript
const bodySchema = z.object({
  name: z.string({ required_error: "Name is required" }).trim().min(3),
  price: z.number({ required_error: "Price is required" }).positive(),
});
```

#### 6.2 Validar Dados

```typescript
const { name, price } = bodySchema.parse(request.body);
```

**Validações:**

- ✓ `name` é string? Sim
- ✓ `name` tem ≥3 chars? "Notebook" = 8 ✓
- ✓ `price` é número? Sim
- ✓ `price` é positivo? 2500 > 0 ✓

**Resultado:**

```javascript
{
  name: "Notebook",
  price: 2500
}
```

#### 6.3 Enviar Resposta

```typescript
response.status(201).json({
  name,
  price,
  user_id: request.user_id,
});
```

### 7️⃣ Resposta Retorna ao Cliente

```http
HTTP/1.1 201 Created
Content-Type: application/json
Content-Length: 48

{"name":"Notebook","price":2500,"user_id":"123456"}
```

---

## 🔍 Fluxo com Erro: POST /products/ (Validação Falha)

### 1️⃣ Requisição Chega (name faltando)

```http
POST /products/ HTTP/1.1
Content-Type: application/json

{"price":2500}
```

### 2️⃣ express.json()

```javascript
request.body = {
  price: 2500,
  // name não existe!
};
```

### 3️⃣ Roteamento Passa

`POST /products/` ✓ Passa

### 4️⃣ Middleware Passa

`user_id` adicionado ✓ Passa

### 5️⃣ Controller: Validação Falha

```typescript
const { name, price } = bodySchema.parse(request.body);
// ❌ name não existe
// ❌ Zod detecta erro: "Name is required"
// ❌ Lança ZodError
```

### 6️⃣ Erro Não é Capturado (pula para tratamento)

Como nenhum `try/catch` captura o erro, a requisição morre.

### 7️⃣ Middleware de Erro Captura (server.ts)

```typescript
app.use((error: any, request, response, _) => {
  if (error instanceof ZodError) {
    return response.status(400).json({
      message: "Validation error!",
      issues: error.format(),
    });
  }
  response.status(500).json({ message: error.message });
});
```

**O que faz:**

- Verifica se é `ZodError` ✓ Sim
- Retorna status 400
- Formata erro do Zod

### 8️⃣ Resposta ao Cliente

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "message": "Validation error!",
  "issues": {
    "name": {
      "_errors": ["Name is required"]
    }
  }
}
```

---

## 📋 Resumo dos Pontos Chave

### Ordem de Execução

```
1. request.body é parseado (express.json)
2. Rota é encontrada (rotas combinam)
3. Middlewares executam (se houver)
4. Controller executa (handler)
5. Resposta é enviada
6. Se erro: middleware de erro captura
```

### Para GET

```
request → parse json → match route → controller.index() → response
```

### Para POST

```
request → parse json → match route → middleware → controller.create() → response
          ↓ error → error handler → error response
```

### Fluxo de Erro

```
Erro em qualquer lugar
    ↓
Middleware de erro (server.ts)
    ↓
Verifica tipo de erro (AppError? ZodError? genérico?)
    ↓
Formata resposta apropriada
    ↓
Status code + JSON body
```

---

## 🎯 Casos de Uso

### Caso 1: Listar com Paginação (GET)

```
GET /products/?page=2&limit=20

→ Nenhuma validação necessária
→ Query é lido direto do URL
→ Resposta: Página 2 de 20
```

### Caso 2: Criar Produto Válido (POST)

```
POST /products/
{"name":"Mouse","price":150}

→ JSON parseado
→ myMiddleware adiciona user_id
→ Zod valida todos os campos
→ Controller responde com status 201
→ Cliente recebe produto criado
```

### Caso 3: Criar Produto Inválido (POST)

```
POST /products/
{"name":"AB","price":-50}

→ JSON parseado
→ myMiddleware adiciona user_id
→ Zod valida:
   ✗ name tem < 3 caracteres
   ✗ price é negativo
→ ZodError lançado
→ Error handler captura
→ Cliente recebe status 400 + erros
```

### Caso 4: Rota não Existe

```
GET /invalid

→ Routes não encontra combinação
→ Express retorna 404 automaticamente
→ Cliente recebe: Cannot GET /invalid
```

---

## 🔌 Interconexão de Arquivos

```
server.ts (aplicação principal)
    ↓ importa
    ├─ routes/index.ts (agregador de rotas)
    │   ↓ importa
    │   └─ routes/products-routes.ts (rotas específicas)
    │       ↓ importa
    │       ├─ controllers/ProductsController.ts
    │       └─ middlewares/myMiddleware.ts
    │
    ├─ utils/AppError.ts (erro customizado)
    └─ middlewares de erro (dentro de server.ts)
```

---

## 💾 Estado da Request

### GET /products/?page=1&limit=10

```javascript
// Ao chegar no controller:
request = {
  method: "GET",
  url: "/products/?page=1&limit=10",
  query: {
    page: "1",
    limit: "10"
  },
  body: {},  // GET não tem body
  headers: { ... },
  // Sem user_id (não há middleware para GET)
}
```

### POST /products/ (após middlewares)

```javascript
// Ao chegar no controller:
request = {
  method: "POST",
  url: "/products/",
  query: {}, // POST não tem query
  body: {
    name: "Notebook",
    price: 2500,
  },
  headers: {
    "content-type": "application/json",
  },
  user_id: "123456", // adicionado por myMiddleware
};
```

---

## 📍 Pontos de Falha Comuns

| Ponto             | Problema               | Solução                           |
| ----------------- | ---------------------- | --------------------------------- |
| 1. express.json() | Body não é parseado    | Cheque Content-Type               |
| 2. Roteamento     | Rota não encontrada    | Verifique URL e método            |
| 3. Middleware     | user_id não existe     | Cheque se middleware é registrado |
| 4. Validação Zod  | Dados inválidos        | Verifique schema vs dados         |
| 5. Response       | Cliente fica esperando | Cheque se `next()` foi chamado    |
| 6. Error Handler  | Erro não tratado       | Middleware de erro captura tudo   |

---

## 🎓 Para Aprender Mais

- [Express Middleware](https://expressjs.com/en/guide/using-middleware.html)
- [Zod Validation](https://zod.dev/)
- [HTTP Status Codes](https://httpwg.org/specs/rfc7231.html#status.codes)
- [MVC Pattern](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

---

Entendeu como uma requisição flui pela aplicação? Parabéns! 🎉
