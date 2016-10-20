<?php
/*
Diseñar un formulario web simple que solicite al usuario el precio de tres productos en tres
establecimientos distintos denominados Tienda 1, Tienda 2 y Tienda 3. Una vez
enviada esta información se debe calcular y mostrar el precio medio del producto.
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
      <?php   if(isset($_POST['t1p1'])){
        $t1p1=$_POST['t1p1'];
        $t1p2=$_POST['t1p2'];
        $t1p3=$_POST['t1p3'];

        $t2p1=$_POST['t2p1'];
        $t2p2=$_POST['t2p2'];
        $t2p3=$_POST['t2p3'];

        $t3p1=$_POST['t3p1'];
        $t3p2=$_POST['t3p2'];
        $t3p3=$_POST['t3p3'];

        $precioMediop1 = ($t1p1 + $t2p1 + $t3p1)/3;

        $precioMediop2 = ($t1p2 + $t2p2 + $t3p2)/3;

        $precioMediop3 = ($t1p3 + $t2p3 + $t3p3)/3;



        echo "El precio medio del producto uno es : ".$t1p1."-".$t2p1."-".$t3p1."=".$precioMediop1."</br>\n";
        echo "El precio medio del producto dos es : ".$t1p2."-".$t2p2."-".$t3p2."=".$precioMediop2."</br>\n";
        echo "El precio medio del producto tres es : ".$t1p3."-".$t2p3."-".$t3p3."=".$precioMediop3."</br>\n";
      ?>

      <?php }else{ ?>
        <form action="Ejercicio3.php" method="post">
        <fieldset>
          <h1>Tienda 1</h1>
          <label for="nombre">Producto 1</label>
          <input type="number" name="t1p1" id="t1p1" >

          <label for="apellidos">Producto 2</label>
          <input type="number"  name="t1p2" id="t1p2" />

          <label for="apellidos">Producto 3</label>
          <input type="number"  name="t1p3" id="t1p3" />

          <h1>Tienda 2</h1>
          <label for="nombre">Producto 1</label>
          <input type="number" name="t2p1" id="t2p1" >

          <label for="apellidos">Producto 2</label>
          <input type="number"  name="t2p2" id="t2p2" />

          <label for="apellidos">Producto 3</label>
          <input type="number"  name="t2p3" id="t2p3" />

          <h1>Tienda 3</h1>
          <label for="nombre">Producto 1</label>
          <input type="number" name="t3p1" id="t3p1" >

          <label for="apellidos">Producto 2</label>
          <input type="number"  name="t3p2" id="t3p2" />

          <label for="apellidos">Producto 3</label>
          <input type="number"  name="t3p3" id="t3p3" />

          <input class="btn"  type="submit" id="btnEnviar" value="Enviar" />
        </form>
      <?php } ?>

    </body>
</html>
