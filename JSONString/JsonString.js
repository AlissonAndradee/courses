
// JSON PARA STRING
// - Podemos converter o Json para uma string de forma fácil;
// - Ou também uma string para JSON;

// definindo constante carro e atribuindo um json..
const carro = {
    "marca": "Fiat",
    "ano": 2013,
    "portas": 4,
    "tipo": "Sedan"
}
//---------------------------------------

// - exemplo: imprimindo JSON [sem converter]
console.log(carro);
//---------------------------------------


// - exemplo: json para string use isso --
// - JSON.stringify
let jsonToString = JSON.stringify(carro);
console.log(jsonToString);
//---------------------------------------

// - exemplo: string para json
// - JSON.parse
let stringToJson = JSON.parse(jsonToString);
console.log(stringToJson);
//---------------------------------------
