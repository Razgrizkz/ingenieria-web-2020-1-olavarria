<?php
/**
 * Returns the list of categories.
 */
require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	
  // Sanitize.
  $id = mysqli_real_escape_string($con, (int)($request->data->idProducto));
  $cantidad = mysqli_real_escape_string($con, (int)$request->data->cantidad);
    
  // Store.
  $sql = "INSERT INTO `producto`(`idElementoCarro`,`cantidad`,`idProducto`) VALUES (null,'{$cantidad}','{$id}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(200);
  }
  else
  {
    http_response_code(422);
  }
}