<?php
/**
 * Returns the list of itemcarrito.
 */
require 'connect.php';
    
$carrito = [];

$sql = "SELECT idElementoCarro, cantidad, idProducto FROM `elementocarro`";

$result = mysqli_query($connect,$sql);

if(mysqli_num_rows($result) > 0){  

  $cr = 0;
  while($row = mysqli_fetch_assoc($result)){
    $sqlp = "SELECT idProducto, titulo, precio, descuento, peso FROM `producto` WHERE idProducto = ".$row['idProducto']."";
    $resultp = mysqli_query($connect,$sqlp);
    $rowp = mysqli_fetch_assoc($resultp);
    $carrito[$cr]['idElementoCarro'] = $row['idElementoCarro'];
    $carrito[$cr]['cantidad']        = $row['cantidad'];
    $carrito[$cr]['precio']          = $rowp['precio'];
    $carrito[$cr]['titulo']          = $rowp['titulo'];
    $carrito[$cr]['peso']            = $rowp['peso'];
    $carrito[$cr]['descuento']       = $rowp['descuento'];
    $carrito[$cr]['idProducto']      = $rowp['idProducto'];
    $cr++;
  }
    
  echo json_encode(['data' => $carrito]);

} else {

  http_response_code(200);

}

