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

        function esPar($numero) {
            if ($numero % 2 == 0) {
                $a = true;
            } else {
                $a = false;
            }
            return $a;
        }

        for ($i = 0; $i < 100; $i++) {
            echo "$i". (esPar($i)?"Es par": "Es impar") . "</br>";
        }
        ?>
    </body>
</html>
