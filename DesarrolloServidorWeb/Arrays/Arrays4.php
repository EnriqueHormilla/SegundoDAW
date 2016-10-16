<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        $persona = array(
            "Nombre" => "Pedro Torres",
            "Direccion" => "C/Mayor, 37",
            "Telefono" => "123456789"
        );
        
        foreach ($persona as $key => $value) {
            echo "$key : $value </br>";
        }
        ?>
    </body>
</html>
