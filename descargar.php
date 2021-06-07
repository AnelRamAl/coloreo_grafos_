<?php
  header('Content-Disposition: attachment; filename=grafo.txt');
  header ('Content-Type: application/octet-stream');
  echo file_get_contents ("grafo.txt");
?>
