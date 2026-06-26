# 📚 Documentação Completa - API REST com Node.js

Bem-vindo! Este é o guia completo para entender, usar e desenvolver a **API REST com Node.js e TypeScript**.

## 📖 Índice de Documentação

Esta documentação está dividida em 6 partes principais:

### [1️⃣ INSTALAÇÃO](./01-INSTALACAO.md)

**Comece aqui se está iniciando o projeto do zero**

Tópicos:

- ✅ Pré-requisitos (Node.js, npm)
- ✅ Passo a passo de instalação
- ✅ Instalação de dependências
- ✅ Verificação de instalação
- ✅ Troubleshooting

👉 **Quando usar:** Primeira vez configurando o projeto

---

### [2️⃣ COMANDOS DE TERMINAL](./02-COMANDOS-TERMINAL.md)

**Todos os comandos que você vai usar no dia a dia**

Tópicos:

- 🖥️ Iniciar servidor em desenvolvimento
- 📦 Instalar e remover dependências
- 🔨 Compilar TypeScript
- 📋 Listar dependências
- 🧹 Limpeza e utilitários

👉 **Quando usar:** Precisar executar algum comando

---

### [3️⃣ PACKAGE.JSON](./03-PACKAGE-JSON.md)

**Entenda cada linha do arquivo package.json**

Tópicos:

- 📄 O que é package.json
- 📌 Estrutura completa e explicação
- 📚 Dependências de produção
- 🛠️ DevDependencies
- 📊 Versionamento semântico

👉 **Quando usar:** Configurar o projeto ou adicionar dependências

---

### [4️⃣ TSCONFIG.JSON](./04-TSCONFIG.md)

**Configuração completa do TypeScript com Node Target Mapping**

Tópicos:

- ⚙️ O que é tsconfig.json
- 🎯 Target ES2021 e mapeamento com Node.js
- 🔧 Cada opção de compilação explicada
- 📋 Node Target Mapping (tabela oficial)
- ✨ Features por versão do ECMAScript

👉 **Quando usar:** Entender TypeScript ou customizar configuração

---

### [5️⃣ DETALHES DOS ARQUIVOS](./05-ARQUIVOS-DETALHES.md)

**Explicação linha por linha de cada arquivo do projeto**

Arquivos documentados:

1. **server.ts** - Arquivo principal da aplicação
2. **ProductsController.ts** - Lógica de negócio
3. **routes/index.ts** - Agregador de rotas
4. **products-routes.ts** - Rotas específicas
5. **myMiddleware.ts** - Interceptador de requisições
6. **request.d.ts** - Tipos TypeScript customizados
7. **AppError.ts** - Erro customizado da aplicação

👉 **Quando usar:** Entender como o código funciona

---

### [6️⃣ TESTES NO INSOMNIA](./06-TESTES-INSOMNIA.md)

**Como testar a API com muitos exemplos práticos**

Tópicos:

- 📮 O que é Insomnia (cliente HTTP)
- ✅ Teste 1: GET /products/ (listar)
- ✅ Teste 2: POST /products/ (criar)
- ✅ Validação de dados
- 📋 Tabela resumida de testes
- ⚠️ Erros comuns e soluções

👉 **Quando usar:** Testar a API em desenvolvimento

---

### [7️⃣ FLUXO DA REQUISIÇÃO](./07-FLUXO-REQUISICAO.md)

**Entenda exatamente o que acontece quando você faz uma requisição**

Tópicos:

- 🔄 Diagrama geral do fluxo
- 📊 Fluxo GET (listar com paginação)
- 📊 Fluxo POST (criar com validação)
- 📊 Fluxo com erro (validação falha)
- 🔌 Interconexão de arquivos
- 💾 Estado da request em cada ponto

👉 **Quando usar:** Entender como a API processa requisições

---

## 🚀 Fluxo de Trabalho Recomendado

### Para Principiantes

```
1. Leia QUICKSTART.md (5 minutos para rodar)
   ↓
2. Leia 01-INSTALACAO.md (entender instalação)
   ↓
3. Leia 05-ARQUIVOS-DETALHES.md (entender código)
   ↓
4. Leia 07-FLUXO-REQUISICAO.md (como requisições funcionam)
   ↓
5. Leia 06-TESTES-INSOMNIA.md (testar API)
```

### Para Desenvolvedores Intermediários

```
1. 02-COMANDOS-TERMINAL.md (lembrança de comandos)
   ↓
2. 05-ARQUIVOS-DETALHES.md (estrutura do código)
   ↓
3. 07-FLUXO-REQUISICAO.md (entender fluxo)
   ↓
4. 06-TESTES-INSOMNIA.md (testar mudanças)
```

### Para Configurar Projeto

```
1. QUICKSTART.md (rodar rápido)
   ↓
2. 01-INSTALACAO.md (setup completo)
   ↓
3. 03-PACKAGE.JSON.md (entender dependências)
   ↓
4. 04-TSCONFIG.md (ajustar TypeScript)
```

---

## 📊 Estrutura do Projeto

```
api-rest/
├── src/
│   ├── server.ts                 ← Aplicação principal
│   ├── controllers/
│   │   └── ProductsController.ts ← Lógica de produtos
│   ├── routes/
│   │   ├── index.ts              ← Agregador de rotas
│   │   └── products-routes.ts    ← Rotas de produtos
│   ├── middlewares/
│   │   └── myMiddleware.ts       ← Middleware customizado
│   ├── types/
│   │   └── request.d.ts          ← Tipos TypeScript
│   ├── utils/
│   │   └── AppError.ts           ← Erro customizado
│   └── doc/                      ← Você está aqui!
│       ├── 00-README.md          ← Este arquivo
│       ├── 01-INSTALACAO.md
│       ├── 02-COMANDOS-TERMINAL.md
│       ├── 03-PACKAGE-JSON.md
│       ├── 04-TSCONFIG.md
│       ├── 05-ARQUIVOS-DETALHES.md
│       └── 06-TESTES-INSOMNIA.md
├── package.json                  ← Configuração do projeto
├── tsconfig.json                 ← Configuração do TypeScript
└── .gitignore                    ← Arquivos ignorados pelo Git
```

---

## 🎯 Objetivos de Aprendizado

Após ler esta documentação, você será capaz de:

✅ Instalar e configurar um projeto Node.js com TypeScript  
✅ Usar express para criar uma API REST  
✅ Validar dados de entrada com Zod  
✅ Estruturar código em controllers, rotas e middlewares  
✅ Tratar erros de forma padronizada  
✅ Testar endpoints com Insomnia  
✅ Entender TypeScript e suas configurações  
✅ Navegar entre arquivos do projeto

---

## 🔗 Links Rápidos

### 📚 Documentação Oficial

- [Express.js Docs](https://expressjs.com/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Zod Docs](https://zod.dev/)
- [Node.js Docs](https://nodejs.org/docs/)

### 🎓 Tutoriais

- [REST API Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://httpwg.org/specs/rfc7231.html#status.codes)
- [JavaScript ES2021 Features](https://github.com/tc39/proposals/blob/master/finished-proposals.md)

### 🛠️ Ferramentas

- [Insomnia Download](https://insomnia.rest/download)
- [VS Code Download](https://code.visualstudio.com/)
- [Postman (alternativa)](https://www.postman.com/)

---

## ❓ FAQ (Perguntas Frequentes)

### P: Por onde começo?

**R:** Comece com [QUICKSTART.md](./QUICKSTART.md) para rodar em 5 minutos!

### P: Quer entender a instalação?

**R:** Leia [01-INSTALACAO.md](./01-INSTALACAO.md).

### P: Como rodo o servidor?

**R:** Execute `npm run dev` (veja [02-COMANDOS-TERMINAL.md](./02-COMANDOS-TERMINAL.md)).

### P: O que é TypeScript?

**R:** É JavaScript com tipos. Leia [04-TSCONFIG.md](./04-TSCONFIG.md) e [05-ARQUIVOS-DETALHES.md](./05-ARQUIVOS-DETALHES.md).

### P: Como uma requisição funciona?

**R:** Veja [07-FLUXO-REQUISICAO.md](./07-FLUXO-REQUISICAO.md) - explicação visual completa.

### P: Como testo a API?

**R:** Use Insomnia. Veja [06-TESTES-INSOMNIA.md](./06-TESTES-INSOMNIA.md) para exemplos detalhados.

### P: O que é cada pasta?

**R:** Veja [05-ARQUIVOS-DETALHES.md](./05-ARQUIVOS-DETALHES.md) - Estrutura do Projeto.

### P: Como adicionar nova rota?

**R:** Crie método em controller, rota em routes, teste com Insomnia.

### P: Qual Node.js versão usar?

**R:** 18.x ou superior. Veja [04-TSCONFIG.md](./04-TSCONFIG.md) - Node Target Mapping.

---

## 💡 Dicas Importantes

### ✅ Boas Práticas

- ✅ Sempre leia mensagens de erro - elas são bem descritivas
- ✅ Use TypeScript strict mode - detecta bugs cedo
- ✅ Valide TODOS os dados de entrada - segurança
- ✅ Trate erros explicitamente - melhor UX
- ✅ Organize código em pastas - melhor manutenção
- ✅ Faça commits pequenos - histórico claro

### ❌ Evite

- ❌ Usar `any` em TypeScript - derrota o propósito
- ❌ Confiar em dados do cliente sem validar
- ❌ Colocar lógica no server.ts - use controllers
- ❌ Misturar validação e lógica - use schemas
- ❌ Deixar erros ser tratados genericamente
- ❌ Commits com "fix" ou "update" sem detalhes

---

## 🤝 Contribuindo

Se encontrar erros ou tiver sugestões:

1. Revise o arquivo relevante
2. Corrija ou melhore
3. Commit com mensagem clara

---

## 📝 Histórico de Versão

| Versão | Data | Alterações                    |
| ------ | ---- | ----------------------------- |
| 1.0.0  | 2024 | Documentação inicial completa |

---

## 📞 Suporte

Dúvidas sobre:

- **Instalação** → Veja [01-INSTALACAO.md](./01-INSTALACAO.md)
- **Comandos** → Veja [02-COMANDOS-TERMINAL.md](./02-COMANDOS-TERMINAL.md)
- **Código** → Veja [05-ARQUIVOS-DETALHES.md](./05-ARQUIVOS-DETALHES.md)
- **Testes** → Veja [06-TESTES-INSOMNIA.md](./06-TESTES-INSOMNIA.md)
- **TypeScript** → Veja [04-TSCONFIG.md](./04-TSCONFIG.md)

---

## 🎉 Bem-vindo ao Desenvolvimento Web!

Parabéns! Você tem toda documentação que precisa. Agora é praticar!

**Próximo passo:** Escolha um dos documentos acima e comece a aprender.

Boa sorte! 🚀

---

_Documentação criada para o projeto API REST com Node.js e TypeScript_  
_Última atualização: 2024_
