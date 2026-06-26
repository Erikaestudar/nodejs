# 📋 Detalhes dos Arquivos - API REST

## Estrutura do Projeto

```
api-rest/
├── src/
│   ├── server.ts              ← Arquivo principal da aplicação
│   ├── controllers/
│   │   └── ProductsController.ts
│   ├── routes/
│   │   ├── index.ts
│   │   └── products-routes.ts
│   ├── middlewares/
│   │   └── myMiddleware.ts
│   ├── types/
│   │   └── request.d.ts
│   ├── utils/
│   │   └── AppError.ts
│   └── doc/                   ← Você está aqui
├── package.json
├── tsconfig.json
└── .gitignore
```

---

# 1️⃣ server.ts - Arquivo Principal

## Localização

`src/server.ts`

## Código Completo

```typescript
import express, { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

import { routes } from "./routes";

import { AppError } from "./utils/AppError";

const PORT = 3333;

const app = express();

app.use(express.json());
app.use(routes);

app.use((error: any, request: Request, response: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  if (error instanceof ZodError) {
    return response
      .status(400)
      .json({ message: "Validation error!", issues: error.format() });
  }
  response.status(500).json({ message: error.message });
});

app.listen(PORT, () => console.log(`server is running at ${PORT}`));
```

## Explicação Linha por Linha

### Imports

```typescript
import express, { Request, Response, NextFunction } from "express";
```

- **express**: Framework web principal
- **Request, Response, NextFunction**: Tipos do Express para TypeScript
  - **Request**: Objeto com dados da requisição (query, body, params)
  - **Response**: Objeto para enviar resposta ao cliente
  - **NextFunction**: Função para chamar próximo middleware

```typescript
import { ZodError } from "zod";
```

- Importa o tipo de erro do Zod (erros de validação)

```typescript
import { routes } from "./routes";
```

- Importa o arquivo de rotas (que estão organizadas em outro arquivo)

```typescript
import { AppError } from "./utils/AppError";
```

- Importa classe customizada para erros da aplicação

### Configuração

```typescript
const PORT = 3333;
const app = express();
```

- Define porta 3333 (qualquer número de 1024 a 65535)
- Cria a aplicação Express

### Middlewares Globais

```typescript
app.use(express.json());
```

- **Middleware** que processa JSON no corpo das requisições
- Sem isso, `req.body` seria undefined

```typescript
app.use(routes);
```

- Registra todas as rotas definidas em `./routes`

### Tratamento de Erros (Error Handler)

```typescript
app.use(( error: any, request: Request, response: Response, _: NextFunction ) => {
```

- **Middleware especial** para tratamento de erros
- Deve ser registrado **POR ÚLTIMO**
- **Parâmetro `_`**: Não usamos NextFunction, mas precisa estar na assinatura

```typescript
if (error instanceof AppError) {
  return response.status(error.statusCode).json({ message: error.message });
}
```

- Se o erro é um `AppError` (customizado), retorna com status code apropriado
- `instanceof`: verifica se objeto é instância de uma classe

```typescript
if (error instanceof ZodError) {
  return response
    .status(400)
    .json({ message: "Validation error!", issues: error.format() });
}
```

- Se o erro é do Zod (validação), retorna status 400 (Bad Request)
- `error.format()`: formata os erros de validação de forma legível

```typescript
response.status(500).json({ message: error.message });
```

- Para qualquer outro erro, retorna status 500 (Internal Server Error)

### Iniciar Servidor

```typescript
app.listen(PORT, () => console.log(`server is running at ${PORT}`));
```

- Inicia o servidor na porta 3333
- Callback imprime mensagem quando servidor inicia

---

# 2️⃣ controllers/ProductsController.ts

## Localização

`src/controllers/ProductsController.ts`

## Código Completo

```typescript
import { Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { z } from "zod";

class ProductsController {
  index(request: Request, response: Response) {
    const { page, limit } = request.query;

    response.send(`Página ${page} de ${limit}`);
  }

  create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be 3 or more characters" }),
      price: z
        .number({ required_error: " Price is required" })
        .positive({ message: "Price must be positive" }),
    });

    const { name, price } = bodySchema.parse(request.body);

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };
```

## Conceito: O que é Controller?

**Controller** (Controlador) é uma **classe com métodos** que tratam requisições HTTP.

```
Cliente → HTTP Request → Rota → Controller → Response
```

## Explicação

### Classe ProductsController

```typescript
class ProductsController {
  // métodos aqui
}
```

- Encapsula lógica relacionada a Produtos
- **Padrão MVC**: Separar lógica de apresentação

### Método index()

```typescript
index ( request: Request, response: Response ) {
    const { page, limit } = request.query
    response.send(`Página ${ page } de ${ limit }`)
}
```

**O que faz:**

- Lista produtos (pagina específica)
- Extrai `page` e `limit` da query string

**Exemplo de URL:**

```
GET /products?page=1&limit=10
```

**request.query:**

```javascript
{
  page: "1",      // sempre string na query
  limit: "10"
}
```

**Resposta:**

```
Página 1 de 10
```

### Método create()

```typescript
create ( request: Request, response: Response ) {
```

**O que faz:** Cria novo produto com validação

#### Definir Schema de Validação

```typescript
const bodySchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be 3 or more characters" }),
  price: z
    .number({ required_error: " Price is required" })
    .positive({ message: "Price must be positive" }),
});
```

**z.object()**: Define estrutura esperada

```typescript
name: z.string({ required_error: "Name is required" }) // deve ser string
  .trim() // remove espaços
  .min(3, { message: "Name must be 3 or more characters" }); // mínimo 3 chars
```

**Validações:**

- ✓ Deve ser string
- ✓ Não pode estar vazio (required)
- ✓ Mínimo 3 caracteres
- ✓ Espaços no início/fim são removidos

```typescript
price: z.number({ required_error: " Price is required" }) // deve ser número
  .positive({ message: "Price must be positive" }); // maior que 0
```

**Validações:**

- ✓ Deve ser número
- ✓ Não pode estar vazio
- ✓ Deve ser maior que 0

#### Executar Validação

```typescript
const { name, price } = bodySchema.parse(request.body);
```

- `.parse()`: Valida os dados
- Se **válido**: Retorna objeto com `name` e `price`
- Se **inválido**: Lança `ZodError` (capturado no server.ts)

#### Responder com Status 201 (Created)

```typescript
response.status(201).json({ name, price, user_id: request.user_id });
```

- **Status 201**: Recurso criado com sucesso
- **Retorna:** Objeto com dados do produto + user_id (do middleware)

**Resposta Exemplo:**

```json
{
  "name": "Notebook",
  "price": 2500,
  "user_id": "123456"
}
```

### Exportar Classe

```typescript
export { ProductsController };
```

Permite usar em outros arquivos:

```typescript
import { ProductsController } from "./ProductsController";
```

---

# 3️⃣ routes/index.ts

## Localização

`src/routes/index.ts`

## Código Completo

```typescript
import { Router } from "express";

import { productsRoutes } from "./products-routes";

const routes = Router();

routes.use("/products", productsRoutes);

export { routes };
```

## Explicação

### O que é um Router?

**Router** = Objeto que agrupa rotas relacionadas

```typescript
import { Router } from "express";
const routes = Router();
```

### Registrar Sub-rotas

```typescript
routes.use("/products", productsRoutes);
```

- **"/products"**: Prefixo de caminho
- **productsRoutes**: Router importado de outro arquivo

**Resultado:**

- Rotas em `productRoutes` começam com `/products`
- Exemplo: `/products` + `/` = `/products/`
- Exemplo: `/products` + `/123` = `/products/123`

### Padrão: Separar Rotas por Recurso

```
routes/
├── index.ts           ← agrupa tudo
├── products-routes.ts ← rotas de produtos
├── users-routes.ts    ← rotas de usuários (futuro)
└── orders-routes.ts   ← rotas de pedidos (futuro)
```

**Benefício:** Código organizado e escalável

---

# 4️⃣ routes/products-routes.ts

## Localização

`src/routes/products-routes.ts`

## Código Completo

```typescript
import { Router } from "express";
import { myMiddleware } from "../middlewares/myMiddleware";
import { ProductsController } from "../controllers/ProductsController";

const productsRoutes = Router();

const productsController = new ProductsController();

productsRoutes.get("/", productsController.index);

productsRoutes.post("/", myMiddleware, productsController.create);

export { productsRoutes };
```

## Explicação

### Criar Router

```typescript
const productsRoutes = Router();
```

### Instanciar Controller

```typescript
const productsController = new ProductsController();
```

Cria uma instância da classe `ProductsController`

### Definir Rotas GET

```typescript
productsRoutes.get("/", productsController.index);
```

**Sintaxe:**

```
.get(caminho, [middlewares], handler)
```

**Significado:**

- **método**: GET
- **caminho**: "/" (relativo a `/products`)
- **handler**: Função `index` do controller

**URL Completa:** `GET /products/`

**Fluxo:**

```
Cliente → GET /products/ → index()
```

### Definir Rotas POST com Middleware

```typescript
productsRoutes.post("/", myMiddleware, productsController.create);
```

**Sintaxe:**

```
.post(caminho, [middlewares...], handler)
```

**Significado:**

- **método**: POST
- **caminho**: "/" (relativo a `/products`)
- **middleware**: `myMiddleware` executa antes
- **handler**: Função `create` do controller

**URL Completa:** `POST /products/`

**Fluxo:**

```
Cliente → POST /products/
  → myMiddleware (adiciona user_id)
  → create() (valida e salva)
```

---

# 5️⃣ middlewares/myMiddleware.ts

## Localização

`src/middlewares/myMiddleware.ts`

## Código Completo

```typescript
import { Request, Response, NextFunction } from "express";

export function myMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  request.user_id = "123456";

  return next();
}
```

## Conceito: O que é Middleware?

**Middleware** = Função que **intercepta** requisições antes do handler final.

```
Request → Middleware 1 → Middleware 2 → Handler → Response
```

## Explicação

### Assinatura Padrão

```typescript
export function myMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
);
```

**Parâmetros obrigatórios:**

- **Request**: Dados da requisição
- **Response**: Objeto para responder
- **NextFunction**: Função para passar para próximo middleware

### Adicionar Propriedade ao Request

```typescript
request.user_id = "123456";
```

- Adiciona propriedade `user_id` ao objeto `request`
- Será acessível no controller: `request.user_id`

**Nota:** Isso faz um "tipo incorreto" em TypeScript. Para corrigir, veja `types/request.d.ts`

### Chamar Próximo Middleware

```typescript
return next();
```

- **Obrigatório**: Sem isso, a requisição não continua
- Passa para próximo middleware ou handler

**Sem `next()`:**

```
Request → Middleware PARA AQUI → Cliente fica esperando ⏳
```

---

# 6️⃣ types/request.d.ts

## Localização

`src/types/request.d.ts`

## Código Esperado

```typescript
declare global {
  namespace Express {
    interface Request {
      user_id?: string;
    }
  }
}
```

## Explicação

### O Problema

No middleware adicionamos:

```typescript
request.user_id = "123456";
```

Mas TypeScript reclama:

```
❌ Property 'user_id' does not exist on type 'Request'
```

### A Solução: Augmentation

**Declaration Merging** = Estender tipo existente

```typescript
declare global {
  namespace Express {
    interface Request {
      user_id?: string;
    }
  }
}
```

**O que faz:**

1. `declare global`: Declara globalmente
2. `namespace Express`: Entra no namespace do Express
3. `interface Request`: Estende tipo Request
4. `user_id?: string`: Adiciona propriedade opcional

**Resultado:**

```typescript
// Agora TypeScript aceita:
request.user_id = "123456"  ✓ Sem erro

// E sabe o tipo:
const id: string | undefined = request.user_id  ✓ Correto
```

---

# 7️⃣ utils/AppError.ts

## Localização

`src/utils/AppError.ts`

## Código Completo

```typescript
class AppError {
  message: string;
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
export { AppError };
```

## Conceito: Error Customizado

Em vez de lançar erro genérico:

```typescript
throw new Error("Product not found"); // sem status code
```

Usar erro customizado:

```typescript
throw new AppError("Product not found", 404); // com status code
```

## Explicação

### Propriedades

```typescript
class AppError {
    message: string
    statusCode: number
```

- **message**: Mensagem de erro legível
- **statusCode**: HTTP status code (404, 400, 500, etc)

### Construtor

```typescript
constructor ( message:string, statusCode: number = 400) {
    this.message = message
    this.statusCode = statusCode
}
```

**Parâmetros:**

- **message**: Obrigatório - mensagem de erro
- **statusCode**: Opcional - padrão 400 (Bad Request)

**Exemplos de uso:**

```typescript
// Sem especificar status (usa 400)
throw new AppError("Nome é obrigatório");

// Especificando status 404
throw new AppError("Produto não encontrado", 404);

// Especificando status 403
throw new AppError("Acesso negado", 403);

// Especificando status 401
throw new AppError("Não autenticado", 401);
```

### Como é Capturada

No `server.ts`:

```typescript
if (error instanceof AppError) {
  return response.status(error.statusCode).json({ message: error.message });
}
```

**Fluxo:**

```
throw new AppError("Produto não encontrado", 404)
  ↓
Capturado no middleware de erro
  ↓
response.status(404).json({ message: "Produto não encontrado" })
  ↓
Cliente recebe: 404 - "Produto não encontrado"
```

---

## Resumo da Arquitetura

```
REQUISIÇÃO HTTP
    ↓
[Routes] (routes/)
  ↓
[Controller] (controllers/)
  → Valida dados (Zod)
  → Processa lógica
  → Retorna resposta
    ↓
[Error Handler] (server.ts)
  → Captura erros
  → Formata resposta
    ↓
RESPOSTA HTTP
```

---

## Padrão MVC

| Camada             | Arquivo        | Função                 |
| ------------------ | -------------- | ---------------------- |
| **V** (View)       | N/A            | Cliente recebe JSON    |
| **C** (Controller) | `controllers/` | Lógica de negócio      |
| **M** (Model)      | N/A            | Futura: banco de dados |

---

## Próximos Passos

- Ver **`06-TESTES-INSOMNIA.md`** para aprender a testar as rotas
