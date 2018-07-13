<?php 
    // $id=$_POST["id"];
    $json = file_get_contents('1.json');
    $json = json_decode($json);
    // var_dump($json);
    unset($json[0]);
    // var_dump($json);
    echo json_encode($json);
?>