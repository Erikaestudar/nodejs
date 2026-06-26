# 📄 Configuração do package.json - API REST

## O que é package.json?

O `package.json` é o arquivo de configuração principal de um projeto Node.js. Ele contém:

- Metadados do projeto
- Dependências (bibliotecas externas)
- Scripts (comandos personalizados)
- Configurações de publicação

---

## Estrutura Completa do package.json

```json
{
  "name": "api-rest",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "dev": "tsx watch src/server.ts"
  },
  "author": "Erika Sugawara",
  "license": "ISC",
  "description": "Criando API REST com Node.js",
  "devDependencies": {
    "@types/express": "^5.0.6",
    "@types/node": "^20.14.12",
    "tsx": "^4.16.2",
    "typescript": "^5.5.4"
  },
  "dependencies": {
    "express": "^4.19.2",
    "zod": "^3.23.8"
  }
}
```

---

## Explicação de Cada Campo

### 1. **name**

```json
"name": "api-rest"
```

- Nome do projeto
- Usado quando publicar no npm
- Deve ser único no repositório npm (se for publicar)
- Use letras minúsculas e hífens

### 2. **version**

```json
"version": "1.0.0"
```

- Versão do projeto seguindo **Semantic Versioning (SemVer)**
- Formato: `MAJOR.MINOR.PATCH`
  - **MAJOR**: mudanças incompatíveis
  - **MINOR**: novas features compatíveis
  - **PATCH**: correções de bugs

Exemplos:

- `1.0.0` → versão inicial
- `1.1.0` → nova feature adicionada
- `1.1.1` → bug fix

### 3. **main**

```json
"main": "server.js"
```

- Arquivo de entrada principal do projeto
- Usado quando alguém importa seu projeto com `require()` ou `import`
- Geralmente é o arquivo compilado em JavaScript

### 4. **scripts**

```json
"scripts": {
  "dev": "tsx watch src/server.ts"
}
```

- Comandos customizados executáveis com `npm run <script-name>`
- Exemplo: `npm run dev` executa `tsx watch src/server.ts`

**Scripts mais comuns:**

```json
"scripts": {
  "dev": "tsx watch src/server.ts",      // desenvolvimento
  "build": "tsc",                         // compilar TypeScript
  "start": "node dist/server.js",        // executar código compilado
  "test": "jest",                         // rodar testes
  "lint": "eslint src/**/*.ts"            // verificar código
}
```

### 5. **author**

```json
"author": "Erika Sugawara"
```

- Nome do autor do projeto

### 6. **license**

```json
"license": "ISC"
```

- Licença do projeto
- **ISC**: Licença padrão (permissiva)
- Outras opções: MIT, Apache-2.0, GPL-3.0, etc.

### 7. **description**

```json
"description": "Criando API REST com Node.js"
```

- Descrição breve do projeto
- Aparece no npm quando publicado

### 8. **repository** (opcional)

```json
"repository": {
  "type": "git",
  "url": "https://github.com/usuario/api-rest.git"
}
```

- URL do repositório Git

### 9. **keywords** (opcional)

```json
"keywords": ["api", "rest", "nodejs", "express"]
```

- Palavras-chave para busca no npm

### 10. **homepage** (opcional)

```json
"homepage": "https://github.com/usuario/api-rest#readme"
```

- URL da página do projeto

---

## Dependências Explicadas

### dependencies

Pacotes necessários para **executar** a aplicação em produção:

```json
"dependencies": {
  "express": "^4.19.2",
  "zod": "^3.23.8"
}
```

#### **express** - Framework Web

- Simplifica criar APIs HTTP
- Fornece roteamento, middlewares, etc.
- Versão: `^4.19.2`

```typescript
import express from "express";
const app = express();
app.get("/products", (req, res) => res.json([]));
```

#### **zod** - Validação de Dados

- Valida dados de entrada (query, body, params)
- Fornece mensagens de erro claras
- Versão: `^3.23.8`

```typescript
import { z } from "zod";
const schema = z.object({ name: z.string(), price: z.number() });
const data = schema.parse(request.body);
```

---

### devDependencies

Pacotes necessários apenas para **desenvolvimento**:

```json
"devDependencies": {
  "@types/express": "^5.0.6",
  "@types/node": "^20.14.12",
  "tsx": "^4.16.2",
  "typescript": "^5.5.4"
}
```

#### **typescript** - Linguagem TypeScript

- Adiciona tipos estáticos ao JavaScript
- Detecta erros antes da execução
- Versão: `^5.5.4`

```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

#### **@types/node** - Tipos do Node.js

- Fornece intellisense e type checking para APIs do Node.js
- Versão: `^20.14.12`

```typescript
import { readFileSync } from "fs"; // TypeScript conhece o tipo
const content: string = readFileSync("file.txt", "utf-8");
```

#### **@types/express** - Tipos do Express

- Fornece intellisense para o Express
- Versão: `^5.0.6`

```typescript
import { Request, Response } from "express";
app.get("/", (req: Request, res: Response) => {});
```

#### **tsx** - Executor TypeScript

- Executa arquivos `.ts` diretamente sem compilar
- Útil para desenvolvimento rápido
- Versão: `^4.16.2`

```bash
tsx watch src/server.ts  # executa e monitora mudanças
```

---

## Versionamento de Pacotes

### Caracteres Especiais

```
"express": "^4.19.2"
```

| Símbolo | Significado          | Exemplo    | Versões Aceitas      |
| ------- | -------------------- | ---------- | -------------------- |
| `^`     | Compatível com MINOR | `^4.19.2`  | `4.19.2` a `4.99.99` |
| `~`     | Compatível com PATCH | `~4.19.2`  | `4.19.2` a `4.19.99` |
| `=`     | Exata                | `=4.19.2`  | Apenas `4.19.2`      |
| `>`     | Maior que            | `>4.19.2`  | `4.19.3` em diante   |
| `>=`    | Maior ou igual       | `>=4.19.2` | `4.19.2` em diante   |
| `<`     | Menor que            | `<4.20.0`  | Até `4.19.99`        |
| `*`     | Qualquer versão      | `*`        | Todas as versões     |

---

## Fluxo de Instalação

```bash
npm install express zod
```

1. NPM lê `package.json`
2. Baixa versões compatíveis
3. Instala em `node_modules/`
4. Cria `package-lock.json` (não editar!)

`package-lock.json`:

- Fixa versões exatas instaladas
- Garante instalação reprodutível
- Sempre fazer commit no Git

---

## Comandos Relacionados

```bash
# Ver todas as dependências
npm list

# Instalar nova dependência
npm install lodash

# Instalar como DevDependency
npm install --save-dev jest

# Remover dependência
npm uninstall express

# Atualizar versão
npm update

# Atualizar para versão major
npm install express@latest
```

---

## Exemplo de package.json Mais Completo

```json
{
  "name": "api-rest",
  "version": "1.0.0",
  "description": "Criando API REST com Node.js",
  "main": "dist/server.js",
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "test": "jest",
    "lint": "eslint src/**/*.ts",
    "format": "prettier --write src/**/*.ts"
  },
  "keywords": ["api", "rest", "nodejs", "express", "typescript"],
  "author": "Erika Sugawara",
  "license": "ISC",
  "repository": {
    "type": "git",
    "url": "https://github.com/usuario/api-rest.git"
  },
  "homepage": "https://github.com/usuario/api-rest#readme",
  "dependencies": {
    "express": "^4.19.2",
    "zod": "^3.23.8",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "typescript": "^5.5.4",
    "@types/node": "^20.14.12",
    "@types/express": "^5.0.6",
    "tsx": "^4.16.2",
    "jest": "^29.7.0",
    "eslint": "^8.45.0",
    "prettier": "^3.0.0"
  },
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  }
}
```

---

## Dicas Importantes

1. ✅ **Sempre faça commit do `package.json` e `package-lock.json`**
2. ❌ **Nunca faça commit da pasta `node_modules/`**
3. ✅ **Use `npm install` ao clonar um repositório**
4. ✅ **Atualize regularmente as dependências**
5. ❌ **Não edite manualmente o `package-lock.json`**
