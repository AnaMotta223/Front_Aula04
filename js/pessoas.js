//lista com vários objetos
const pessoas = [
    {nome: "João",idade:10,cidade:"Petrópolis"},
    {nome: "Ana",idade:28,cidade:"Petrópolis"},
    {nome: "Carla",idade:44,cidade:"São Paulo"},
    {nome: "Carlos",idade:38,cidade:"Petrópolis"},
    {nome: "Igor",idade:16,cidade:"Juiz de Fora"},
];

//filtrando pessoas que moram em Petrópolis
const filtro = pessoas.filter((pessoa) => pessoa.cidade === "Petrópolis" && pessoa.idade < 18);
console.log(filtro.map((pessoa) => pessoa.nome + " " + pessoa.cidade));
//mapeia só os nomes e a cidade a partir do resultado do filtro 
//mapa não faz comparações

//find retorna apenas o primeiro elemento com a característica pedida (cidade)
const busca = pessoas.find((pessoa) => pessoa.cidade.toLowerCase === "petrópolis");

//pega todos os nomes da lista que contém a letra o 
const buscaLetra = pessoas.filter((pessoa) => pessoa.nome.toLowerCase().includes("o"));

console.log(buscaLetra);


const numeros = [1,2,3,4,5];

//procurar o primeiro numero multiplo de 2
const encontra = numeros.find((num) => num % 2 == 0);

console.log(encontra);


