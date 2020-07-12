<?php
/**
 * Returns the list of comentarios.
 */
require 'connect.php';
    
$comentarios = [];
$sql = "SELECT idComentario, calificacion, comentario, publicadoen, nombre FROM `comentario` WHERE idProducto = ".$_GET["id"]."";

$result = mysqli_query($connect,$sql);

if(mysqli_num_rows($result) > 0)
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $comentarios[$cr]['idComentario'] = $row['idComentario'];
    $comentarios[$cr]['calificacion'] = $row['calificacion'];
    $comentarios[$cr]['comentario'] = $row['comentario'];
    $comentarios[$cr]['publicadoen'] = $row['publicadoen'];
    $comentarios[$cr]['nombre'] = $row['nombre'];
    $cr++;
  }
    
  echo json_encode(['data'=>$comentarios]);
}
else
{
  http_response_code(200);
}

