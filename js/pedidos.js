const pedidos = [
    {numero: 123, status: "enviado", total: 1500},
    {numero: 124, status: "enviado", total: 1200},
    {numero: 125, status: "enviado", total: 1800}
];

//percorre a lista e soma os totais de cada objeto
const resultado = pedidos.reduce((soma,pedido) => soma + pedido.total, 0);
console.log(`Resultado: ${resultado}`);
