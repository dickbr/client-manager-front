# Client Manager Frontend

## Descrição
Este é o Frontend do sistema de gerenciamento de clientes, desenvolvido com Next.js. A interface do usuário utiliza componentes do Material-UI e consome a API fornecida pelo [Client Manager API](https://github.com/dickbr/client-manager-api).

## Instalação

Certifique-se de ter o Node.js e o Yarn instalados em sua máquina.

1. Clone o repositório:
```bash
   git clone https://github.com/dickbr/client-manager-front.git
   cd client-manager-front
```
2. Instale as dependências:
```bash
   yarn install
```
3. Configure a URL da API:

  Edite o arquivo .env.local e defina a variável NEXT_PUBLIC_API_URL com a URL da sua API. Exemplo:

```bash
    NEXT_PUBLIC_API_URL=http://localhost:3001
```
4. Inicie o servidor de desenvolvimento:
```bash

    yarn dev
```
A aplicação estará disponível em http://localhost:3000.
Tecnologias Utilizadas

    Next.js
    Material-UI
    Styled Components
    SWR

Scripts

    yarn dev: Inicia o servidor de desenvolvimento.
    yarn build: Compila o projeto.
    yarn start: Inicia o servidor de produção.
    yarn lint: Executa a verificação de linting.

Licença

Este projeto é licenciado sob a MIT License.
