<?php
/**
 * Returns the list of categories.
 */
require 'connect.php';
    
$categorias = [];
$sql = "SELECT idCategoria, titulo, descripcion, imagen FROM `categoria`";

$result = mysqli_query($connect,$sql);

if(mysqli_num_rows($result) > 0)
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $categorias[$cr]['idCategoria'] = $row['idCategoria'];
    $categorias[$cr]['titulo'] = $row['titulo'];
    $categorias[$cr]['descripcion'] = $row['descripcion'];
    $categorias[$cr]['imagen'] = $row['imagen'];
    $cr++;
  }
    
  echo json_encode(['data'=>$categorias]);
}
else
{
  http_response_code(404);
}

