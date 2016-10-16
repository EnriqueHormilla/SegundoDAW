<html> 
    <head>
        <title> Calculos</title>

        <?php
        $var1 = 15;
        $var2 = 30;
        ?>
    </head>

    <body>
        <?php
        $suma = $var1 + $var2;
        $multiplicacion = $var1 * $var2;
        $divEntero = (int) ($var1 / $var2);
        $divReal = $var1 / $var2;
        $modulo = $var1 % $var2;

        echo "Valor de \$var1: $var1</br>\n";
        echo 'Valor de $var2 ' . $var2 . "</br>\n";
        echo "$var1 + $var2 son " . ($var1 + $var2) . "</br>\n";
        echo "$var1 * $var2 son $multiplicacion</br>\n";
        echo "$var1 / $var2 (division entera) es $divEntero</br>\n";
        echo "$var1 / $var2 (division real) es $divReal</br>\n";
        echo "$var1 modulo $var2  es $modulo</br>\n";
        ?>
    </body>
</html>