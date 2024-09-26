function assyncFunction() {
    //chamar uma função dentro de outra como parâmetro - callback
    setTimeout(() => {
        console.log("Async Function");   
    }, 3000) //imprime a mensagem depois do tempo informado
}

console.log("Início do programa");
assyncFunction();
console.log("Fim do Programa");

