<?php
/*
Diseñar un formulario web que pida la altura y el diámetro de un cilindro en metros. Una
vez el usuario introduzca los datos y pulse el botón calcular, deberá calcularse el volumen
del cilindro y mostrarse el resultado en el navegador.
*/

 ?>
 <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
        <title>Ejemplo formulario</title>
        <style>
        </style>
    </head>
    <body>
      <?php   if( (isset($_POST['diametro'])) && (isset($_POST['cilindro']))){
        $var1=$_POST['diametro'];
        $var2=$_POST['cilindro'];

        $volumen = $var1 * $var1 * $var2;

        echo "Valor de \$var1: $var1</br>\n";
        echo 'Valor de $var2 ' . $var2 . "</br>\n";
        echo "El volumen es".$volumen."</br>\n";
      ?>

      <?php }else{ ?>
        <form action="Ejercicio2.php" method="post">
        <fieldset>
          <legend>Ejemplo 2</legend>

          <label for="nombre">diametro</label>
          <input type="number" name="diametro" id="diametro" >

          <label for="apellidos">cilindro</label>
          <input type="number"  name="cilindro" id="cilindro" />

          <input class="btn"  type="submit" id="btnEnviar" value="Enviar" />
        </form>
      <?php } ?>

    </body>
</html>
