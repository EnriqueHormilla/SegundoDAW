<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ejercicio 9 </title>
        <?php
        $var1 = 5;
        $var2 = 5.0;
        $var3 = "5";
        $var4 = "5.0";
        ?>
    </head>
    <body>
        <?php
        
//        echo var_dump($var1 == $var2);
        echo "\$var1 == \$var2 " . (($var1 == $var2) ? "true" : "false") . "</br>\n";
        echo "\$var1 == \$var3 " . (($var1 == $var3) ? "true" : "false") . "</br>\n";
        echo "\$var1 == \$var4 " . (($var1 == $var4) ? "true" : "false") . "</br>\n";
        echo "</br>\n";
        echo "\$var1 === \$var2 " . (($var1 === $var2) ? "true" : "false") . "</br>\n";
        echo "\$var1 === \$var3 " . (($var1 === $var3) ? "true" : "false") . "</br>\n";
        echo "\$var1 === \$var4 " . (($var1 === $var4) ? "true" : "false") . "</br>\n";
        echo "</br>\n";
        echo "\$var1 < \$var2 " . (($var1 < $var2) ? "true" : "false") . "</br>\n";
        echo "\$var1 < \$var3 " . (($var1 < $var3) ? "true" : "false") . "</br>\n";
        echo "\$var1 < \$var4 " . (($var1 < $var4) ? "true" : "false") . "</br>\n";
        echo "</br>\n";
        echo "\$var1 > \$var2 " . (($var1 > $var2) ? "true" : "false") . "</br>\n";
        echo "\$var1 > \$var3 " . (($var1 > $var3) ? "true" : "false") . "</br>\n";
        echo "\$var1 > \$var4 " . (($var1 > $var4) ? "true" : "false") . "</br>\n";
        echo "</br>\n";
        echo "\$var1 != \$var2 " . (($var1 != $var2) ? "true" : "false") . "</br>\n";
        echo "\$var1 != \$var3 " . (($var1 != $var3) ? "true" : "false") . "</br>\n";
        echo "\$var1 != \$var4 " . (($var1 != $var4) ? "true" : "false") . "</br>\n";
        echo "</br>\n";
        echo "\$var1 !== \$var2 " . (($var1 !== $var2) ? "true" : "false") . "</br>\n";
        echo "\$var1 !== \$var3 " . (($var1 !== $var3) ? "true" : "false") . "</br>\n";
        echo "\$var1 !== \$var4 " . (($var1 !== $var4) ? "true" : "false") . "</br>\n";
        ?>

    </body>
</html>
