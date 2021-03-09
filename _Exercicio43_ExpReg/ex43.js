/* Caracteres Especiais
         
        \d - Qualquer dígito de caractere
        \w - Um caractere alfanumérico("teste")
        \s - Qualquer Caractere de espaço em branco
        \D - Caracteres que não são digitos
        \W - Caractere não-alfanumérico
        \S - Caractere que não seja espaço em branco
        . -  Qualquer caractere, menos nova linha 
*/
// crie uma regex que aceite a seguinte expressão "Marca:nomeDaMarca"
// Onde nomeDaMarca pode variar para Nike, Adidas, Puma, Asics;
// Depois teste
// AULA 245

let validarDominio = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validarDominio.test("Marca:"));
console.log(validarDominio.test("Marca: Adidas"));
console.log(validarDominio.test("Marca: Muffato"));
console.log(validarDominio.test("Marca: Asics"));