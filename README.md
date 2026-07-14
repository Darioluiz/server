# 🎟️ API Ticket

Uma API robusta para gerenciamento de tickets de suporte desenvolvida **100% em Node.js puro**, sem a utilização de frameworks (como Express ou Fastify). O objetivo principal deste projeto foi entender a arquitetura web por debaixo dos panos, manipulando requisições HTTP, rotas, buffers e persistência de dados de forma nativa.

---

## 🚀 Tecnologias Utilizadas

*   **Node.js** (Ambiente de execução)
*   **JavaScript (ES6+)**
*   **JSON** (Utilizado como banco de dados local para persistência)

---

## 🧠 O que foi desenvolvido ("Na Mão")

Para construir esta API sem dependências externas, foram implementados do zero:

*   **Roteamento Dinâmico:** Criação e correspondência de rotas utilizando Expressões Regulares (Regex) para identificar parâmetros dinâmicos (como `/tickets/:id`).
*   **Manipulação de Query Params:** Construção de um parser manual para extrair filtros e parâmetros de busca da URL (ex: `?status=open`).
*   **Middlewares de Interceptação:** Implementação de um manipulador de JSON (`jsonHandler`) para ler os chunks da requisição (Streams) e parsear o corpo (Body) de requisições POST, PUT e PATCH.
*   **Banco de Dados JSON:** Persistência de dados diretamente em um arquivo físico (`db.json`) utilizando o módulo nativo `fs/promises` do Node.js.

---

## 🛠️ Funcionalidades (End-points)

A API possui o CRUD completo para gerenciamento de tickets:

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **GET** | `/tickets` | Lista todos os tickets (suporta filtros via Query Params) |
| **POST** | `/tickets` | Cria um novo ticket |
| **PUT** | `/tickets/:id` | Atualiza as informações de um ticket existente |
| **DELETE** | `/tickets/:id` | Remove um ticket do sistema |

---

## 💻 Como Rodar o Projeto

### Pré-requisitos
* Ter o **Node.js** instalado em sua máquina.

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/Darioluiz/server.git](https://github.com/Darioluiz/server.git)
