# 🖥️ Comandos de Terminal - API REST

## Instalação Inicial

### Inicializar NPM

```bash
npm init -y
```

Cria o arquivo `package.json` com configurações padrão.

### Instalar Dependências

```bash
npm install express zod
```

Instala as dependências de produção.

### Instalar DevDependencies

```bash
npm install --save-dev typescript @types/node @types/express tsx
```

Instala as ferramentas de desenvolvimento.

---

## Comandos de Desenvolvimento

### Iniciar Servidor em Modo de Desenvolvimento

```bash
npm run dev
```

**O que faz:** Inicia o servidor com `tsx watch` que monitora mudanças nos arquivos `.ts` e reinicia automaticamente.

**Saída esperada:**

```
server is running at 3333
```

### Parar o Servidor

```bash
Ctrl + C
```

(no terminal onde o servidor está rodando)

---

## Comandos de TypeScript

### Compilar TypeScript para JavaScript

```bash
npx tsc
```

Converte todos os arquivos `.ts` em `.js` de acordo com as configurações do `tsconfig.json`.

### Inicializar TypeScript Configuration

```bash
npx tsc --init
```

Cria o arquivo `tsconfig.json` com configurações padrão.

### Verificar Erros de TypeScript Sem Compilar

```bash
npx tsc --noEmit
```

Apenas verifica se há erros de tipo sem criar arquivos `.js`.

---

## Comandos NPM Úteis

### Listar Dependências Instaladas

```bash
npm list
```

Mostra todas as dependências do projeto em árvore.

### Listar Apenas Dependências de Produção

```bash
npm list --production
```

### Listar Apenas DevDependencies

```bash
npm list --dev
```

### Atualizar Dependências

```bash
npm update
```

Atualiza todas as dependências para versões compatíveis.

### Verificar Dependências Desatualizadas

```bash
npm outdated
```

### Instalar Dependência Específica

```bash
npm install <nome-do-pacote>
```

Exemplo:

```bash
npm install cors
```

### Desinstalar Dependência

```bash
npm uninstall <nome-do-pacote>
```

Exemplo:

```bash
npm uninstall jest
```

---

## Comandos Git

### Inicializar Repositório Git

```bash
git init
```

### Adicionar Arquivos

```bash
git add .
```

### Fazer Commit

```bash
git commit -m "Mensagem do commit"
```

### Ver Status do Repositório

```bash
git status
```

---

## Comandos de Limpeza

### Limpar Cache NPM

```bash
npm cache clean --force
```

### Remover node_modules (Para resetar dependências)

```bash
rm -rf node_modules
npm install
```

(no Windows, use `rmdir /s /q node_modules` ou delete manualmente)

### Remover Arquivos JavaScript Compilados

```bash
rm -rf dist/
```

---

## Resumo de Comandos Mais Usados

| Comando                  | Descrição                          |
| ------------------------ | ---------------------------------- |
| `npm run dev`            | Inicia servidor em desenvolvimento |
| `npm install`            | Instala dependências               |
| `npm list`               | Lista dependências                 |
| `npx tsc`                | Compila TypeScript                 |
| `npm uninstall <pacote>` | Remove pacote                      |
| `npm update`             | Atualiza dependências              |

---

## Scripts Customizados (scripts no package.json)

### Adicionar Scripts Customizados

Edite o `package.json` e adicione novos scripts:

```json
"scripts": {
  "dev": "tsx watch src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js",
  "lint": "eslint src/**/*.ts"
}
```

Depois execute com:

```bash
npm run <nome-do-script>
```

Exemplo:

```bash
npm run build
npm start
```

---

## Dicas Importantes

1. **Sempre use `npm install` antes de qualquer outro comando** se você clonou o repositório
2. **Use `npm run dev` para desenvolvimento** - o TypeScript será executado automaticamente
3. **Compile com `npm run build` antes de fazer deploy** (se tiver esse script)
4. **Use `Ctrl + C` para parar o servidor** em qualquer momento

---

## Variáveis de Ambiente (Futuro)

Quando necessário, você pode usar um arquivo `.env`:

```bash
npm install dotenv
```

Crie um arquivo `.env` na raiz do projeto:

```
PORT=3333
NODE_ENV=development
```

Adicione ao `.gitignore`:

```bash
echo ".env" >> .gitignore
```
