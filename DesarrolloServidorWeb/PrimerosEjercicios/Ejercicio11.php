<html>
    <head>
        <?php

        ?>
    </head>
    <body>
        <?php   
            $divisores=[];
         
            $suma=5000;
            for($i=1;$i<=$suma;$i++){
             
                    if($suma%$i==0){
                        $divisores[]=$i;
                    }
                
             
            }
        
            echo '<pre>'; print_r($divisores); echo '</pre>';
        ?>
    </body>