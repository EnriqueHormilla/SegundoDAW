<html> 
    <head>
        <title>Pts a € con For</title>	
    </head>
    <?php
    //array $pts = array(1,2,3); o $pts = [1,2,3];
    $pts = [1, 5, 10, 25, 50, 100, 200, 500, 1000, 2000, 5000];
    ?>

    <body>
        <?php
        for ($i = 0, $j = count($pts); $i < $j; $i++) {
            $resultado = $pts[$i] / 166.386;
            echo "$pts[$i] pesetas son $resultado €</br>\n";
        }
        ?>
    </body>
</html>