function formataValor(valor){
  var tam = valor.length;
  if (tam <= 2) {
    return valor;
  }
  if ((tam == 3)) {
      return valor.substring(0,1)+","+valor.substring(1,3);
  }
  if ((tam == 4)) {
      return valor.substring(0,2)+","+valor.substring(2,4);
  }
  if ((tam == 5)) {
      return valor.substring(0,3)+","+valor.substring(3,5);
  }
  if ((tam == 6)) {
      return valor.substring(0,1)+"."+valor.substring(1,4)+","+valor.substring(4,6);
  }
}
