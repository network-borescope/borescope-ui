# Interface Gráfica do Projeto Borescope da RNP

Este projeto foi criado com [Angular CLI](https://github.com/angular/angular-cli) versão 11.2.1.

## Pré-requisitos

**1. Angular-cli**

  Para instalar o Angular:
  
    >npm install -g @angular/cli
  
**2. LTS ativo ou em manutenção do Node.js**

## Emulando localmente a aplicação:

1. Dentro do diretório **borescope-ui/front** rodar `ng serve`;

2. Navegue para `http://localhost:4200/`;

3. A aplicação atualizará automaticamente caso algum dos arquivos de codigo seja salvo.

## Consumo de dados

Os dados consumidos pela aplicação são provenientes do backend, os quais são armazenados na estrutura de dados tinycubes e o consumo é feito através da url abaixo:

>http://gwrec.cloudnext.rnp.br:60089/tc/query2

O path para o arquivo que indica de onde o dado é consumido é:
**borescope-ui/front/src/app/shared/api.service.ts**
