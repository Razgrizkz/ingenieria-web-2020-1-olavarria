<?php
/**
 * Returns the detail of a producto.
 */
require 'connect.php';

$sql = "SELECT idProducto, titulo, stock, autor, imagen, precio, descuento, peso FROM `producto` WHERE idProducto = '".$_GET["id"]."'";

$result = mysqli_query($connect,$sql);

$productos = [];

if(mysqli_num_rows($result) > 0){  

  $pr = 0;
  while($row = mysqli_fetch_assoc($result)){
    $productos[$pr]['idProducto'] = $row['idProducto'];
    $productos[$pr]['titulo'] = $row['titulo'];
    $productos[$pr]['stock'] = $row['stock'];
    $productos[$pr]['autor'] = $row['autor'];
    $productos[$pr]['imagen'] = $row['imagen'];
    $productos[$pr]['precio'] = $row['precio'];
    $productos[$pr]['descuento'] = $row['descuento'];
    $productos[$pr]['peso'] = $row['peso'];
    $pr++;
  }
    
  echo json_encode(['data'=>$productos]);

} else {

  http_response_code(200);

}



