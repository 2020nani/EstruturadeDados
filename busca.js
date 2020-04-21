var valores = [5,8,10,30,40,50];

function busca(num){
  for(i = 0;i < 6; i++){
    if(num == valores[i]){
    return i;
    }
  }
  return -1
}
//-----usando ferramenta de busca---//
console.log(busca(5));
console.log(busca(30));
console.log(busca(50));
//caso nao ache o numero retorna -1
console.log(busca(67))
