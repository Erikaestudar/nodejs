# ⚙️ Configuração do tsconfig.json - API REST

## O que é tsconfig.json?

O `tsconfig.json` é o arquivo de configuração do TypeScript. Define:

- Como compilar arquivos `.ts`
- Qual versão de JavaScript usar (target)
- Quais recursos ativar ou desativar
- Diretórios de entrada e saída

---

## Configuração do Projeto

```json
{
  "compilerOptions": {
    "target": "ES2021",
    "lib": ["ES2021"],

    /* Modules */
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

---

## Explicação de Cada Opção

### 1. **target**

```json
"target": "ES2021"
```

Define a versão de JavaScript para a qual o TypeScript será compilado.

**O que é ES2021?**

- ES = ECMAScript (padrão oficial do JavaScript)
- 2021 = Ano de lançamento
- ES2021 = JavaScript com features até 2021

#### Node Target Mapping

| TypeScript | JavaScript Gerado | Node.js Suportado |
| ---------- | ----------------- | ----------------- |
| ES2015     | ES2015 (ES6)      | 4.0+              |
| ES2016     | ES2016            | 7.0+              |
| ES2017     | ES2017            | 8.0+              |
| ES2018     | ES2018            | 10.0+             |
| ES2019     | ES2019            | 12.0+             |
| ES2020     | ES2020            | 13.2+             |
| ES2021     | ES2021            | 15.0+             |
| ES2022     | ES2022            | 16.0+             |
| ES2023     | ES2023            | 18.0+             |
| ESNext     | Versão Mais Nova  | Varia             |

**Referência Oficial:**
[Node Target Mapping - TypeScript Docs](https://www.typescriptlang.org/tsconfig#target)

**Escolha do Target:**

- **ES2021**: Bom balanço entre compatibilidade e features modernas
- **ES2023**: Máximo de features, requer Node.js 18+
- **ES2020**: Compatibilidade com Node.js 13.2+

### Features por Versão

#### ES2021 Inclui:

```typescript
// BigInt - números muito grandes
const big = 123456789n;

// Promise.any() - aguarda a primeira promise bem-sucedida
const result = await Promise.any([promise1, promise2]);

// WeakRef - referência fraca a objetos
const ref = new WeakRef(objeto);

// FinalizationRegistry - executar código quando objeto é coletado
const registry = new FinalizationRegistry(() => {});
```

---

### 2. **lib**

```json
"lib": ["ES2021"]
```

Especifica quais bibliotecas (type definitions) incluir.

```json
"lib": [
  "ES2021",      // TypeScript / JavaScript
  "DOM"          // APIs do navegador (window, document, etc)
]
```

**Opções Comuns:**

- `"ES2021"` → JavaScript até 2021
- `"DOM"` → APIs do navegador
- `"DOM.Iterable"` → Iteradores do DOM
- `"WebWorker"` → Web Workers
- `"ESNext"` → Todas as features futuras

No nosso projeto, apenas `ES2021` porque é uma API (sem APIs de navegador).

---

### 3. **module**

```json
"module": "NodeNext"
```

Define qual sistema de módulos usar.

| Opção      | Significado                    | Uso                |
| ---------- | ------------------------------ | ------------------ |
| `commonjs` | `require()` / `module.exports` | Node.js antigo     |
| `esnext`   | `import` / `export`            | JavaScript moderno |
| `NodeNext` | Auto-detecta (CommonJS ou ESM) | Node.js 12+        |
| `ES2020`   | `import` / `export`            | Versão específica  |

**NodeNext** é recomendado porque:

- Auto-detecta entre CommonJS e ES Modules
- Compatível com Node.js 12+
- Moderno e flexível

```typescript
// CommonJS (antigo)
const express = require("express");
module.exports = { app };

// ES Modules (moderno) - NodeNext detecta isso
import express from "express";
export { app };
```

---

### 4. **moduleResolution**

```json
"moduleResolution": "NodeNext"
```

Como o TypeScript resolve os caminhos de importação.

| Opção      | Comportamento                       |
| ---------- | ----------------------------------- |
| `classic`  | Estratégia antiga (não recomendado) |
| `node`     | Simula resolução do Node.js         |
| `NodeNext` | Mais moderno, com suporte a exports |

**NodeNext** é recomendado para projetos Node.js modernos.

---

### 5. **esModuleInterop**

```json
"esModuleInterop": true
```

Permite importar módulos CommonJS como ES modules.

```typescript
// COM esModuleInterop: true
import express from "express";

// SEM esModuleInterop (precisa de default)
import * as express from "express";
const app = express.default();
```

**Ativar:** Torna o código mais legível.

---

### 6. **forceConsistentCasingInFileNames**

```json
"forceConsistentCasingInFileNames": true
```

Força nomes de arquivo consistentes (evita bugs em Windows/Mac vs Linux).

```typescript
// ✗ Erro em Linux, funciona em Windows
import { Produto } from "./produto"; // arquivo: Produto.ts

// ✓ Correto em todos os SO
import { Produto } from "./Produto";
```

---

### 7. **strict**

```json
"strict": true
```

Ativa **todas** as verificações de tipo rigorosas.

Equivalente a:

```json
"noImplicitAny": true,
"noImplicitThis": true,
"alwaysStrict": true,
"strictBindCallApply": true,
"strictFunctionTypes": true,
"strictNullChecks": true,
"strictPropertyInitialization": true
```

**O que ativa:**

#### noImplicitAny

```typescript
// ✗ Erro: tipo desconhecido
function greet(name) {}

// ✓ Correto: tipo explícito
function greet(name: string) {}
```

#### strictNullChecks

```typescript
// ✗ Erro: string não pode ser null
let nome: string = null;

// ✓ Correto: permite null
let nome: string | null = null;
```

#### strictPropertyInitialization

```typescript
// ✗ Erro: propriedade não inicializada
class User {
  name: string;
}

// ✓ Correto: inicializada
class User {
  name: string = "";
}
```

**Benefício:** Evita bugs e torna o código mais seguro.

---

### 8. **skipLibCheck**

```json
"skipLibCheck": true
```

Pula verificação de tipos em arquivos `.d.ts` de dependências.

```
skipLibCheck: true  → Compila mais rápido ✓
skipLibCheck: false → Verifica tudo (lento)
```

**Recomendação:** Manter `true` para melhor performance.

---

## Configuração Completa Recomendada

```json
{
  "compilerOptions": {
    /* Target & Module */
    "target": "ES2021",
    "lib": ["ES2021"],
    "module": "NodeNext",
    "moduleResolution": "NodeNext",

    /* Outputs */
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,

    /* Module Interop */
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,

    /* Type Checking */
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,

    /* Completeness */
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "allowJs": false,
    "composite": false
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```

---

## Opções Importantes Explicadas

### outDir e rootDir

```json
"outDir": "./dist",
"rootDir": "./src"
```

**rootDir:** Onde estão os arquivos `.ts` (entrada)
**outDir:** Onde compilar para `.js` (saída)

```
src/
├── server.ts
└── utils/
    └── AppError.ts

↓ (npm run build)

dist/
├── server.js
└── utils/
    └── AppError.js
```

### declaration

```json
"declaration": true
```

Gera arquivo `.d.ts` (tipos TypeScript) para cada `.js`.

```typescript
// AppError.ts
export class AppError {}

// ↓ com declaration: true

// AppError.d.ts
export declare class AppError {}

// AppError.js (código compilado)
```

### sourceMap

```json
"sourceMap": true
```

Cria arquivo `.map` para depuração (mapeia JavaScript de volta a TypeScript).

**Útil para:** Debug em navegador ou IDE mostrando linha correta do `.ts`.

### noUnusedLocals e noUnusedParameters

```json
"noUnusedLocals": true,
"noUnusedParameters": true
```

Aviso se variável ou parâmetro não é usado.

```typescript
// ✗ Aviso/Erro
function calcular(x, y) {
  return x * 2; // y não é usado
}

// ✓ Correto
function calcular(x, _y) {
  return x * 2; // _ indica que é propositalmente ignorado
}
```

---

## Comparação de Targets

### ES2015 (ES6)

```typescript
const name = "João"; // let/const
const arrow = () => {}; // arrow functions
const { x } = obj; // destructuring
```

### ES2020

```typescript
const x = 1n; // BigInt
const y = value ?? null; // Nullish coalescing
const z = obj?.prop; // Optional chaining
```

### ES2021

```typescript
const result = await Promise.any([]); // Promise.any()
const ref = new WeakRef(obj); // WeakRef
```

---

## Gerar tsconfig.json

```bash
npx tsc --init
```

Gera arquivo padrão (depois customize conforme necessário).

---

## Verificar Configuração

```bash
# Mostra config final (após ler tsconfig.json)
npx tsc --showConfig

# Apenas verifica erros de tipo (não compila)
npx tsc --noEmit

# Compila com verbose
npx tsc --pretty
```

---

## Referências

- [TypeScript tsconfig.json Official Docs](https://www.typescriptlang.org/tsconfig)
- [Node Target Mapping](https://www.typescriptlang.org/tsconfig#target)
- [Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

---

## Dicas Importantes

✅ **Use `strict: true`** para máxima segurança de tipos
✅ **Use `ES2021` ou superior** para código moderno
✅ **Use `NodeNext`** para módulos em Node.js
❌ **Não diminua verificações de tipo** para contornar erros
✅ **Sempre revise avisos do TypeScript**
