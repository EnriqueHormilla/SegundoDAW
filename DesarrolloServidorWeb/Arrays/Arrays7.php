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
        $array1 = array("Lagartija", "Araña", "Perra", "Gata", "Raton");
        $array2 = array("12","34","49","53","12");
        $array3 = array("Sauce", "Pino", "Naranjo", "Chopa", "Perro", "34");
        
        $arrayNuevo =  array_merge($array1, $array2, $array3);
        
        foreach ($arrayNuevo as $value) {
            echo "$value <br/>";            
        }
        
        ?>
    </body>
</html>
