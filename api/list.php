<?php
/**
 * Returns the list of productos.
 */
require 'connect.php';
    
$productos = [];
$sql = "SELECT idProducto, titulo, precio FROM `producto`";

$result = mysqli_query($connect,$sql);

if(mysqli_num_rows($result) > 0)
{
  $pr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $productos[$pr]['idProducto']    = $row['idProducto'];
    $productos[$pr]['titulo'] = $row['titulo'];
    $productos[$pr]['precio'] = $row['precio'];
    $pr++;
  }
    
  echo json_encode(['data'=>$productos]);
}
else
{
  http_response_code(404);
}

