const numeros = [10,20,5,18,20,30];

var soma = 0;

for (let i = 0; i < numeros.length; i++) {
   soma += numeros[i];
}

console.log(`Resultado: ${soma}`);

//recebe o acumulador e o percorredor da lista (pode receber o valor inicial ali0)
//forma mais simplificada de fazer o for para listas
const resultado = numeros.reduce((soma, num) => soma+num,0);

console.log(resultado);
