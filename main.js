function validarFormulario (){
  var pedido = [
    {id:2, cod:"Prod-b",name:'Auriculares',cantidad:5},
    {id:2, cod:"Prod-c",name:'CargadorInalambrico',cantidad:2}
  ]
  var productos_habilitados = [
    {id:1, cod:"Prod-a", name:'Celulares', stock:5},
    {id:2, cod:"Prod-b", name:'Auriculares', stock:6},
    {id:3, cod:"Prod-c", name:'CargadorInalambrico', stock:3},
    {id:4, cod:"Prod-d", name:'Cargador', stock:2}
  ]

  var selectedProduct = productos_habilitados.filter(producto=>producto[cod]=== pedido[cod])
  for(producto of pedido){
    if (pedido [cantidad]> selectedProduct[stock]){
      return false;
    }
  }
  return true;

}

