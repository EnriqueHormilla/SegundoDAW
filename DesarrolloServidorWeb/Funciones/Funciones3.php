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
        //Tipificación estricta:
        declare(strict_types=1);
        
        function sum(int $a, int $b){
            return $a+$b;
        }
        
        var_dump(sum(1, 2));
        var_dump(sum(1.5, 2.5));

        ?>
    </body>
</html>
