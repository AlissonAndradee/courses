function armazenarSoma(x) {
    return y => x + y;
}

let soma1 = armazenarSoma(5);
console.log(soma1(20)); // 25

let soma2 = armazenarSoma(50);
console.log(soma2(20)); // 70

 // segundo exemplo - mesma funcção..

function lembrarSoma(x){
    return function(y){
        return x + y;
    }
}

let soma3 = lembrarSoma(2);
console.log(soma3(10));

let soma4 = lembrarSoma(5);
console.log(soma4(10));