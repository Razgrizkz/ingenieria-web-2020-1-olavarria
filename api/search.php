<?php
/**
 * Returns the detail of a producto.
 */
require 'connect.php';

if($_GET == null) {
	$sql = "SELECT idProducto, titulo, stock, autor, precio, descuento, peso, codigo, idCategoria FROM `producto`";
} else {
	$sql = "SELECT idProducto, titulo, stock, autor, precio, descuento, peso, codigo, idCategoria FROM `producto` WHERE ".$_GET["field"]." LIKE '%".$_GET["row"]."%'";
}

$result = mysqli_query($connect,$sql);

$productos = [];

if(mysqli_num_rows($result) > 0){  

  $pr = 0;
  while($row = mysqli_fetch_assoc($result)){
    $productos[$pr]['idProducto'] = $row['idProducto'];
    $productos[$pr]['titulo'] = $row['titulo'];
    $productos[$pr]['stock'] = $row['stock'];
    $productos[$pr]['autor'] = $row['autor'];
    $productos[$pr]['precio'] = $row['precio'];
    $productos[$pr]['descuento'] = $row['descuento'];
    $productos[$pr]['peso'] = $row['peso'];
    $productos[$pr]['codigo'] = $row['codigo'];
    $productos[$pr]['idCategoria'] = $row['idCategoria'];
    $pr++;
  }
    
  echo json_encode(['data'=>$productos]);

} else {

  http_response_code(404);

}