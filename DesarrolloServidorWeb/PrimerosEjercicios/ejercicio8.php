<html> 

    <head>
        <title> Ejercicio 8 </title>	
        <?php
        $var1 = 10;
        $var2 = "5";
        $var3 = 6.2;
//        $mayor;
//        $menor;
//        $mitad;
        ?>
    </head>

    <body>
        <?php
//        if ($var1 > $var2 && $var1 > $var3) {
//            $mayor = $var1;
//            if ($var2 > $var3) {
//                $mitad = $var2;
//                $menor = $var3;
//            } else {
//                $mitad = $var3;
//                $menor = $var2;
//            }
//        } else if ($var2 > $var1 && $var2 > $var3) {
//            $mayor = $var2;
//            if ($var1 > $var3) {
//                $mitad = $var1;
//                $menor = $var3;
//            } else {
//                $mitad = $var3;
//                $menor = $var1;
//            }
//        } else if ($var3 > $var2 && $var3 > $var1) {
//            $mayor = $var3;
//            if ($var1 > $var2) {
//                $mitad = $var1;
//                $menor = $var2;
//            } else {
//                $mitad = $var2;
//                $menor = $var1;
//            }
//        }


        if($var1>$var2) {
            $aux = $var1;
            $var1 = $var2;
            $var2 = $aux;
        }
        if($var2>$var3) {
            $aux = $var2;
            $var2 = $var3;
            $var3 = $aux;
        }
        if($var1>$var2) {
            $aux = $var1;
            $var1 = $var2;
            $var2 = $aux;
        }

        $var1 = $menor;
        $var2 = $mitad;
        $var3 = $mayor;

        echo "Valor de \$var1 es $var1</br>\n";
        echo "Valor de \$var2 es $var2</br>\n";
        echo "Valor de \$var3 es $var3</br>\n";
        ?>
    </body>
</html>