/* Caracteres Especiais
         
        \d - Qualquer dígito de caractere
        \w - Um caractere alfanumérico("teste")
        \s - Qualquer Caractere de espaço em branco
        \D - Caracteres que não são digitos
        \W - Caractere não-alfanumérico
        \S - Caractere que não seja espaço em branco
        . -  Qualquer caractere, menos nova linha 
*/
// crie uma regex que aceite strings terminadas com ID;
// Depois teste

// AULA 244
let frutas = /\d+(ID)/;

console.log(frutas.test("35689ID"));
console.log(frutas.test("25"));
console.log(frutas.test("alteraID"));
console.log(frutas.test("ID"));