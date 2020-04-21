var elementos=[];
//variavel p saber se array esta vazio
var topo = -1;
const Max = 10;

function push(num){
  if (topo<Max){
    //indicar posicao array
    topo = topo + 1;
    //empilhar num na posicao do array indicada
    elementos[topo] = num;
  }else{
    console.log("Pilha esta vazia")
  }
} 
function PVazia(){
 return topo == -1;
}

function pop(){
  if(topo != -1){
    //buscar num na posicao do array
    let num = elementos[topo]
    //desempilhar uma posicao no array
    topo = topo -1;
    return num
  }else{
    console.log("Pilha esta vazia");
  }
}
//-----------parte do codigo que usa a pilha -----//
console.log("Colocando elementos na pilha")
push(10);
push(20);
push(30)
console.log(elementos);
console.log("Retirando elementos da pilha")
console.log(pop());
console.log(pop())
console.log(pop())
console.log(pop())
//-----usando pilha transforma numero decimal em binario---//
console.log("Convertendo numero 1000 para binario")
var numDecimal = 1000;
var resto;
while(numDecimal != 0){
  resto = parseInt(numDecimal%2)
  push(resto);
  numDecimal = parseInt(numDecimal/2)
}
while(!PVazia()){
  console.log(pop());
}