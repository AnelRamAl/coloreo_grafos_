<?php
    if ( move_uploaded_file($_FILES["archivoAbrir"]["tmp_name"], "archivoSubido.txt") ) {
        //
        $datos = file_get_contents("archivoSubido.txt");
        //
        echo "<script>
                    window.parent.archivoAbierto('".preg_replace("/[\n\r]/","",$datos)."');
              </script>";
        unlink("archivoSubido.md");
    } else {
        echo "<script>
                    window.parent.archivoAbierto('');
              </script>";
    }
?>
