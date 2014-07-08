<?php

echo "<h1>Uploaded Files : </h1>";
   for($i=0;$i<count($_FILES["pic"]);$i++)
            {
             if(($_FILES["pic"]["name"][$i])!=="")
                {
        echo "<li> ".($_FILES['pic']['name'][$i]);   
        echo "<br/>";
                 
             }
             }

