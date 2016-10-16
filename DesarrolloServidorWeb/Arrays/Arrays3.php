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
        $meses = array(
            "enero" => 9,
            "febrero" => 20,
            "marzo" => 0,
            "abril" => 17
        );

        foreach ($meses as $key => $value) {
            if ($value != 0) {
                echo "$key </br>";
            }
        }
        ?>
    </body>
</html>
