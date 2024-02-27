<?php 
$files = scandir('./images');
$random = rand(2, sizeof($files));

$file = $files[$random];
?>
{
  "nome": "Nicolas",
  "url": "http://localhost:80/images/<?=$file?>"
}