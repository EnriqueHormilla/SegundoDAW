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
        <?php
        $var1 = 5;
        $var2 = 5.0;
        $var3 = "5";
        $var4 = "5.0";
        ?>
    </head>
    <body>
        <?php
        echo "\$var1 + \$var1 " . ($var1 + $var1) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var1 + \$var2 " . ($var1 + $var2) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var1 + \$var3 " . ($var1 + $var3) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var1 + \$var4 " . ($var1 + $var4) . gettype($var1 + $var1) . "</br>\n";
        echo "</br>\n";

        echo "\$var2 + \$var2 " . ($var2 + $var2) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var2 + \$var3 " . ($var2 + $var3) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var2 + \$var4 " . ($var2 + $var4) . gettype($var1 + $var1) . "</br>\n";
        echo "</br>\n";

        echo "\$var3 + \$var3 " . ($var3 + $var3) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var3 + \$var4 " . ($var3 + $var4) . gettype($var1 + $var1) . "</br>\n";
        echo "</br>\n";

        echo "\$var4 + \$var4 " . ($var4 + $var4) . gettype($var1 + $var1) . "</br>\n";
        echo "</br>\n";

        echo "\$var1 - \$var1 " . ($var1 - $var1) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var1 - \$var2 " . ($var1 - $var2) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var1 - \$var3 " . ($var1 - $var3) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var1 - \$var4 " . ($var1 - $var4) . gettype($var1 + $var1) . "</br>\n";
        echo "</br>\n";

        echo "\$var2 - \$var2 " . ($var2 - $var2) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var2 - \$var3 " . ($var2 - $var3) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var2 - \$var4 " . ($var2 - $var4) . gettype($var1 + $var1) . "</br>\n";
        echo "</br>\n";

        echo "\$var3 - \$var3 " . ($var3 - $var3) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var3 - \$var4 " . ($var3 - $var4) . gettype($var1 + $var1) . "</br>\n";
        echo "</br>\n";

        echo "\$var4 - \$var4 " . ($var4 - $var4) . gettype($var1 + $var1) . "</br>\n";
        echo "</br>\n";

        echo "\$var1 * \$var1 " . ($var1 * $var1) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var1 * \$var2 " . ($var1 * $var2) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var1 * \$var3 " . ($var1 * $var3) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var1 * \$var4 " . ($var1 * $var4) . gettype($var1 + $var1) . "</br>\n";
        echo "</br>\n";

        echo "\$var2 * \$var2 " . ($var2 * $var2) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var2 * \$var3 " . ($var2 * $var3) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var2 * \$var4 " . ($var2 * $var4) . gettype($var1 + $var1) . "</br>\n";
        echo "</br>\n";

        echo "\$var3 * \$var3 " . ($var3 * $var3) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var3 * \$var4 " . ($var3 * $var4) . gettype($var1 + $var1) . "</br>\n";
        echo "</br>\n";

        echo "\$var4 * \$var4 " . ($var4 * $var4) . gettype($var1 + $var1) . "</br>\n";
        echo "</br>\n";

        echo "\$var1 / \$var1 " . ($var1 / $var1) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var1 / \$var2 " . ($var1 / $var2) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var1 / \$var3 " . ($var1 / $var3) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var1 / \$var4 " . ($var1 / $var4) . gettype($var1 + $var1) . "</br>\n";
        echo "</br>\n";

        echo "\$var2 / \$var1 " . ($var2 / $var1) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var2 / \$var2 " . ($var2 / $var2) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var2 / \$var3 " . ($var2 / $var3) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var2 / \$var4 " . ($var2 / $var4) . gettype($var1 + $var1) . "</br>\n";
        echo "</br>\n";

        echo "\$var3 / \$var1 " . ($var3 / $var1) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var3 / \$var2 " . ($var3 / $var2) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var3 / \$var3 " . ($var3 / $var3) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var3 / \$var4 " . ($var3 / $var4) . gettype($var1 + $var1) . "</br>\n";
        echo "</br>\n";

        echo "\$var4 / \$var1 " . ($var4 / $var1) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var4 / \$var2 " . ($var4 / $var2) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var4 / \$var3 " . ($var4 / $var3) . gettype($var1 + $var1) . "</br>\n";
        echo "\$var4 / \$var4 " . ($var4 / $var4) . gettype($var1 + $var1) . "</br>\n";
        echo "</br>\n";
        ?>
    </body>
</html>
