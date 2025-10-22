# Documentação de Informações - Primeira-API

Este documento resume a arquitetura, tecnologias e endpoints do projeto "Primeira-API", com base nos arquivos de código-fonte fornecidos.

## 1. Visão Geral e Tecnologias

O projeto é uma API RESTful construída com Node.js e Express, utilizando TypeScript para tipagem de código e TypeORM como ORM para se conectar a um banco de dados PostgreSQL.

**Tecnologias Principais:**
* **Node.js / Express:** Servidor web.
* **TypeScript:** Linguagem de programação.
* **TypeORM:** ORM para interação com banco de dados.
* **PostgreSQL:** Banco de dados relacional.
* **jsonwebtoken (JWT):** Para autenticação baseada em token.
* **bcryptjs:** Para criptografia de senhas.

## 2. Arquitetura do Projeto

A API segue um padrão de design `Controller-Service-Repository`:

* **`src/server.ts`:** Ponto de entrada. Inicia o servidor Express, aplica middlewares globais (como `express.json()`) e carrega as rotas.
* **`src/routes.ts`:** Define todos os *endpoints* da API (ex: `/users`, `/products`) e os associa a um `Controller`.
* **`src/controllers/`:** Camada responsável por receber a requisição (Request) e enviar a resposta (Response). Ele extrai dados da requisição e chama o Serviço correspondente.
* **`src/services/`:** Camada que contém a lógica de negócio. Valida dados, aplica regras e chama o Repositório para acessar o banco.
* **`src/repository/`:** Camada de abstração do banco de dados. Define métodos específicos para consultar as entidades (ex: `UsersRepostories`).
* **`src/entity/`:** Mapeamento das tabelas do banco de dados para classes TypeScript usando o TypeORM.
* **`src/interfaces/`:** Define os formatos (contratos) dos objetos de requisição (ex: `IUserRequest`, `IProductRequest`).

## 3. Endpoints da API

A seguir estão todos os endpoints definidos em `src/routes.ts`.

### 3.1. Autenticação

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/login` | Autentica um usuário e retorna um token JWT. |

### 3.2. Usuários (Users)

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/users` | Cria um novo usuário. |
| `GET` | `/users` | Lista todos os usuários. |
| `DELETE` | `/users/:id` | Deleta um usuário pelo ID. |
| `PUT` | `/users/:id` | Atualiza um usuário pelo ID. |

### 3.3. Clientes (Clients)

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/clients` | Cria um novo cliente. |
| `GET` | `/clients` | Lista todos os clientes. |
| `DELETE` | `/clients/:id` | Deleta um cliente pelo ID. |
| `PUT` | `/clients/:id` | Atualiza um cliente pelo ID. |

### 3.4. Produtos (Products)

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/products` | Cria um novo produto. |
| `GET` | `/products` | Lista todos os produtos. |
| `DELETE` | `/products/:id` | Deleta um produto pelo ID. |
| `PUT` | `/products/:id` | Atualiza um produto pelo ID. |

### 3.5. Categorias (Categories)

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/categories` | Cria uma nova categoria. |
| `GET` | `/categories` | Lista todas as categorias. |
| `DELETE` | `/categories/:id` | Deleta uma categoria pelo ID. |
| `PUT` | `/categories/:id` | Atualiza uma categoria pelo ID. |

### 3.6. Vendas (Sales)

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/sales` | Registra uma nova venda. |
| `GET` | `/sales` | Lista todas as vendas. |
| `DELETE` | `/sales/:id` | Deleta uma venda pelo ID. |
| `PUT` | `/sales/:id` | Atualiza uma venda pelo ID. |

## 4. Modelos de Dados (Entidades)

Atualmente, duas entidades estão definidas no `src/entity/`:

* **User** (`src/entity/User.ts`):
    * `id` (string, uuid)
    * `name` (string)
    * `email` (string)
    * `admin` (boolean)
    * `password` (string)
    * `created_at` (Date)
    * `update_at` (Date)

* **Category** (`src/entity/Category.ts`):
    * `id` (string, uuid)
    * `name` (string)
    * `description` (string)
    * `created_at` (Date)
    * `update_at` (Date)

## 5. Autenticação e Segurança

* A API usa o middleware `ensureAuthenticated` para proteger rotas.
* Este middleware verifica a validade de um token JWT enviado no cabeçalho `Authorization`.
* O token é gerado durante o Login (rota `/login`).
* As senhas são armazenadas de forma segura usando `bcryptjs` para criar um hash.

## 6. Observações e Próximos Passos

1.  **Lógica de Serviço Incompleta:** Muitos serviços (como `CreateProductService`, `ListClientService`, `DeleteCategoryService`) não possuem lógica de banco de dados. Eles apenas retornam dados estáticos ("mockados") ou a própria requisição.
    * **Ação:** Implementar a lógica real de `find`, `create`, `save`, `update` e `delete` usando o TypeORM, similar ao que foi feito nos serviços de `User`.

2.  **Entidades Faltando:** Os controllers e serviços para `Client`, `Product` e `Sale` existem, mas os arquivos de Entidade (`src/entity/Client.ts`, `src/entity/Product.ts`, `src/entity/Sale.ts`) não foram criados.
    * **Ação:** Criar as entidades e seus respectivos repositórios em `src/repository/` para permitir a persistência desses dados.

3.  **Posicionamento do Middleware de Auth:** Em `src/routes.ts`, a linha `router.use(ensureAuthenticated);` está no final do arquivo. Isso significa que **nenhuma rota está sendo protegida**.
    * **Ação:** Mover `router.use(ensureAuthenticated);` para logo após as rotas públicas (como `/login` e `/users` (POST)), para que todas as rotas subsequentes exijam autenticação.

4.  **Arquivo Inútil:** O arquivo `src/index.ts` parece ser um arquivo de teste inicial do TypeORM e não é usado pelo servidor principal (`src/server.ts`).
    * **Ação:** Pode ser removido para evitar confusão.