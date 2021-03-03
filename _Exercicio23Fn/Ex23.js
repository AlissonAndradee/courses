function checarTamanho (texto) {
    if(texto.length >10){
        console.log("Texto muito longo");
    } else {
        console.log("Texto dentro do limite");
    }
}

checarTamanho("Teste");
checarTamanho("Vamos testar o tamanho");
checarTamanho("Olá");
