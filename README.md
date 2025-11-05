# 🚀 Aprimorado Minha Aplica

Um projeto **Full Stack** moderno, desenvolvido com **React + Vite** no frontend e **Node.js + Express + TypeScript** no backend, totalmente implantado no **Render.com**.

---

## 🧩 Estrutura do Projeto
---

## 🌐 Links do Projeto

| Serviço | Tipo | URL |
|----------|------|-----|
| 🟦 Backend | Web Service | [https://aprimorado-minha-aplica-web-serve.onrender.com](https://aprimorado-minha-aplica-web-serve.onrender.com) |
| 🟨 Frontend | Static Site | [https://aprimorado-minha-aplica.onrender.com](https://aprimorado-minha-aplica.onrender.com) |

---

## ⚙️ Tecnologias Utilizadas

### **Frontend**
- ⚛️ React 18 + TypeScript  
- ⚡ Vite  
- 🎨 CSS / Tailwind (opcional)  
- 🔗 Axios (para comunicação com API)

### **Backend**
- 🟩 Node.js + Express  
- 🧩 TypeScript  
- 🔒 JWT + bcryptjs (para autenticação)  
- 🧠 Zod (validação de dados)  
- 🗄️ Prisma ORM (caso utilize banco de dados)  
- 🌍 Dotenv (gerenciamento de variáveis de ambiente)

---

## ⚙️ Variáveis de Ambiente

### 🟦 **Backend**
Crie um arquivo `.env` dentro da pasta `backend/`:
### 🟨 **Frontend**
No arquivo `.env` dentro da pasta `front-end/`:
---

## 🚀 Deploy no Render

### 1️⃣ Criação do repositório
Envie o projeto completo para o GitHub (backend e front-end nas pastas correspondentes).

### 2️⃣ Configuração no Render
- Crie **dois serviços**:
  - **Backend:** tipo `Web Service`
  - **Frontend:** tipo `Static Site`
- Em ambos, conecte o repositório GitHub.
- Configure as pastas:
  - Backend → `rootDir: backend`
  - Frontend → `rootDir: front-end`
- Use o seguinte **render.yaml**:

```yaml
services:
  - type: web
    name: aprimorado-backend
    env: node
    rootDir: backend
    buildCommand: npm install && npm run build
    startCommand: npm run start
    plan: free
    envVars:
      - key: PORT
        value: 10000
      - key: NODE_ENV
        value: production

  - type: static
    name: aprimorado-frontend
    rootDir: front-end
    buildCommand: npm install && npm run build
    staticPublishPath: dist
    envVars:
      - key: VITE_API_URL
        value: https://aprimorado-minha-aplica-web-serve.onrender.com
cd backend
npm install
npm run dev
cd front-end
npm install
npm run dev
Pronto ✅  
Você pode **copiar e colar** exatamente como está no arquivo `README.md` do seu repositório.  

