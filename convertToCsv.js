// CONVERTER JSON PARA CSV

// Importações de modulos e arquivos
const {parse} = require('json2csv');

const fs = require('fs');
const readline = require('readline');

const convertToCsv = (fileinput, collunmTable, fileOutput) => {
    // adicionando as colunas da tabela e convertando o json em csv
    const jsonFile = require(fileinput);
    const csv = parse(jsonFile, {fields:  collunmTable, withBOM: true, excelStrings: true});

    // Salvando o arquivo na pasta
    fs.writeFile('result.csv', csv, err => console.error(err || "Arquivo convertido com sucesso"));

    // Prearando para ler linha a linha do arquivo
    const readable = fs.createReadStream("result.csv");

    // Criando a interface de saida da linha
    const rl = readline.createInterface({
        input: readable,
        output: process.stdout
    });

    // Função para fazer a formatação da linha do csv
    function palavras(palavra){    
        const a = palavra.split('')
            .map(item =>  (item === '"' || item === '[' || item === ']' || item === '=')? item = '': item)
                .join('');
        return a;
    }

    // Para cada linha lida, após ler a linha adicine a mesma dentro do arquivo 'baseFullDate'
    rl.on('line', (line) => {
        fs.appendFile(fileOutput, palavras(line)+"\n","utf8",err => console.log(err ||"csv criado"))
    });
}

module.exports = convertToCsv;