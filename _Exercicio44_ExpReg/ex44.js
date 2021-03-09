/* Caracteres Especiais
         
        \d - Qualquer dígito de caractere
        \w - Um caractere alfanumérico("teste")
        \s - Qualquer Caractere de espaço em branco
        \D - Caracteres que não são digitos
        \W - Caractere não-alfanumérico
        \S - Caractere que não seja espaço em branco
        . -  Qualquer caractere, menos nova linha 
*/
// crie uma regex que valide endereços de IP;
// Ex: 127.0.0.1
// Depois teste
// AULA 247

// exemplo: /\d{1,3}\.
let validarIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarIP.test("127.120.5.7"));
console.log(validarIP.test("127.5.7"));
console.log(validarIP.test("127.120.5"));
console.log(validarIP.test("127.120.5.7"));

// exemplo; /^[0-9]{1,3}[.]
let validarEndIP = /^[0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}/;

console.log(validarEndIP.test('25/12/2015'));
console.log(validarEndIP.test('127.0.2.8'));
