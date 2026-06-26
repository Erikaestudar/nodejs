# 🚀 REST API with Node.js and TypeScript

[![English](https://img.shields.io/badge/lang-en-blue.svg)](./README-EN.md)
[![Português](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)

Welcome! This is a **professional REST API** built with **Node.js**, **Express**, and **TypeScript**.

---

## ⚡ Start in 5 Minutes

```bash
# 1. Install dependencies
npm install

# 2. Start server
npm run dev

# 3. Test
# GET: http://localhost:3333/products/?page=1&limit=10
# POST: http://localhost:3333/products/
```

**Expected output:** `server is running at 3333`

---

## 📚 Documentation

Complete documentation is in [`src/doc/`](./src/doc/):

| Document                                                     | Description                         |
| ------------------------------------------------------------ | ----------------------------------- |
| [QUICKSTART.md](./src/doc/QUICKSTART.md)                     | 5 minutes to run the API            |
| [00-README.md](./src/doc/00-README.md)                       | 📖 Main index                       |
| [INDEX.md](./src/doc/INDEX.md)                               | 🗂️ Quick navigation                 |
| [01-INSTALACAO.md](./src/doc/01-INSTALACAO.md)               | 📦 Complete installation            |
| [02-COMANDOS-TERMINAL.md](./src/doc/02-COMANDOS-TERMINAL.md) | 🖥️ All commands                     |
| [03-PACKAGE-JSON.md](./src/doc/03-PACKAGE-JSON.md)           | 📄 Project configuration            |
| [04-TSCONFIG.md](./src/doc/04-TSCONFIG.md)                   | ⚙️ TypeScript (Node Target Mapping) |
| [05-ARQUIVOS-DETALHES.md](./src/doc/05-ARQUIVOS-DETALHES.md) | 📋 Each file explained              |
| [06-TESTES-INSOMNIA.md](./src/doc/06-TESTES-INSOMNIA.md)     | 🧪 Test examples                    |
| [07-FLUXO-REQUISICAO.md](./src/doc/07-FLUXO-REQUISICAO.md)   | 🔄 How requests work                |

👉 **Start here:** [`src/doc/QUICKSTART.md`](./src/doc/QUICKSTART.md)

---

## 🎯 Project Structure

```
api-rest/
├── src/
│   ├── server.ts                    # Main application
│   ├── controllers/
│   │   └── ProductsController.ts   # Products logic
│   ├── routes/
│   │   ├── index.ts                # Routes aggregator
│   │   └── products-routes.ts      # Specific routes
│   ├── middlewares/
│   │   └── myMiddleware.ts         # Custom middleware
│   ├── types/
│   │   └── request.d.ts            # TypeScript types
│   ├── utils/
│   │   └── AppError.ts             # Custom error
│   └── doc/                        # 📚 Complete documentation
│
├── package.json                    # Project dependencies
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # This file
```

---

## ✨ Technologies

- **Node.js** 18+
- **Express** 4.x - Web framework
- **TypeScript** 5.x - Static typing
- **Zod** 3.x - Data validation
- **tsx** 4.x - TypeScript executor

---

## 🛠️ Main Commands

```bash
# Install dependencies
npm install

# Start in development (with auto-reload)
npm run dev

# Compile TypeScript
npx tsc

# See list of dependencies
npm list
```

See [`02-COMANDOS-TERMINAL.md`](./src/doc/02-COMANDOS-TERMINAL.md) for all commands.

---

## 🧪 Testing the API

Use **Insomnia** or **Postman**:

### GET - List Products

```
GET http://localhost:3333/products/?page=1&limit=10
```

### POST - Create Product

```
POST http://localhost:3333/products/
Content-Type: application/json

{
  "name": "Notebook",
  "price": 2500
}
```

See [`06-TESTES-INSOMNIA.md`](./src/doc/06-TESTES-INSOMNIA.md) for 10+ examples.

---

## 🎓 What You Will Learn

✅ How to structure a professional REST API  
✅ MVC pattern (Model-View-Controller)  
✅ Data validation with Zod  
✅ Error handling  
✅ Middlewares  
✅ TypeScript in depth  
✅ Node Target Mapping

---

## 📖 Detailed Documentation

### For Beginners

1. [QUICKSTART.md](./src/doc/QUICKSTART.md) - 5 minutes
2. [01-INSTALACAO.md](./src/doc/01-INSTALACAO.md) - Installation
3. [05-ARQUIVOS-DETALHES.md](./src/doc/05-ARQUIVOS-DETALHES.md) - Code explained
4. [06-TESTES-INSOMNIA.md](./src/doc/06-TESTES-INSOMNIA.md) - Tests

### For Intermediates

1. [05-ARQUIVOS-DETALHES.md](./src/doc/05-ARQUIVOS-DETALHES.md) - Structure
2. [07-FLUXO-REQUISICAO.md](./src/doc/07-FLUXO-REQUISICAO.md) - Flow
3. [04-TSCONFIG.md](./src/doc/04-TSCONFIG.md) - TypeScript

### For Advanced Users

1. [07-FLUXO-REQUISICAO.md](./src/doc/07-FLUXO-REQUISICAO.md) - Architecture
2. [04-TSCONFIG.md](./src/doc/04-TSCONFIG.md) - Configurations

---

## ❓ FAQ

**Q: How do I run the project?**  
**A:** `npm install` then `npm run dev`

**Q: Which Node.js version?**  
**A:** 18.x or higher

**Q: How do I test the API?**  
**A:** Use Insomnia. See [06-TESTES-INSOMNIA.md](./src/doc/06-TESTES-INSOMNIA.md)

**Q: What is TypeScript?**  
**A:** JavaScript with types. See [04-TSCONFIG.md](./src/doc/04-TSCONFIG.md)

**Q: How do I add a new route?**  
**A:** Create method in controller, route in routes, test with Insomnia

---

## 🔗 Useful Links

- [Express.js Docs](https://expressjs.com/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Zod Validation](https://zod.dev/)
- [REST API Best Practices](https://restfulapi.net/)
- [Node.js Docs](https://nodejs.org/docs/)

---

## 📝 License

ISC

---

## 👨‍💻 Author

**Erika Sugawara**

---

## 🌐 Languages

- 🇧🇷 [Português](./README.md)
- 🇺🇸 [English](./README-EN.md)

---

**Ready to get started?** 👉 [`src/doc/QUICKSTART.md`](./src/doc/QUICKSTART.md)

---

_REST API with Node.js and TypeScript - Complete documentation included in `src/doc/`_
