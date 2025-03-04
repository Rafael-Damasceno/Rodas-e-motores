# Backend do Projeto Rodas e Motores

## 🚀 Começando

Para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```

## 🔐 Funcionalidades de Autenticação

### 📝 Cadastro de Usuário

1. **Processo de Registro**:
   - O usuário fornece as informações necessárias
   - O sistema gera um ID único para validação
   - Após validação bem-sucedida, as credenciais (nome de usuário e senha) são armazenadas

2. **Fluxo Principal**:
   ```mermaid
   graph TD
     A[Início do Cadastro] --> B[Coleta de Dados]
     B --> C[Geração de ID]
     C --> D[Validação de Informações]
     D --> E[Armazenamento no Sistema]
     E --> F[Redirecionamento para Login]
   ```

### 🔑 Login de Usuário

1. **Processo de Autenticação**:
   - Verificação das credenciais no banco de dados
   - Validação de nome de usuário e senha
   - Geração de token JWT para autenticação

2. **Fluxo de Segurança**:
   ```mermaid
   graph TD
     A[Tentativa de Login] --> B{Credenciais Válidas?}
     B -->|Sim| C[Gera Token JWT]
     B -->|Não| D[Retorna Erro 401]
     C --> E[Autenticação Bem-sucedida]
   ```

