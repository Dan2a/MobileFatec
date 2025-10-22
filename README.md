# Primeira-API

## Descrição

**Primeira-API** é uma API RESTful desenvolvida como parte das aulas de desenvolvimento mobile na FATEC. A API gerencia entidades como Usuários, Clientes, Produtos, Categorias e Vendas, incluindo autenticação baseada em JWT.

## Tecnologias Utilizadas

* **Backend:** Node.js
* **Framework:** Express
* **Linguagem:** TypeScript
* **ORM:** TypeORM
* **Banco de Dados:** PostgreSQL
* **Autenticação:** JSON Web Tokens (JWT)
* **Criptografia de Senha:** bcryptjs
* **Geração de ID (Opcional - se manteve UUID):** UUID
* **Gerenciador de Pacotes:** Yarn

## Funcionalidades

* Autenticação de usuários (Login) com retorno de token JWT.
* Cadastro de novos usuários.
* Gerenciamento completo (CRUD - Create, Read, Update, Delete) para:
    * Usuários (Users)
    * Clientes (Clients)
    * Produtos (Products)
    * Categorias (Categories)
    * Vendas (Sales)
* Validação de regras de negócio (ex: email/CPF/nome únicos).
* Rotas protegidas por autenticação JWT.

## Pré-requisitos

* Node.js (versão 18 ou superior recomendada)
* Yarn (ou NPM)
* PostgreSQL (instalado e rodando)
* Um cliente de banco de dados (como DBeaver, PgAdmin) para criar o banco inicial.

## Instalação e Configuração

1.  **Clone o repositório:**
    ```bash
    git clone <https://github.com/Dan2a/MobileFatec>
    cd Primeira-API
    ```

2.  **Instale as dependências:**
    ```bash
    yarn install
    ```

3.  **Crie o Banco de Dados:**
    * Usando seu cliente de banco de dados, crie um novo banco de dados. O nome padrão configurado é `api`.

4.  **Configure a Conexão com o Banco:**
    * Renomeie ou copie o arquivo `ormconfig.json.example` (se existir) para `ormconfig.json`.
    * Edite o arquivo `ormconfig.json` com suas credenciais do PostgreSQL:
        ```json
        {
            "type": "postgres",
            "host": "localhost", // ou o host do seu DB
            "port": 5432,      // ou a porta do seu DB
            "username": "seu_usuario_postgres",
            "password": "sua_senha_postgres",
            "database": "api", // ou o nome que você criou
            "synchronize": false, // Mantenha false ao usar migrations
            "logging": false,
            "entities": ["src/entity/**/*.ts"],
            "migrations": ["src/database/migration/**/*.ts"],
            "subscribers": ["src/subscriber/**/*.ts"],
            "cli": {
                "entitiesDir": "src/entity",
                "migrationsDir": "src/database/migration",
                "subscribersDir": "src/subscriber"
            }
        }
        ```

5.  **Execute as Migrations:**
    * Este comando criará todas as tabelas no banco de dados com base nas entidades definidas.
    ```bash
    yarn typeorm migration:run
    ```

6.  **Execute a Aplicação (Modo Desenvolvimento):**
    * Este comando iniciará o servidor e o reiniciará automaticamente ao detectar alterações nos arquivos `.ts`.
    ```bash
    yarn dev
    ```
    * O servidor estará rodando em `http://localhost:3000`.

## Estrutura do Projeto
├── src/│
        ├── controllers/ # Camada de controle (recebe requisições, chama serviços) │
            ├── authenticated/ 
            ├── category/ 
            ├── client/ 
            ├── product/ 
            ├── sale/ 
            └── user/ 
        ├── database/ # Configuração de conexão e migrations 
            └── migration/ 
        ├── entity/ # Definição das entidades (mapeamento tabelas <-> classes)
        ├── interfaces/ # Definição de tipos/interfaces para DTOs 
        ├── middlewares/ # Middlewares (ex: autenticação) 
        ├── repository/ # Camada de acesso a dados (interação direta com TypeORM) 
        └── services/ # Camada de serviço (lógica de negócio) 
            ├── authenticated/  
            ├── category/ 
            ├── client/ 
            ├── product/ 
            ├── sale/ 
            └── user/ 
        ├── routes.ts # Definição de todas as rotas da API 
        └── server.ts # Ponto de entrada da aplicação (criação do servidor Express)
├── ormconfig.json # Configuração do TypeORM 
├── package.json # Dependências e scripts do projeto 
├── tsconfig.json # Configuração do TypeScript 
└── yarn.lock # Lockfile do Yarn


## Estrutura do Projeto

* **`Primeira-API/`**
    * **`src/`**
        * **`controllers/`**: Camada de controle (recebe requisições, chama serviços)
            * `authenticated/`
            * `category/`
            * `client/`
            * `product/`
            * `sale/`
            * `user/`
        * **`database/`**: Configuração de conexão e migrations
            * `migration/`
        * **`entity/`**: Definição das entidades (mapeamento tabelas <-> classes)
        * **`interfaces/`**: Definição de tipos/interfaces para DTOs
        * **`middlewares/`**: Middlewares (ex: autenticação)
        * **`repository/`**: Camada de acesso a dados (interação direta com TypeORM)
        * **`services/`**: Camada de serviço (lógica de negócio)
            * `authenticated/`
            * `category/`
            * `client/`
            * `product/`
            * `sale/`
            * `user/`
        * `routes.ts`: Definição de todas as rotas da API
        * `server.ts`: Ponto de entrada da aplicação (criação do servidor Express)
    * `ormconfig.json`: Configuração do TypeORM
    * `package.json`: Dependências e scripts do projeto
    * `tsconfig.json`: Configuração do TypeScript
    * `yarn.lock`: Lockfile do Yarn

## Endpoints da API

* **Base URL:** `http://localhost:3000`

Consulte o arquivo `src/routes.ts` para a lista completa de endpoints. A maioria das rotas (exceto `/login` e `POST /users`) requer autenticação via Bearer Token no cabeçalho `Authorization`.

**Exemplo de fluxo:**

1.  **Criar Usuário:** `POST /users` (Body: `{ "name": "...", "email": "...", "password": "..." }`)
2.  **Login:** `POST /login` (Body: `{ "email": "...", "password": "..." }`) -> Retorna `{ "token": "seu_jwt_token" }`
3.  **Listar Usuários (Autenticado):** `GET /users` (Header: `Authorization: Bearer seu_jwt_token`)

## Testando

Use ferramentas como Postman, Insomnia ou `curl` para interagir com a API. Lembre-se de obter um token via `/login` e incluí-lo nas requisições às rotas protegidas.