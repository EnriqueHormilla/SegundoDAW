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
        $ciudades = array("Madrid", "Barcelona", "Londres", "New York", 
            "Los Angeles", "Chicago");
        
        for ($i = 0; $i < count($ciudades); $i++) {
            echo "La ciudad con indice $i tiene el nombre $ciudades[$i]<br/>\n";
        }
        ?>
    </body>
</html>
