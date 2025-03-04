# 🚗 Rodas e Motores - Plataforma de Veículos

![Preview](/.github/Preview.png)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MUI](https://img.shields.io/badge/Material_UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)

Plataforma web para compra e venda de veículos usados, oferecendo uma experiência intuitiva para usuários e anunciantes.

[Clique aqui para acessar](https://rodas-e-motores-gnvc2tp0k-rafaeldamascenos-projects.vercel.app)

## ✨ Funcionalidades Principais

- **Sistema de Autenticação Segura**
  - Cadastro de novos usuários
  - Login com token JWT
  - Controle de sessão persistente
  
- **Interface Moderna**
  - Componentes reutilizáveis
  - Navegação intuitiva
  
## 🛠 Tecnologias Utilizadas

| Tecnologia       | Descrição                                 |
|------------------|-------------------------------------------|
| React            | Biblioteca frontend para construção de UI |
| TypeScript       | Tipagem estática para JavaScript          |
| Material UI      | Componentes UI modernos e responsivos     |
| React Router DOM | Controle de navegação SPA                 |
| Axios            | Cliente HTTP para integração com API      |
| Prettier         | Formatação consistente de código          |

## 🚀 Como Executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/rodas-e-motores.git
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

## 🔄 Fluxo de Autenticação

```mermaid
sequenceDiagram
    participant Usuário
    participant Frontend
    participant Backend

    Usuário->>Frontend: Submete formulário
    Frontend->>Backend: POST /auth/login
    Backend-->>Frontend: Token JWT
    Frontend->>LocalStorage: Armazena token
    Frontend-->>Usuário: Redireciona para dashboard
```

## 📌 Próximas Melhorias
- [ ] Responsividade 
- [ ] Sistema avançado de busca por filtros
- [ ] Upload de imagens para anúncios
- [ ] Sistema de favoritos
- [ ] Dashboard de gerenciamento de anúncios
- [ ] Integração com serviços de pagamento
- [ ] Melhorias de performance (lazy loading)


---

**Desenvolvido com ❤️ por Rafael Damasceno**  
⚡ [Reportar Bug](https://github.com/seu-usuario/rodas-e-motores/issues)

