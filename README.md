# Converta arquivos CSV para JSON ou JSON para CSV

> OBS: ainda esta em desenvolvimento

## Instalação

Abra o terminal e navegue ate o diretório do projeto, digite node install

```
node install

```

## Como utilizar?

Dentro do app.js existe 3 funções

### Primeiros passos

1. Adicione o arquivo csv ou json que queira converter
2. Utilize as funções abaixo para manipulalos

### convertToJson(nameFileCsv, fileOutJson)

O primeiro parametro recebe o nome do aquivo que se quer converter
O segundo paramentro recebe o nome da saida do arquivo

Exemplo:

```
convertToJson("./base.CSV", "base.json");

```

### convertFileToDefault (fileInput, fileOutput)

O primeiro parametro recebe o nome do aquivo que se quer "padronizar"
O segundo paramentro recebe o nome da saida do arquivo

Exemplo:

```
defaultFile("./base.json", "default.json");
```

### convertToCsv(fileinput, collunmTable, fileOutput)

O primeiro parametro recebe o nome do aquivo que se quer converter
O segundo paramentro recebe uma lista com os nomes das colunas
O segundo paramentro recebe o nome da saida do arquivo

Exemplo:

```
convertToCsv("./default.json", ["name","email","cpf","ra","unidade","curso","disciplina"], "dataBaseFullFormated.csv");
```
