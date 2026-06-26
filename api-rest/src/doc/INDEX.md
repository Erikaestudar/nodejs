# 📑 Índice Completo de Documentação

Mapa visual de todos os documentos disponíveis.

---

## 🗂️ Estrutura de Documentos

```
📚 src/doc/
│
├─ 📄 QUICKSTART.md
│  └─ 5 minutos para rodar a API
│
├─ 📄 00-README.md (VOCÊ ESTÁ AQUI)
│  └─ Índice principal e fluxos
│
├─ 📍 01-INSTALACAO.md
│  ├─ Pré-requisitos
│  ├─ Passo a passo de instalação
│  ├─ Instalação de dependências
│  ├─ Estrutura de diretórios
│  └─ Troubleshooting
│
├─ 📍 02-COMANDOS-TERMINAL.md
│  ├─ npm install / npm run dev
│  ├─ Compilar TypeScript
│  ├─ Gerenciar dependências
│  ├─ Comandos Git
│  └─ Scripts customizados
│
├─ 📍 03-PACKAGE-JSON.md
│  ├─ O que é package.json
│  ├─ Explicação de cada campo
│  ├─ dependencies (express, zod)
│  ├─ devDependencies
│  ├─ Versionamento semântico
│  └─ Exemplos completos
│
├─ 📍 04-TSCONFIG.md
│  ├─ O que é tsconfig.json
│  ├─ target: ES2021
│  ├─ NODE TARGET MAPPING (oficial)
│  ├─ lib, module, moduleResolution
│  ├─ strict mode
│  ├─ Cada opção explicada
│  └─ Comparação de targets
│
├─ 📍 05-ARQUIVOS-DETALHES.md
│  ├─ server.ts (aplicação principal)
│  ├─ ProductsController.ts (lógica)
│  ├─ routes/index.ts (agregador)
│  ├─ products-routes.ts (rotas)
│  ├─ myMiddleware.ts (interceptador)
│  ├─ request.d.ts (tipos)
│  ├─ AppError.ts (erro customizado)
│  └─ Padrão MVC explicado
│
├─ 📍 06-TESTES-INSOMNIA.md
│  ├─ O que é Insomnia
│  ├─ Teste 1: GET /products/ (listar)
│  ├─ Teste 2: POST /products/ (criar)
│  ├─ Validação (5 exemplos de erro)
│  ├─ Tabela resumida
│  ├─ Erros comuns
│  └─ Workflow recomendado
│
└─ 📍 07-FLUXO-REQUISICAO.md
   ├─ Diagrama geral
   ├─ Fluxo GET (detalhado)
   ├─ Fluxo POST (detalhado)
   ├─ Fluxo com erro (detalhado)
   ├─ Interconexão de arquivos
   └─ Pontos de falha comuns

```

---

## 🎯 Onde Encontrar Informações

### 🏁 Começar Agora

| Quer fazer...            | Leia                                   |
| ------------------------ | -------------------------------------- |
| Rodar a API em 5 minutos | [QUICKSTART.md](./QUICKSTART.md)       |
| Instalação completa      | [01-INSTALACAO.md](./01-INSTALACAO.md) |

### 💻 Desenvolvimento

| Quer fazer...        | Leia                                                                                    |
| -------------------- | --------------------------------------------------------------------------------------- |
| Usar comandos npm    | [02-COMANDOS-TERMINAL.md](./02-COMANDOS-TERMINAL.md)                                    |
| Entender server.ts   | [05-ARQUIVOS-DETALHES.md](./05-ARQUIVOS-DETALHES.md#1️⃣-serverts---arquivo-principal)    |
| Entender controllers | [05-ARQUIVOS-DETALHES.md](./05-ARQUIVOS-DETALHES.md#2️⃣-controllersproductscontrollerts) |
| Entender rotas       | [05-ARQUIVOS-DETALHES.md](./05-ARQUIVOS-DETALHES.md#3️⃣-routesindexts)                   |
| Entender middlewares | [05-ARQUIVOS-DETALHES.md](./05-ARQUIVOS-DETALHES.md#5️⃣-middlewaresmymiddlewarets)       |

### 🔧 Configuração

| Quer fazer...          | Leia                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------ |
| Editar package.json    | [03-PACKAGE-JSON.md](./03-PACKAGE-JSON.md)                                           |
| Entender TypeScript    | [04-TSCONFIG.md](./04-TSCONFIG.md)                                                   |
| Adicionar dependências | [02-COMANDOS-TERMINAL.md](./02-COMANDOS-TERMINAL.md#instalar-dependência-específica) |

### 🧪 Testes

| Quer fazer...     | Leia                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------- |
| Testar GET        | [06-TESTES-INSOMNIA.md](./06-TESTES-INSOMNIA.md#teste-1-get-products-listar-produtos) |
| Testar POST       | [06-TESTES-INSOMNIA.md](./06-TESTES-INSOMNIA.md#teste-2-post-products-criar-produto)  |
| Testar validações | [06-TESTES-INSOMNIA.md](./06-TESTES-INSOMNIA.md#teste-2a-validação---nome-faltando)   |
| Instalar Insomnia | [06-TESTES-INSOMNIA.md](./06-TESTES-INSOMNIA.md#instalação-e-configuração)            |

### 📊 Arquitetura

| Quer fazer...           | Leia                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------------------------ |
| Entender fluxo completo | [07-FLUXO-REQUISICAO.md](./07-FLUXO-REQUISICAO.md)                                               |
| Fluxo GET               | [07-FLUXO-REQUISICAO.md](./07-FLUXO-REQUISICAO.md#-fluxo-detalhado-get-productspage1limit10)     |
| Fluxo POST              | [07-FLUXO-REQUISICAO.md](./07-FLUXO-REQUISICAO.md#-fluxo-detalhado-post-products-sucesso)        |
| Tratar erros            | [07-FLUXO-REQUISICAO.md](./07-FLUXO-REQUISICAO.md#-fluxo-com-erro-post-products-validação-falha) |

---

## 📖 Leitura Recomendada por Nível

### 👶 Iniciante Absoluto (Primeira Vez com Node.js)

**Ordem de leitura:**

1. [QUICKSTART.md](./QUICKSTART.md) ⏱️ 5 min
2. [01-INSTALACAO.md](./01-INSTALACAO.md) ⏱️ 15 min
3. [02-COMANDOS-TERMINAL.md](./02-COMANDOS-TERMINAL.md) ⏱️ 10 min
4. [05-ARQUIVOS-DETALHES.md](./05-ARQUIVOS-DETALHES.md) ⏱️ 30 min
5. [06-TESTES-INSOMNIA.md](./06-TESTES-INSOMNIA.md) ⏱️ 20 min

**Total:** ~1 hora 20 minutos

**Depois:** Volte a cada arquivo conforme precisa

---

### 🟡 Intermediário (Conhece JavaScript)

**Ordem de leitura:**

1. [QUICKSTART.md](./QUICKSTART.md) ⏱️ 5 min
2. [05-ARQUIVOS-DETALHES.md](./05-ARQUIVOS-DETALHES.md) ⏱️ 30 min
3. [07-FLUXO-REQUISICAO.md](./07-FLUXO-REQUISICAO.md) ⏱️ 25 min
4. [04-TSCONFIG.md](./04-TSCONFIG.md) ⏱️ 20 min
5. [06-TESTES-INSOMNIA.md](./06-TESTES-INSOMNIA.md) ⏱️ 15 min

**Total:** ~1 hora 35 minutos

**Use como referência:** [02-COMANDOS-TERMINAL.md](./02-COMANDOS-TERMINAL.md), [03-PACKAGE-JSON.md](./03-PACKAGE-JSON.md)

---

### 🟢 Avançado (Desenvolvedor Experiente)

**Ordem de leitura:**

1. [QUICKSTART.md](./QUICKSTART.md) ⏱️ 3 min
2. [05-ARQUIVOS-DETALHES.md](./05-ARQUIVOS-DETALHES.md) ⏱️ 20 min (scan rápido)
3. [07-FLUXO-REQUISICAO.md](./07-FLUXO-REQUISICAO.md) ⏱️ 15 min

**Total:** ~40 minutos

**Use como referência:** Qualquer documento para detalhes específicos

---

## 🔍 Busca Rápida

### Por Tópico

#### Installation & Setup

- [QUICKSTART.md](./QUICKSTART.md) - Rápido
- [01-INSTALACAO.md](./01-INSTALACAO.md) - Completo
- [02-COMANDOS-TERMINAL.md](./02-COMANDOS-TERMINAL.md) - npm install

#### Understanding TypeScript

- [04-TSCONFIG.md](./04-TSCONFIG.md) - Configuração
- [05-ARQUIVOS-DETALHES.md](./05-ARQUIVOS-DETALHES.md) - Uso em código
- [07-FLUXO-REQUISICAO.md](./07-FLUXO-REQUISICAO.md) - Tipos em ação

#### Express & API

- [05-ARQUIVOS-DETALHES.md](./05-ARQUIVOS-DETALHES.md#1️⃣-serverts---arquivo-principal) - server.ts
- [05-ARQUIVOS-DETALHES.md](./05-ARQUIVOS-DETALHES.md#3️⃣-routesindexts) - rotas
- [07-FLUXO-REQUISICAO.md](./07-FLUXO-REQUISICAO.md) - fluxo completo

#### Controllers & Logic

- [05-ARQUIVOS-DETALHES.md](./05-ARQUIVOS-DETALHES.md#2️⃣-controllersproductscontrollerts) - Controller
- [05-ARQUIVOS-DETALHES.md](./05-ARQUIVOS-DETALHES.md#5️⃣-middlewaresmymiddlewarets) - Middleware
- [05-ARQUIVOS-DETALHES.md](./05-ARQUIVOS-DETALHES.md#7️⃣-utilsapperrorts) - Error handling

#### Validation

- [05-ARQUIVOS-DETALHES.md](./05-ARQUIVOS-DETALHES.md#método-create) - Zod schema
- [06-TESTES-INSOMNIA.md](./06-TESTES-INSOMNIA.md#teste-2a-validação---nome-faltando) - Exemplos de erro
- [07-FLUXO-REQUISICAO.md](./07-FLUXO-REQUISICAO.md#6️⃣-controller-validação-falha) - Como funciona

#### Testing

- [06-TESTES-INSOMNIA.md](./06-TESTES-INSOMNIA.md) - Todos os testes
- [07-FLUXO-REQUISICAO.md](./07-FLUXO-REQUISICAO.md#-fluxo-detalhado-get-productspage1limit10) - GET exemplo
- [07-FLUXO-REQUISICAO.md](./07-FLUXO-REQUISICAO.md#-fluxo-detalhado-post-products-sucesso) - POST exemplo

#### Package Management

- [02-COMANDOS-TERMINAL.md](./02-COMANDOS-TERMINAL.md) - npm commands
- [03-PACKAGE-JSON.md](./03-PACKAGE-JSON.md) - Explicação completa

#### Architecture

- [07-FLUXO-REQUISICAO.md](./07-FLUXO-REQUISICAO.md) - Fluxo visual

---

## 📝 Resumo de Cada Documento

| Doc                     | Tamanho | Tempo  | Público-Alvo    |
| ----------------------- | ------- | ------ | --------------- |
| QUICKSTART.md           | 2 KB    | 5 min  | Todos           |
| 00-README.md            | 8 KB    | 10 min | Todos           |
| 01-INSTALACAO.md        | 5 KB    | 15 min | Iniciantes      |
| 02-COMANDOS-TERMINAL.md | 6 KB    | 10 min | Todos           |
| 03-PACKAGE-JSON.md      | 12 KB   | 15 min | Intermediários+ |
| 04-TSCONFIG.md          | 15 KB   | 20 min | Intermediários+ |
| 05-ARQUIVOS-DETALHES.md | 18 KB   | 30 min | Todos           |
| 06-TESTES-INSOMNIA.md   | 16 KB   | 20 min | Todos           |
| 07-FLUXO-REQUISICAO.md  | 14 KB   | 25 min | Intermediários+ |

**Total:** ~94 KB | ~150 minutos de leitura completa

---

## ✨ Destaques

### 🌟 Documentos Essenciais

- ✅ [QUICKSTART.md](./QUICKSTART.md) - Comece aqui
- ✅ [05-ARQUIVOS-DETALHES.md](./05-ARQUIVOS-DETALHES.md) - Entenda o código
- ✅ [07-FLUXO-REQUISICAO.md](./07-FLUXO-REQUISICAO.md) - Veja como funciona

### 🎓 Para Aprender

- 📚 [04-TSCONFIG.md](./04-TSCONFIG.md) - TypeScript em profundidade
- 📚 [03-PACKAGE-JSON.md](./03-PACKAGE-JSON.md) - Gerenciamento de dependências
- 📚 [06-TESTES-INSOMNIA.md](./06-TESTES-INSOMNIA.md) - Testing na prática

### 🔧 Para Usar

- 🛠️ [01-INSTALACAO.md](./01-INSTALACAO.md) - Setup inicial
- 🛠️ [02-COMANDOS-TERMINAL.md](./02-COMANDOS-TERMINAL.md) - Comandos do dia-a-dia

---

## 🎯 Próximos Passos

1. **Escolha seu nível:** Iniciante, Intermediário ou Avançado
2. **Siga a ordem recomendada:** Cada seção acima
3. **Pratique:** Use Insomnia para testar
4. **Modifique:** Adicione suas próprias rotas e testes
5. **Aprenda mais:** Consulte as referências em cada documento

---

## 📞 Como Usar Esta Documentação

- **🔍 Procura rápida?** Use a seção "Busca Rápida"
- **🎓 Quer aprender?** Siga a "Leitura Recomendada"
- **🛠️ Precisa fazer algo?** Use a tabela "Onde Encontrar Informações"
- **❓ Tem pergunta?** Veja o FAQ em [00-README.md](./00-README.md)

---

## 🚀 Comece Agora!

→ **[QUICKSTART.md](./QUICKSTART.md)** ← Clique para começar em 5 minutos!

---

_Documentação completa para API REST com Node.js e TypeScript_  
_Última atualização: 2024_
