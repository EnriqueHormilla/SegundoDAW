<?php
/*
Diseñar un formulario html que solicite dos números enteros. Una vez introducidos los
números y enviado el formulario, el código php de la página que recibe los datos del mismo
mostrará la suma, resta, multiplicación, división (entera y real) y resto de los números.
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
      <?php   if( (isset($_POST['numero1'])) && (isset($_POST['numero2']))){
        $var1=$_POST['numero1'];
        $var2=$_POST['numero2'];

        $suma = $var1 + $var2;
        $multiplicacion = $var1 * $var2;
        $divEntero = (int) ($var1 / $var2);
        $divReal = $var1 / $var2;
        $modulo = $var1 % $var2;

        echo "Valor de \$var1: $var1</br>\n";
        echo 'Valor de $var2 ' . $var2 . "</br>\n";
        echo "$var1 + $var2 son " . ($var1 + $var2) . "</br>\n";
        echo "$var1 * $var2 son $multiplicacion</br>\n";
        echo "$var1 / $var2 (division entera) es $divEntero</br>\n";
        echo "$var1 / $var2 (division real) es $divReal</br>\n";
        echo "$var1 modulo $var2  es $modulo</br>\n";

      ?>

      <?php }else{ ?>
        <form action="Ejercicio1.php" method="post">
        <fieldset>
          <legend>Ejemplo 1</legend>

          <label for="nombre">Numero 1</label>
          <input type="number" name="numero1" id="numero2" >

          <label for="apellidos">Numero 2</label>
          <input type="number"  name="numero2" id="numero2" />

          <input class="btn"  type="submit" id="btnEnviar" value="Enviar" />
        </form>
      <?php } ?>

    </body>
</html>
