function soma(x,y){
  return x+y;
}

function divisao(x,y){
  if(y==0){
    return 'invalido';
  }else{
    return x/y;
  }  
}

module.exports = {soma,divisao};