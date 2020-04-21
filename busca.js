var valores = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,
44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64];
//busca sequencial
let passos = 0;
function busca(num){
  for(i = 0;i <= 64; i++){
    passos = i;
    console.log("Achei em"+ passos + "passos")
    if(num == valores[i]){
    return i;
    }
  }
  return -1
}
//-----usando ferramenta de busca---//
//console.log(busca(1));
//console.log(busca(30));
//console.log(busca(50));
//caso nao ache o numero retorna -1
//console.log(busca(67))
//busca binaria onde se trabalha com log
//ex:64 elementos busca sequencial ira buscar elemento em 64 posicoes
//busca binaria em 8 posicoes este elemento sera encontrada ja que log de 64 e 8
function buscaBinaria(num){
  let inicio, fim;
  let meio;
  let passos = 0;
  inicio =0;
  fim = 64;
  while(inicio<=fim){
    meio = parseInt((inicio+fim)/2);
    //definindo em quantos passos sistema achou numero buscado
    passos = passos + 1;
    if(num === valores[meio]){
      console.log("Achei em"+ passos + "passos");
      return meio;
    }else{
      if(num>valores[meio]){
        inicio = meio + 1
      }else{
        fim = meio -1
      }
    }
  }
  console.log("Nao achei em"+ passos + "passos")
  return -1;
}
//----usando buscabinaria---//
//console.log(buscaBinaria(1));
//console.log(buscaBinaria(64));
//console.log(buscaBinaria(65))
//comparando passos busca sequencial/busca binaria
console.log("Busca sequencial numero 64")
console.log(busca(64));
console.log("Busca Binaria numero 64")
console.log(buscaBinaria(64));