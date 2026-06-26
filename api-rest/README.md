# 🚀 API REST com Node.js e TypeScript

[![English](https://img.shields.io/badge/lang-en-blue.svg)](./README-EN.md)
[![Português](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)

Bem-vindo! Esta é uma **API REST profissional** construída com **Node.js**, **Express** e **TypeScript**.

---

## ⚡ Iniciar em 5 Minutos

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor
npm run dev

# 3. Testar
# GET: http://localhost:3333/products/?page=1&limit=10
# POST: http://localhost:3333/products/
```

**Esperado:** `server is running at 3333`

---

## 📚 Documentação

A documentação completa está em [`src/doc/`](./src/doc/):

| Documento                                                    | Descrição                           |
| ------------------------------------------------------------ | ----------------------------------- |
| [QUICKSTART.md](./src/doc/QUICKSTART.md)                     | 5 minutos para rodar a API          |
| [00-README.md](./src/doc/00-README.md)                       | 📖 Índice principal                 |
| [INDEX.md](./src/doc/INDEX.md)                               | 🗂️ Navegação rápida                 |
| [01-INSTALACAO.md](./src/doc/01-INSTALACAO.md)               | 📦 Instalação completa              |
| [02-COMANDOS-TERMINAL.md](./src/doc/02-COMANDOS-TERMINAL.md) | 🖥️ Todos os comandos                |
| [03-PACKAGE-JSON.md](./src/doc/03-PACKAGE-JSON.md)           | 📄 Configuração do projeto          |
| [04-TSCONFIG.md](./src/doc/04-TSCONFIG.md)                   | ⚙️ TypeScript (Node Target Mapping) |
| [05-ARQUIVOS-DETALHES.md](./src/doc/05-ARQUIVOS-DETALHES.md) | 📋 Cada arquivo explicado           |
| [06-TESTES-INSOMNIA.md](./src/doc/06-TESTES-INSOMNIA.md)     | 🧪 Exemplos de testes               |
| [07-FLUXO-REQUISICAO.md](./src/doc/07-FLUXO-REQUISICAO.md)   | 🔄 Como requisições funcionam       |

👉 **Comece aqui:** [`src/doc/QUICKSTART.md`](./src/doc/QUICKSTART.md)

---

## 🎯 Estrutura do Projeto

```
api-rest/
├── src/
│   ├── server.ts                    # Aplicação principal
│   ├── controllers/
│   │   └── ProductsController.ts   # Lógica de produtos
│   ├── routes/
│   │   ├── index.ts                # Agregador de rotas
│   │   └── products-routes.ts      # Rotas específicas
│   ├── middlewares/
│   │   └── myMiddleware.ts         # Middleware customizado
│   ├── types/
│   │   └── request.d.ts            # Tipos TypeScript
│   ├── utils/
│   │   └── AppError.ts             # Erro customizado
│   └── doc/                        # 📚 Documentação completa
│
├── package.json                    # Dependências do projeto
├── tsconfig.json                   # Configuração TypeScript
└── README.md                       # Este arquivo
```

---

## ✨ Tecnologias

- **Node.js** 18+
- **Express** 4.x - Framework web
- **TypeScript** 5.x - Tipagem estática
- **Zod** 3.x - Validação de dados
- **tsx** 4.x - Executor TypeScript

---

## 🛠️ Comandos Principais

```bash
# Instalar dependências
npm install

# Iniciar em desenvolvimento (com auto-reload)
npm run dev

# Compilar TypeScript
npx tsc

# Ver lista de dependências
npm list
```

Veja [`02-COMANDOS-TERMINAL.md`](./src/doc/02-COMANDOS-TERMINAL.md) para todos os comandos.

---

## 🧪 Testando a API

Use **Insomnia** ou **Postman**:

### GET - Listar Produtos

```
GET http://localhost:3333/products/?page=1&limit=10
```

### POST - Criar Produto

```
POST http://localhost:3333/products/
Content-Type: application/json

{
  "name": "Notebook",
  "price": 2500
}
```

Veja [`06-TESTES-INSOMNIA.md`](./src/doc/06-TESTES-INSOMNIA.md) para 10+ exemplos.

---

## 🎓 O Que Você Aprenderá

✅ Como estruturar uma API REST profissional  
✅ Padrão MVC (Model-View-Controller)  
✅ Validação de dados com Zod  
✅ Tratamento de erros  
✅ Middlewares  
✅ TypeScript em profundidade  
✅ Node Target Mapping

---

## 📖 Documentação Detalhada

### Para Iniciantes

1. [QUICKSTART.md](./src/doc/QUICKSTART.md) - 5 minutos
2. [01-INSTALACAO.md](./src/doc/01-INSTALACAO.md) - Instalação
3. [05-ARQUIVOS-DETALHES.md](./src/doc/05-ARQUIVOS-DETALHES.md) - Código explicado
4. [06-TESTES-INSOMNIA.md](./src/doc/06-TESTES-INSOMNIA.md) - Testes

### Para Intermediários

1. [05-ARQUIVOS-DETALHES.md](./src/doc/05-ARQUIVOS-DETALHES.md) - Estrutura
2. [07-FLUXO-REQUISICAO.md](./src/doc/07-FLUXO-REQUISICAO.md) - Fluxo
3. [04-TSCONFIG.md](./src/doc/04-TSCONFIG.md) - TypeScript

### Para Avançados

1. [07-FLUXO-REQUISICAO.md](./src/doc/07-FLUXO-REQUISICAO.md) - Arquitetura
2. [04-TSCONFIG.md](./src/doc/04-TSCONFIG.md) - Configurações

---

## ❓ FAQ

**P: Como rodo o projeto?**  
**R:** `npm install` depois `npm run dev`

**P: Qual versão do Node.js?**  
**R:** 18.x ou superior

**P: Como testo a API?**  
**R:** Use Insomnia. Veja [06-TESTES-INSOMNIA.md](./src/doc/06-TESTES-INSOMNIA.md)

**P: O que é TypeScript?**  
**R:** JavaScript com tipos. Veja [04-TSCONFIG.md](./src/doc/04-TSCONFIG.md)

**P: Como adiciono uma nova rota?**  
**R:** Crie método em controller, rota em routes, teste com Insomnia

---

## 🔗 Links Úteis

- [Express.js Docs](https://expressjs.com/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Zod Validation](https://zod.dev/)
- [REST API Best Practices](https://restfulapi.net/)
- [Node.js Docs](https://nodejs.org/docs/)

---

## 📝 Licença

ISC

---

## 👨‍💻 Autor

**Erika Sugawara**

---

## 🌐 Idiomas

- 🇧🇷 [Português](./README.md)
- 🇺🇸 [English](./README-EN.md)

---

**Pronto para começar?** 👉 [`src/doc/QUICKSTART.md`](./src/doc/QUICKSTART.md)

---

_API REST com Node.js e TypeScript - Documentação completa incluída em `src/doc/`_
