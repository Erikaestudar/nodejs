# 🧪 Testes Detalhados no Insomnia - API REST

## O que é Insomnia?

**Insomnia** = Cliente HTTP para testar APIs

- Similar ao Postman
- Usado para fazer requisições HTTP
- Mostra responses, headers, status codes
- Gratis e open-source

[Download Insomnia](https://insomnia.rest/download)

---

## Instalação e Configuração

### 1. Baixar e Instalar

- Visite [insomnia.rest/download](https://insomnia.rest/download)
- Escolha seu SO (Windows, Mac, Linux)
- Execute o instalador

### 2. Criar Workspace

1. Abra o Insomnia
2. Clique em "Create New Workspace"
3. Nome: "api-rest"
4. Clique em "Create"

### 3. Criar Pasta de Requisições

1. Clique em "+" ou em "New Folder"
2. Nome: "Products"

---

## Teste 1: GET /products/ (Listar Produtos)

### Configuração

| Campo      | Valor                           |
| ---------- | ------------------------------- |
| **Método** | GET                             |
| **URL**    | http://localhost:3333/products/ |

### Passo a Passo

1. **Novo Request**
   - Clique em "+" next to "Products"
   - Escolha "HTTP Request"

2. **Configurar Requisição**
   - Campo superior esquerdo: selecione "GET"
   - Campo URL: `http://localhost:3333/products/?page=1&limit=10`

3. **Adicionar Parâmetros Query**

   **Opção 1: Digitar na URL**

   ```
   http://localhost:3333/products/?page=1&limit=10
   ```

   **Opção 2: Usar aba Query**
   - Clique na aba "Query"
   - Adicione parâmetros:
     - Key: `page` | Value: `1`
     - Key: `limit` | Value: `10`

4. **Enviar Requisição**
   - Clique no botão "Send" (ou Ctrl+Enter)

### Response Esperada

**Status:** 200 OK

**Body:**

```
Página 1 de 10
```

**Headers:**

```
Content-Type: text/html; charset=utf-8
Content-Length: 14
```

### Exemplos Adicionais

#### Exemplo 2: Página 2, limite 20

```
GET http://localhost:3333/products/?page=2&limit=20
```

**Response:**

```
Página 2 de 20
```

#### Exemplo 3: Sem query parameters

```
GET http://localhost:3333/products/
```

**Response:**

```
Página undefined de undefined
```

#### Exemplo 4: Apenas page

```
GET http://localhost:3333/products/?page=5
```

**Response:**

```
Página 5 de undefined
```

---

## Teste 2: POST /products/ (Criar Produto)

### Configuração Base

| Campo            | Valor                           |
| ---------------- | ------------------------------- |
| **Método**       | POST                            |
| **URL**          | http://localhost:3333/products/ |
| **Content-Type** | application/json                |

### Passo a Passo

1. **Novo Request**
   - Clique em "+" next to "Products"
   - Escolha "HTTP Request"

2. **Configurar Método**
   - Mude para "POST"

3. **Configurar URL**
   - URL: `http://localhost:3333/products/`

4. **Adicionar Headers**
   - Clique na aba "Header"
   - Insomnia **adiciona automaticamente** `Content-Type: application/json`

5. **Adicionar Body**
   - Clique na aba "Body"
   - Selecione "JSON" (ou "application/json")
   - Cole:

   ```json
   {
     "name": "Notebook Dell",
     "price": 2500.0
   }
   ```

6. **Enviar**
   - Clique em "Send"

### Response Esperada (Sucesso)

**Status:** 201 Created

**Body:**

```json
{
  "name": "Notebook Dell",
  "price": 2500,
  "user_id": "123456"
}
```

**Explicação:**

- **Status 201**: Recurso criado com sucesso
- **name**: Mesmo nome enviado
- **price**: Mesmo preço enviado
- **user_id**: Adicionado pelo middleware

---

### Teste 2A: Validação - Nome Faltando

#### Requisição

```json
{
  "price": 1500.0
}
```

#### Response Esperada (Erro)

**Status:** 400 Bad Request

**Body:**

```json
{
  "message": "Validation error!",
  "issues": {
    "name": {
      "_errors": ["Name is required"]
    }
  }
}
```

**O que aconteceu:**

- Zod validou o body
- Campo `name` é obrigatório
- Lançou `ZodError`
- Middleware de erro capturou e retornou 400

---

### Teste 2B: Validação - Nome Muito Curto

#### Requisição

```json
{
  "name": "AB",
  "price": 1500.0
}
```

#### Response Esperada (Erro)

**Status:** 400 Bad Request

**Body:**

```json
{
  "message": "Validation error!",
  "issues": {
    "name": {
      "_errors": ["Name must be 3 or more characters"]
    }
  }
}
```

**O que aconteceu:**

- Nome tem apenas 2 caracteres
- Validação `.min(3)` falhou
- Zod retornou erro customizado

---

### Teste 2C: Validação - Preço Negativo

#### Requisição

```json
{
  "name": "Mouse",
  "price": -50.0
}
```

#### Response Esperada (Erro)

**Status:** 400 Bad Request

**Body:**

```json
{
  "message": "Validation error!",
  "issues": {
    "price": {
      "_errors": ["Price must be positive"]
    }
  }
}
```

**O que aconteceu:**

- Preço é negativo
- Validação `.positive()` falhou
- Zod retornou erro customizado

---

### Teste 2D: Validação - Preço como String

#### Requisição

```json
{
  "name": "Teclado",
  "price": "250.00"
}
```

#### Response Esperada (Erro)

**Status:** 400 Bad Request

**Body:**

```json
{
  "message": "Validation error!",
  "issues": {
    "price": {
      "_errors": ["Expected number, received string"]
    }
  }
}
```

**O que aconteceu:**

- Zod espera `number`, recebeu `string`
- Validação `.number()` falhou

---

### Teste 2E: Validação - Nome com Espaços

#### Requisição

```json
{
  "name": "   Monitor   ",
  "price": 800.0
}
```

#### Response Esperada (Sucesso)

**Status:** 201 Created

**Body:**

```json
{
  "name": "Monitor",
  "price": 800,
  "user_id": "123456"
}
```

**O que aconteceu:**

- `.trim()` removeu espaços iniciais e finais
- Validação passou
- Resposta mostra nome sem espaços

---

### Teste 2F: Validação - Campos Extras

#### Requisição

```json
{
  "name": "Webcam",
  "price": 150.0,
  "descricao": "Uma webcam boa",
  "categoria": "periféricos"
}
```

#### Response Esperada (Sucesso)

**Status:** 201 Created

**Body:**

```json
{
  "name": "Webcam",
  "price": 150,
  "user_id": "123456"
}
```

**O que aconteceu:**

- Campos extras (`descricao`, `categoria`) são ignorados
- `.parse()` só extrai os campos definidos no schema
- Resposta inclui apenas `name`, `price`, `user_id`

---

## Teste 3: POST /products/ com Corpo Inválido

### Requisição Vazia

#### Body

```json
{}
```

#### Response Esperada (Erro)

**Status:** 400 Bad Request

**Body:**

```json
{
  "message": "Validation error!",
  "issues": {
    "name": {
      "_errors": ["Name is required"]
    },
    "price": {
      "_errors": ["Price is required"]
    }
  }
}
```

---

### JSON Malformado

#### Body

```
{
  "name": "Notebook",
  "price": 2500
  // missing comma above
}
```

#### Response Esperada (Erro)

**Status:** 400 Bad Request

**Body:**

```json
{
  "message": "Unexpected end of JSON input"
}
```

**O que aconteceu:**

- Express não conseguiu fazer parsing de JSON
- Erro ocorreu antes de chegar ao Zod
- Middleware de erro capturou como erro genérico

---

## Teste 4: Rotas Não Existentes

### Requisição

```
GET http://localhost:3333/products/invalid
```

#### Response Esperada

**Status:** 404 Not Found

**Body:**

```json
{
  "message": "Cannot GET /products/invalid"
}
```

---

### Requisição para Rota Inexistente

```
GET http://localhost:3333/users
```

#### Response Esperada

**Status:** 404 Not Found

**Body:**

```json
{
  "message": "Cannot GET /users"
}
```

---

## Teste 5: Métodos HTTP Incorretos

### GET em Rota POST

```
GET http://localhost:3333/products/
```

Com body:

```json
{
  "name": "Produto",
  "price": 100
}
```

#### Response Esperada

**Status:** 404 Not Found

**Body:**

```json
{
  "message": "Cannot GET /products/"
}
```

**Nota:** Rota `/products/` só aceita POST, não GET

---

## Tabela de Testes Resumida

| #   | Método | URL                          | Body                                     | Status | Resultado              |
| --- | ------ | ---------------------------- | ---------------------------------------- | ------ | ---------------------- |
| 1   | GET    | `/products/?page=1&limit=10` | -                                        | 200    | `Página 1 de 10`       |
| 2   | POST   | `/products/`                 | `{name: "Notebook", price: 2500}`        | 201    | Produto criado         |
| 2A  | POST   | `/products/`                 | `{price: 1500}`                          | 400    | Erro: name required    |
| 2B  | POST   | `/products/`                 | `{name: "AB", price: 1500}`              | 400    | Erro: name < 3         |
| 2C  | POST   | `/products/`                 | `{name: "Mouse", price: -50}`            | 400    | Erro: price negative   |
| 2D  | POST   | `/products/`                 | `{name: "Teclado", price: "250"}`        | 400    | Erro: price not number |
| 2E  | POST   | `/products/`                 | `{name: "   Monitor   ", price: 800}`    | 201    | Spaces trimmed         |
| 2F  | POST   | `/products/`                 | `{name: "Webcam", price: 150, extra: 1}` | 201    | Extras ignorados       |
| 3   | POST   | `/products/`                 | `{}`                                     | 400    | Erro: required fields  |

---

## Dicas Importantes

### ✅ Fazer Requisições com Sucesso

1. **Cheque se servidor está rodando**

   ```bash
   npm run dev
   ```

   Saída: `server is running at 3333`

2. **Use URL correta**

   ```
   http://localhost:3333/products/
   ```

   (com barra no final)

3. **Respeitesyntaxe JSON**

   ```json
   {
     "name": "valor",
     "price": 123.45
   }
   ```

4. **Observe o Status Code**
   - **200**: OK (GET funcionou)
   - **201**: Created (POST funcionou)
   - **400**: Bad Request (validação falhou)
   - **404**: Not Found (rota não existe)
   - **500**: Server Error (erro não tratado)

### ❌ Erros Comuns

| Erro                          | Causa                     | Solução                |
| ----------------------------- | ------------------------- | ---------------------- |
| `Cannot GET localhost:3333`   | Servidor não está rodando | `npm run dev`          |
| `Cannot POST /products/`      | Rota POST não existe      | Cheque URL e método    |
| `JSON.parse error`            | JSON malformado           | Verifique sintaxe JSON |
| `Cannot read property 'name'` | Campo faltando            | Cheque requiredfields  |

---

## Workflow Recomendado

### Passo 1: Iniciar Servidor

```bash
cd api-rest
npm run dev
```

Esperado:

```
server is running at 3333
```

### Passo 2: Abrir Insomnia

### Passo 3: Criar Workspace e Requisições

```
Workspace: api-rest
  ├── Products (folder)
  │   ├── GET /products/ (list)
  │   ├── POST /products/ (create - success)
  │   ├── POST /products/ (validation - name required)
  │   ├── POST /products/ (validation - name too short)
  │   ├── POST /products/ (validation - price negative)
  │   └── ...
```

### Passo 4: Testar Cada Requisição

1. Clique em requisição
2. Revise URL, método, body
3. Clique "Send"
4. Verifique Status Code e Response

### Passo 5: Documentar Resultados

Salve requisições com nomes claros:

```
GET /products/ - List with pagination
POST /products/ - Create valid product
POST /products/ - Validation error: missing name
POST /products/ - Validation error: price negative
```

---

## Salvando Testes

### Exportar Workspace

1. Clique no menu (≡)
2. "Export Data"
3. Escolha onde salvar (ex: `docs/insomnia-export.json`)

### Importar Workspace

1. Clique no menu (≡)
2. "Import Data"
3. Escolha arquivo exportado

---

## Próximos Passos

Quando adicionar novos endpoints na API:

1. Crie nova requisição no Insomnia
2. Teste todos os cenários (sucesso, erro, validação)
3. Documente em arquivo markdown
4. Exporte workspace

---

## Recursos Adicionais

- [Documentação do Insomnia](https://docs.insomnia.rest/)
- [REST API Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://httpwg.org/specs/rfc7231.html#status.codes)
