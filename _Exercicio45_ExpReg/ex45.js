/* Caracteres Especiais
         
        \d - Qualquer dígito de caractere
        \w - Um caractere alfanumérico("teste")
        \s - Qualquer Caractere de espaço em branco
        \D - Caracteres que não são digitos
        \W - Caractere não-alfanumérico
        \S - Caractere que não seja espaço em branco
        . -  Qualquer caractere, menos nova linha 
*/
// crie uma regex que valide o nome do usuário no sistema;
// Aceita letras de a-z, _e -, números de 0-9, mínimo de 3 caracteres
// e máximo de 16;
// Depois teste
// AULA 249

let validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeUsuario.test("matheus_123"));
console.log(validarNomeUsuario.test("Alisson-456"));

