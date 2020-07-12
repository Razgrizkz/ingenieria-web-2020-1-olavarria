<?php
/**
 * Inserts into carrito.
 */
require 'connect.php';

// Store.
$sql = "DELETE FROM elementocarro WHERE idProducto = ".$_GET["id"]."";
$result = mysqli_query($connect,$sql);

echo json_encode([$result]);
