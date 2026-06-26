# 📦 Guia de Instalação - API REST

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18.x ou superior)
- **npm** (gerenciador de pacotes do Node.js)

Verifique as versões instaladas:

```bash
node --version
npm --version
```

## Passo 1: Clonar ou Criar o Projeto

Se você está clonando o repositório:

```bash
git clone <url-do-repositorio>
cd api-rest
```

Ou, se está criando do zero:

```bash
mkdir api-rest
cd api-rest
```

## Passo 2: Inicializar o Projeto Node.js

```bash
npm init -y
```

Este comando cria o arquivo `package.json` com as configurações padrão.

## Passo 3: Instalar Dependências

### Dependências de Produção (Runtime)

```bash
npm install express zod
```

**O que cada dependência faz:**

- **express**: Framework web para criar APIs REST
- **zod**: Biblioteca para validação de esquemas (schemas)

### Dependências de Desenvolvimento (DevDependencies)

```bash
npm install --save-dev typescript @types/node @types/express tsx
```

**O que cada dependência faz:**

- **typescript**: Transcompilador que converte TypeScript em JavaScript
- **@types/node**: Tipos TypeScript para as APIs do Node.js
- **@types/express**: Tipos TypeScript para o Express
- **tsx**: Executor TypeScript que permite executar arquivos `.ts` diretamente

## Passo 4: Instalar Globalmente (Opcional)

Se preferir instalar o TypeScript globalmente:

```bash
npm install -g typescript
npm install -g tsx
```

## Passo 5: Criar Arquivo de Configuração do TypeScript

```bash
npx tsc --init
```

Isso cria o arquivo `tsconfig.json` com as configurações padrão. Você pode customizá-lo conforme necessário (veja o documento `04-TSCONFIG.md`).

## Passo 6: Criar Estrutura de Diretórios

```bash
mkdir -p src/controllers src/routes src/middlewares src/utils src/types
```

A estrutura final deve ficar assim:

```
api-rest/
├── src/
│   ├── server.ts
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
│   └── doc/
│       └── (arquivos de documentação)
├── package.json
├── tsconfig.json
└── .gitignore
```

## Passo 7: Criar arquivo .gitignore

```bash
echo "node_modules/" > .gitignore
echo "dist/" >> .gitignore
echo ".DS_Store" >> .gitignore
```

## Passo 8: Verificar Instalação

Verificar se tudo foi instalado corretamente:

```bash
npm list
```

Este comando lista todas as dependências instaladas no projeto.

## Próximos Passos

- Consulte o documento **`02-COMANDOS-TERMINAL.md`** para ver todos os comandos disponíveis
- Consulte **`03-PACKAGE-JSON.md`** para entender a configuração do projeto
- Consulte **`04-TSCONFIG.md`** para detalhes de configuração do TypeScript
- Consulte **`05-ARQUIVOS-DETALHES.md`** para entender o código de cada arquivo
- Consulte **`06-TESTES-INSOMNIA.md`** para aprender como testar a API

## Troubleshooting

### Erro: "tsx: command not found"

Solução: Instale o tsx globalmente ou use `npx tsx`

### Erro: "Cannot find module 'express'"

Solução: Execute `npm install` novamente para garantir que todas as dependências estão instaladas

### Erro: "TypeScript compilation failed"

Solução: Verifique o arquivo `tsconfig.json` ou execute `npm run dev` para ver erros detalhados
