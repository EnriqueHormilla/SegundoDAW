<html> 
    <head>
        <title> Ejercicio 4 </title>	
    </head>
    <?php
    $var1 = 5;
    $var2 = 10;
    $var3 = 2;
    $valorMayor;
    $valorMenor;

    if ($var1 > $var2 && $var1 > $var3) {
        $valorMayor = $var1;
    } else if ($var2 > $var1 && $var2 > $var3) {
        $valorMayor = $var2;
    } else if ($var3 > $var1 && $var3 > $var2) {
        $valorMayor = $var3;
    }

    if ($var1 < $var2 && $var1 < $var3) {
        $valorMenor = $var1;
    } else if ($var2 < $var1 && $var2 < $var3) {
        $valorMenor = $var2;
    } else if ($var3 < $var1 && $var3 < $var2) {
        $valorMenor = $var3;
    }

    /*
     * if($var1 < $var2){
     * $mayor = $var2;
     * $mayorCad = '$var2';
     * $menor = $var1;
     * $menorCad = '$var1';
     * }else{
     *  $mayor = $var1;
     * $mayorCad = '$var1';
     * $menor = $var2;
     * $menorCad = '$var2';
     * }
     * if($mayor <$var3){
     * $mayor = $var3;
     * mayorCad = '$var3';
     * }elseif($menor > $var3){
     * $menor = $var2;
     * $menorCad = '$var2';
     */
    ?>




    <body>
        <?php
        echo "Valor de \$var1 es $var1</br>\n";
        echo "Valor de \$var2 es $var2</br>\n";
        echo "Valor de \$var3 es $var3</br>\n";
        echo "El valor mayor es " . $valorMayor . "</br>\n";
        echo "El valor menor es " . $valorMenor . "</br>\n";
        ?>
    </body>
</html>