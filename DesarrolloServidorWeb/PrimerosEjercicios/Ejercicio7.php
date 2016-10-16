<html> 
    <head>
        <title> Ejercicio 7</title>
        <?php
        $primos = [1, 2];
        for ($i = 3; $i < 101; $i+=2) {
            $esPrimo = true;
            for ($j = 2; $j < (int) ($i / 2); $j++) {
                if (($i % $j) == 0) {
                    $esPrimo = false;
                    break;
                }
            }if ($esPrimo) {
                $primos[] = $i;
                
            }
        }
        sort

     /*   $fibonacci = [0, 1];
        $i = 1;
        do {
            $fibonacci[++$i] = $fibonacci[$i - 2] + $fibonacci[$i - 1];
        } while ($fibonacci[$i] < 100);
        
      */ ?>
      

    </head>

    <body>
       
<?php
//  for ($i, $j = count($primos); $i < $j; $i++) {
for ($i = 1; $i < 101; $i++) {
    echo $i;
    echo (($i % 2 == 0) ? "es par / " : "es impar / ");
    echo ((in_array($i, $primos)) ? "es primo/" : " ");
    echo ((in_array($i, $fibonacci)) ? "está en fibonacci" : "") . "</br>\n";
}
// }
?>
    </body>
</html>