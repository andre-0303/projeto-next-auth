# Next.js Auth App

> **Projeto de autenticação** usando Next.js 13 (App Router), NextAuth, Supabase, e Tailwind CSS. Fornece login por **credenciais**, **Google** e **GitHub**, além de cadastro de usuários.

---

## 📋 Sumário

- [Tecnologias](#-tecnologias)
- [Funcionalidades](#-funcionalidades)
- [Instalação](#-instalação)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Uso](#-uso)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)

---

## 🚀 Tecnologias

- **Next.js 13** (App Router)
- **NextAuth.js** para autenticação
- **Supabase** como backend de banco de dados
- **Tailwind CSS** para estilos utilitários
- **bcrypt.js** para hash de senhas
- **React Icons** (FontAwesome) para ícones
- **Framer Motion** (opcional) para animações

---

## ✨ Funcionalidades

- 🔒 **Login** com credenciais (email/senha)
- 🌐 **Login** via Google e GitHub
- 📝 **Cadastro** de novos usuários com validação de email e senha
- 🚪 **Logout** de forma segura
- 📊 **Dashboard** interativo com estatísticas simuladas
- 👤 **Perfil** de usuário (leitura apenas)
- 👁️ **Mostrar/Ocultar senha** em campos de senha

---

## 🛠️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   cd SEU_REPOSITORIO
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Crie o arquivo de variáveis de ambiente `.env.local` na raiz e adicione:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=SUA_CHAVE_SECRETA

   NEXT_PUBLIC_SUPABASE_URL=https://<projeto>.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<sua-anon-key>

   GOOGLE_CLIENT_ID=<seu-google-client-id>
   GOOGLE_CLIENT_SECRET=<seu-google-client-secret>

   GITHUB_CLIENT_ID=<seu-github-client-id>
   GITHUB_CLIENT_SECRET=<seu-github-client-secret>
   ```

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

---

## 📂 Estrutura de Pastas

```bash
src/
├── app/
│   ├── api/auth/[...nextauth]/route.ts    # NextAuth
│   ├── dashboard/page.tsx                 # Dashboard protegido
│   ├── profile/page.tsx                   # Perfil do usuário
│   ├── register/page.tsx                  # Página de cadastro
│   ├── login/page.tsx                     # Página de login principal
│   └── components/                        # Componentes reutilizáveis
│       ├── LoginForm.tsx
│       └── RegisterForm.tsx
├── lib/
│   └── supabase.ts                        # Instância do Supabase
└── ...
```

---

## ▶️ Uso

- Acesse `http://localhost:3000` para ver a **tela de login**.
- Clique em **"Faça seu cadastro"** para abrir o formulário de registro.
- Após fazer login, você será levado(a) ao **dashboard**.
- Em **Perfil**, visualize suas informações.

---

## 🤝 Contribuindo

1. Fork este repositório
2. Crie uma branch com sua feature: `git checkout -b feature/nova-funcionalidade`
3. Commit suas alterações: `git commit -m 'Adiciona nova funcionalidade'`
4. Push para a branch: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

> Criado com ❤️ por [BandeiraDev](https://github.com/andre-0303)

