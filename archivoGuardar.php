<?php
  $archivo = fopen("grafo.txt", 'w');
  fwrite($archivo, $_GET["datos"]);
  fclose($archivo);
  echo "1";
?>
