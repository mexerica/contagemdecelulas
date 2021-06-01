let valor = parseInt(gets());
let valor2 = valor;
let notas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);

for (var i = 0; i < notas.length; i++){
  if (valor => notas[i]){
    valor2 = valor / notas[i];
    valor2 = Math.trunc(valor2);
    valor -= valor2 * notas[i];;
    console.log(valor2 + " nota(s) de R$ " + notas[i] +",00");
  } else{
    console.log(0 + " nota(s) de R$ " + notas[i] +",00");
  }
}
