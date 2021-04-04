Guideline RNP
=============

### Estrutura das aplicações

```
/src
/release
/guidelineApp
```

O projeto da *Guideline RNP* está dividido em gerador de pacote `/src` e aplicação web da Documentação `/guidelineApp`.

A pasta `/release` armazena a versão gerada pelo gerador de pacote.


## Instalando Dependências

Dentro da pasta `/src` existem os arquivos `bower.json` e o `package.json`.

O arquivo `bower.json` é responsável por gerenciar as dependências das bibliotecas utilizadas pela *Guideline RNP*.

O arquivo `package.json` é responsável por gerenciar as dependências do gerador de pacotes do projeto.


### Instruções

* Acesse a pasta `/src`:

* Instale as dependências do projeto e de bibliotecas:
```bash
$ sudo npm install
$ bower install
```

> Nota: é necessário ter `Node#0.10.0`, `Bower` e `Gulp` instalados em seu ambiente.

## Executando a tarefa de Build

* Acesse a pasta `/src`:

* Execute o comando de Build do projeto:
```bash
$ gulp build
```

Todo o build gerado, será copiado uma versão para as pastas `/release` e `/guidelineApp/src/release` com a última versão gerada.

## Aplicação Web de Documentação da Guideline

A pasta `/guidelineApp` contém a versão web da documentação com exemplos de utilização.


### Instalando dependências

* Acesse a pasta `/guidelineApp`:

* Instale as dependências do projeto e de bibliotecas:
```bash
$ sudo npm install
$ bower install
```

> Nota: é necessário ter `Npm#2.0+`, `Node#0.10.0`, `Bower` e `Gulp` instalados em seu ambiente.

### Executando a aplicação

* Para executar a aplicação, acesse a pasta `/guidelineApp`:

* Execute o comando:
```bash
$ gulp serve
```
Será aberto uma aba de seu navegador no endereço `http://localhost:3000`

### Gerando versão final da Documentação

* Para gerar a versão final da aplicação web, acesse a pasta `/guidelineApp`:

* Execute o comando:
```bash
$ gulp build
```

* Ao termino da tarefa, será gerado uma pasta dentro de `/guidelineApp` chamada `dist` contendo a versão final e minificada da
Documentação da Guideline RNP.
