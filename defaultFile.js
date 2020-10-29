// importações de modulos
const fs = require('fs');

const convertFileToDefault = (fileInput, fileOutput) => {

    const data = require(fileInput);

    // para cada elemento dentro de data traga o CPF
    const dataCPF = data.map(item => item.cpf);
    
    // para cada item do cpf, retorne uma lista contendo o objeto que tem o mesmo cpf
    const equalsCPF = dataCPF.map((item, index) => {
        return data.filter(valor => valor.cpf === item);
    });
    
    // juntando as diciplinas pelo CPF
    const result = equalsCPF.map(item => {
        function organize(names) {
            return item.map(valor => valor[names]).reduce(item => item);
        }
        function organizeDiscipline(names) { // organizndo as displinas
            return item.map(valor => valor[names]);
        }
    
        return {
            name: organize('name'),
            email: organize('email'),
            cpf: organize('cpf'),
            ra: organize('ra'),
            unidade: organize('unidade'),
            curso: organize('curso'),
            disciplina: organizeDiscipline('disciplina')
        }
    })
    
    // Retorna o array sem objetosduplicados
    const newResult = result.filter(function (a) {
        return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
    }, Object.create(null))
    
    // Criando um arquivo json, filtadro 
    fs.writeFile(fileOutput, JSON.stringify(newResult, null, 2), "utf8", err => console.error(err || "Concluido com sucesso, total: "+newResult.length));
}

module.exports = convertFileToDefault;