function calculaPrecoTotal(quantidade) {
  let valorMaca
  if (quantidade < 12) {
    valorMaca = quantidade * 1.30 
  }else if(quantidade >= 12) { 
    valorMaca = quantidade * 1.00
  }
    return valorMaca
}