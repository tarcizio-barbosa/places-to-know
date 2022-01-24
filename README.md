# Places To Know

Places To Know é uma API de cadastro de lugares para se conhecer no Brasil. Baseado no nome da cidade ou minicipio, a API é capaz de utilizar os serviços da API do [Unsplash](https://unsplash.com/developers) e cadastrar também a foto do local.

Esta aplicação é toda escrita em Typescript. Conta com um servidor HTTP feito em Express. Utiliza Postgres como banco de dados, com o auxilio do TypeORM para a sua manipulação. Além de usar uma estrutura de repositórios utilizando injeção de dependência.

Possui cobertura de testes automatizados com Jest e Supertest.

O padrão de escrita do código é garantido com o ESLint(Airbnb).

## Documentação

- [Dependências](#dependências)
- [Infraestrutura](#infraestrutura)
- [Testes](#testes)
- [Servidor](#servidor)
- [Contato](#contato)

## Dependências

Instale as depedências com:

```bash
$ npm i --save

# OR

$ yarn
```

## Infraestrutura

Para estabelecer a conexão automática com o banco de dados. Basta apenas utilizar o `docker compose` que está na raiz do projeto.

```bash
$ docker-compose up -d
```

## Testes

Esta API é coberta tanto por testes unitários quanto por testes de integração. Ao todo a aplicação conta com 20 testes automatizados. Foram testadas **93.81%** **( 379/404 )** linhas.

```bash
$ yarn test
```

## Servidor

Para iniciar o servidor, apenas execute o script de `dev` e a API estará disponível para realização das requisições.

É importante também adicionar as variáveis de ambiente dentro do seu diretório.

Dados sobre as variáveis estão disponível no arquivo de exemplo `.env.example`. 

```bash
$ yarn dev
```

## Contato

Esta API foi desenvolvida por mim e faz parte do teste de dev backend da [Tindin](https://www.tindin.com.br/).


[![LinkedIn](https://img.shields.io/badge/LinkedIn-tarcizio--barbosa-informational)](https://www.linkedin.com/in/tarcizio-barbosa/)

![](https://img.shields.io/badge/E--mail-tarcizio.barbosa%40outlook.com-blue)

![](https://img.shields.io/badge/WhatsApp-(91)%209%208482--7058-green)
