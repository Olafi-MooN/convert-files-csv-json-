const convertToCsv = require('./convertToCsv');
const convertToJson = require('./convertToJson');
const defaultFile = require('./defaultFile');

// Execute uma função de cada vez

// O primeiro parametro recebe o nome do aquivo que se quer converter
// O segundo paramentro recebe o nome da saida do arquivo
convertToJson("./base.CSV", "base.json");

// O primeiro parametro recebe o nome do aquivo que se quer "padronizar"
// O segundo paramentro recebe o nome da saida do arquivo
defaultFile("./base.json", "default.json");

// O primeiro parametro recebe o nome do aquivo que se quer converter
// O segundo paramentro recebe uma lista com os nomes das colunas
// O segundo paramentro recebe o nome da saida do arquivo
convertToCsv("./default.json", ["name","email","cpf","ra","unidade","curso","disciplina"], "dataBaseFullFormated.csv");

    

