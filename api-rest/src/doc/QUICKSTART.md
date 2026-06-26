# 🚀 Guia de Início Rápido - 5 Minutos

Se você quer começar **agora mesmo**, siga este guia rápido!

---

## ⏱️ 5 Minutos para Rodar a API

### 1️⃣ Abra o Terminal (30 segundos)

No VS Code:

- Pressione `Ctrl + '` (backtick) ou
- Menu → Terminal → New Terminal

### 2️⃣ Instale Tudo (1 minuto)

```bash
cd api-rest
npm install
```

Espere até ver:

```
added XXX packages
```

### 3️⃣ Inicie o Servidor (30 segundos)

```bash
npm run dev
```

Esperado:

```
server is running at 3333
```

### 4️⃣ Abra Insomnia (1 minuto)

[Baixe aqui](https://insomnia.rest/download) se não tiver

Ou use online: [Hoppscotch](https://hoppscotch.io/)

### 5️⃣ Teste a API (1 minuto)

**Teste 1: GET**

```
GET http://localhost:3333/products/?page=1&limit=10
```

Clique Send. Você vê:

```
Página 1 de 10
```

**Teste 2: POST**

```
POST http://localhost:3333/products/

Body (JSON):
{
  "name": "Notebook",
  "price": 2500
}
```

Clique Send. Você vê:

```json
{
  "name": "Notebook",
  "price": 2500,
  "user_id": "123456"
}
```

---

## 🎉 Pronto!

Você acabou de:
✅ Instalar projeto Node.js  
✅ Rodar servidor Express  
✅ Testar API REST

---

## 📚 Próximos Passos

Agora que tudo está funcionando:

| Quer...                          | Leia                                                 |
| -------------------------------- | ---------------------------------------------------- |
| Entender como o código funciona  | [05-ARQUIVOS-DETALHES.md](./05-ARQUIVOS-DETALHES.md) |
| Ver todos os comandos            | [02-COMANDOS-TERMINAL.md](./02-COMANDOS-TERMINAL.md) |
| Testar mais (exemplos completos) | [06-TESTES-INSOMNIA.md](./06-TESTES-INSOMNIA.md)     |
| Adicionar dependências           | [03-PACKAGE-JSON.md](./03-PACKAGE-JSON.md)           |
| Entender TypeScript              | [04-TSCONFIG.md](./04-TSCONFIG.md)                   |

---

## ⚠️ Problemas Comuns

### ❌ "npm: command not found"

- Node.js não está instalado
- [Baixe aqui](https://nodejs.org/)
- Reinicie o terminal após instalar

### ❌ "Cannot GET localhost:3333"

- Servidor não está rodando
- Execute `npm run dev`
- Verifique porta (está 3333?)

### ❌ "EADDRINUSE: address already in use :::3333"

- Outra aplicação usa porta 3333
- Mude porta em server.ts: `const PORT = 3334`

### ❌ "Cannot find module"

- Dependências não instaladas
- Execute `npm install`

---

## 🆘 Ajuda

Está preso? Leia a documentação completa:

👉 **[00-README.md](./00-README.md)** - Índice completo

---

Divirta-se! 🎮
