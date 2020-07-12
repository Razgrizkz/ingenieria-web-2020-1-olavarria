<?php
/**
 * Inserts into Comentario.
 */
require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	
  // Sanitize.
  $id = mysqli_real_escape_string($connect, ($request->id));
  $calif = mysqli_real_escape_string($connect, $request->calif);
  $com = mysqli_real_escape_string($connect, $request->com);
  $name = mysqli_real_escape_string($connect, $request->name);

  // Store.
  $sql = "INSERT INTO `comentario`(calificacion,comentario,idProducto,nombre) VALUES ({$calif},{$com},{$id},{$name})";

  $calificacion = mysqli_query($connect,'SELECT calificacion FROM producto WHERE idProducto = {$id}')

  $newCali = $calificacion + $cali / 2;

  mysqli_query($connect,'UPDATE producto SET calificacion = {$newCali} WHERE idProducto = {$id}');

  $result = mysqli_query($connect,$sql);

  echo json_encode([$result]);
} else {
	echo json_encode([$postdata]);
}
