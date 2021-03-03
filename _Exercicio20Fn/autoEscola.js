function podeEntrarNaAuto(idade, nome){
    if(nome && idade >= 18){
        console.log(`Pode entrar na auto escola ${nome}`);
    } else {
        console.log(`Voce não pode entrar ${nome}`);
    }
} 

podeEntrarNaAuto(30,"Adriana");
podeEntrarNaAuto(15,"Pedro");
