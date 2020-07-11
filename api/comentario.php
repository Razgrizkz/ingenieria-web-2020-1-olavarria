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
  $id = mysqli_real_escape_string($connect, (int)($request->id));
  $qty = mysqli_real_escape_string($connect, (int)$request->qty);
    
  // Store.
  $sql = "INSERT INTO `elementocarro`(cantidad,idProducto) VALUES (".$qty.",".$id.")";
  $result = mysqli_query($connect,$sql);

  echo json_encode([$result]);
} else {
	echo json_encode([$postdata]);
}
