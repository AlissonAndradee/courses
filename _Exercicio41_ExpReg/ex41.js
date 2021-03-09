/* Caracteres Especiais
         
        \d - Qualquer dígito de caractere
        \w - Um caractere alfanumérico("teste")
        \s - Qualquer Caractere de espaço em branco
        \D - Caracteres que não são digitos
        \W - Caractere não-alfanumérico
        \S - Caractere que não seja espaço em branco
        . -  Qualquer caractere, menos nova linha 
*/
// crie uma regex que aceite só letras maiúsculas;
// Depois teste

const reg1 = /[A-Z]/

console.log(reg1.test("ABAHAHJDPAZIRPQP"));
console.log(reg1.test("ahhsusnjzlp")); 
console.log(reg1.test("123456"));  
console.log(reg1.test("ahhsu12356789"));
console.log(reg1.test("ahhsuAFBZP")); 