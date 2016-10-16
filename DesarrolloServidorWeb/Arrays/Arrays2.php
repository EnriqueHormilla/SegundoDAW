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
        $v = array(
            1 => 90,
            30 => 7,
            'e' => 99,
            "hola" => 43,
        );
        foreach ($v as $v1) {
            echo "$v1 <br/>";
        }
        ?>
    </body>
</html>
