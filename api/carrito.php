<?php
/**
 * Returns the list of itemcarrito.
 */
require 'connect.php';
    
$carrito = [];

$sql = "SELECT idElementoCarro, cantidad, idProducto FROM `elementocarro`";

$result = mysqli_fetch_assoc(mysqli_query($connect,$sql));

$sqlp = "SELECT idProducto, titulo, precio, descuento, peso FROM `producto` WHERE idProducto = `{$result['idProducto']}";

$resultp = mysqli_fetch_assoc(mysqli_query($connect,$sqlp));

echo json_encode()

