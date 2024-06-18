<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<h2 align="center">
    API AGENDAMENTO <br />
    Framework: Nest <br />
    Tipo: REST-API
</h2>

<h3 align="center">
    🚀 PROJETO EM ANDAMENTO 🚀
</h3>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Uma aplicação fantástica como o <a href="http://nodejs.org" target="_blank">Node.js</a> estrutura para construir aplicativos do lado do servidor eficientes e escaláveis.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Descrição projeto nest GitHub

[Nest](https://github.com/nestjs/nest) repositório inicial TypeScript da estrutura.

## Clonar o projeto

```bash
    # Clone o Repositório:
    $ git clone https://github.com/SilvaneiMartins/api-reserva-ingresso

    # Entre no Diretório:
    cd api-reserva-ingresso
```

## Docker compose

```bash
    # configuração do docker compose
    services:
        db:
            image: mysql:8.0.30-debian
            environment:
                MYSQL_ROOT_PASSWORD: root
                MYSQL_DATABASE: ingresso
            ports:
                - 3306:3306
```

## Executar o banco no container (DOCKER)

```bash
    # comando para criar container
    # obs. tem que esta na raiz do projeto
    $ docker-compose up -d

    # comando parar o container
    $ docker-compose down
```

## Executar o prisma

```bash
    # gerar as tabelas no banco de dados
    $ npx prisma migrate dev
```

## Instalar dependências

```bash
$ yarn install
```

## Executar o projeto

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Executar os test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

#### Suporte do framework

Nest é um projeto de código aberto licenciado pelo MIT. Pode crescer graças aos patrocinadores e ao apoio de patrocinadores incríveis. Se você quiser se juntar a eles, por favor [leia mais aqui](https://docs.nestjs.com/support).

## Licença projeto

Este projeto é licenciado sob [CC0 1.0 Universal]. Consulte o arquivo [LICENSE](https://github.com/SilvaneiMartins/api-reserva-ingresso/blob/master/LICENSE) para obter detalhes.

## Como contribuir com o projeto

Se você deseja contribuir para este projeto, siga estas etapas:

    🔹 Faça um fork deste repositório
    🔹 Crie uma nova branch (git checkout -b feature/)
    🔹 Faça commit de suas alterações (git commit -am 'Adicionar nova funcionalidade')
    🔹 Faça push para a branch (git push origin feature/)
    🔹 Crie um novo Pull Request

## Informação do desenvolvedor

<a href="https://github.com/SilvaneiMartins">
    <img
        style="border-radius:50%"
        src="https://github.com/SilvaneiMartins.png"
        width="100px;"
        alt="Silvanei Martins"
    />
    <br />
    <sub>
        <b>Silvanei Martins</b>
    </sub>
</a>
