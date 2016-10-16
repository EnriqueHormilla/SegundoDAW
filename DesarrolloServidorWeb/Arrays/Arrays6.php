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
        $ciudades = array("MD" => "Madrid",
            "BCN" => "Barcelona",
            "LND" => "Londres",
            "NY" => "New York",
            "LA" => "Los Angeles",
            "CH" => "Chicago"
        );

        foreach ($ciudades as $key => $value) {
            echo "La clave del array asociativo que tiene como "
            . " $value es $key<br/>\n";
        }
        ?>
    </body>
</html>
