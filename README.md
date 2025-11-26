# 🕊️ Sistema de Gestão - Grupo Paz (Narcóticos Anônimos)

> Projeto Integrador desenvolvido para centralizar a comunicação, gestão de eventos e transparência financeira do grupo NA.

![Status do Projeto](https://img.shields.io/badge/STATUS-CONCLUÍDO-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🌐 Links de Acesso

* **📱 Área Pública (Membros):** [https://grupopaz.vercel.app](https://grupopaz.vercel.app)

---

## 🎯 Sobre o Projeto

Este sistema foi desenvolvido para resolver a fragmentação de informações enfrentada pelo grupo **Grupo Paz**. Anteriormente, dados cruciais sobre reuniões, eventos e finanças estavam dispersos em cadernos físicos e mensagens de WhatsApp.

A plataforma oferece uma solução centralizada, segura e acessível, dividida em duas frentes:
1.  **Área Pública:** Acesso facilitado para membros consultarem a agenda de reuniões, mural de eventos e prestação de contas (Sétima Tradição) sem necessidade de login.
2.  **Área Administrativa:** Painel restrito para servidores de confiança gerenciarem o conteúdo e a tesouraria do grupo.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando uma arquitetura desacoplada (**Frontend** separado do **Backend**), garantindo escalabilidade e facilidade de manutenção.

### Frontend (Interface)
* ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) **React + Vite:** Para uma interface rápida e reativa.
* ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) **TypeScript:** Para tipagem estática e segurança no código.
* **CSS Modules:** Para estilização modular e isolada.

### Backend (API)
* ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white) **Node.js + Express:** API RESTful robusta.
* ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=flat&logo=Prisma&logoColor=white) **Prisma ORM:** Para interação segura e tipada com o banco de dados.
* ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white) **PostgreSQL:** Banco de dados relacional para integridade dos dados.
* **Zod:** Validação rigorosa de esquemas de dados.
* **Nodemailer:** Serviço de envio de e-mails transacionais (recuperação de senha).

### Segurança & Deploy
* **JWT & Bcrypt:** Autenticação segura e criptografia de senhas.
* **Vercel:** Plataforma de hospedagem utilizada para Frontend e Backend.

---

## ✨ Funcionalidades Principais

### 🔓 Acesso Público
* **Agenda Semanal:** Visualização clara dos dias e horários das reuniões.
* **Mural de Eventos:** Divulgação de confraternizações e workshops.
* **Transparência Financeira:** Visualização dos saldos atuais da secretaria (Dinheiro e Pix).

### 🔒 Acesso Administrativo (Restrito)
* **Gestão de Eventos:** Criar, editar e remover eventos do mural.
* **Gestão de Reuniões:** Configurar a grade horária das reuniões.
* **Controle de Secretaria:** Registrar entradas financeiras com histórico imutável (trilha de auditoria).
* **Gestão de Usuários:** Convidar novos administradores e gerenciar permissões.
* **Recuperação de Senha:** Fluxo seguro via e-mail.

---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos
* Node.js (v20 ou superior)
* Gerenciador de pacotes (NPM ou Yarn)
* Git

### 1. Configurando o Backend

1.  Entre na pasta do backend:
    ```bash
    cd backend
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Configure as variáveis de ambiente:
    * Crie um arquivo `.env` na raiz da pasta `backend`.
    * Copie o conteúdo de `.env.example` e preencha os valores reais:
    ```env
    DATABASE_URL="postgresql://usuario:senha@host:5432/nome_banco"
    JWT_SECRET="sua_chave_secreta_jwt"
    API_KEY="chave_compartilhada_front_back"
    FRONTEND_URL="http://localhost:5173"
    EMAIL_HOST="smtp.gmail.com"
    EMAIL_PORT=465
    EMAIL_USER="seu_email@gmail.com"
    EMAIL_PASS="sua_senha_de_app"
    SUPER_ADMIN_EMAIL="admin@exemplo.com"
    SUPER_ADMIN_PASSWORD="senha_inicial"
    ```
4.  Execute as migrações do banco de dados:
    ```bash
    npx prisma migrate dev
    ```
5.  (Opcional) Popule o banco com dados iniciais:
    ```bash
    npx prisma db seed
    ```
6.  Inicie o servidor:
    ```bash
    npm run dev
    ```

### 2. Configurando o Frontend

1.  Entre na pasta do frontend (em outro terminal):
    ```bash
    cd frontend
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Configure as variáveis de ambiente:
    * Crie um arquivo `.env` na raiz da pasta `frontend`.
    * Preencha com os dados do seu backend local:
    ```env
    VITE_API_BASE_URL="http://localhost:3333"
    VITE_API_KEY="a_mesma_chave_definida_no_backend"
    ```
4.  Inicie a aplicação:
    ```bash
    npm run dev
    ```
5.  Acesse `http://localhost:5173` no seu navegador.

---

## 📂 Estrutura do Repositório

O projeto está organizado em dois diretórios principais:

* `/backend`: Contém a API, modelos do Prisma, Controllers, Middlewares e configurações de envio de e-mail.
* `/frontend`: Contém a aplicação React, componentes, páginas e serviços de integração.

---

## 👥 Autores

Projeto desenvolvido pelos alunos da **Faculdade de Tecnologia da UNICAMP (FT)** para a disciplina de Projeto Integrador:

* **Julia Dias Luz** - UX/UI Designer
* **Juliana da Costa Silva** - Scrum Master
* **Maria Luíza Sperancin Mancebo** - Product Owner & Dev
* **Ryan Pavini** - Desenvolvedor Backend

---

<p align="center">
  Feito com 💙 para o Grupo Paz.
</p>
