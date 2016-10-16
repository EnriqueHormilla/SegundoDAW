<html>
    <head>
        <?php

        ?>
    </head>
    <body>
        <?php   
            $divisores=[];
            $perfectos=[];
            $suma=0;
            for($i=1;$i<10001;$i++){
                for($j=1;$j<$i;$j++){
                    if($i%$j==0){
                        $divisores[]=$j;
                    }
                }
                $suma=array_sum($divisores);
                unset($divisores);
                if($i==$suma){
                    $perfectos[]=$i;
                }
            }
        
            echo '<pre>'; print_r($perfectos); echo '</pre>';
        ?>
    </body>
    
    
