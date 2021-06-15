<?php
/*
 * Following the instrucitions of
 * https://www.youtube.com/watch?v=yNolUEBE3Wc
 * Author: Denis Neumann, 1308358
 */

$user = "root";
$password = "DMEMDN";
$db = "fesdlc";
$host = "localhost";
$port = 3306;

$link = mysqli_init();
if($success = mysqli_real_connect(
  $link,
  $host,
  $user,
  $password,
  $db,
  $port
);){
  echo "Connection successful";
} else{
  echo "Connection failed";
}



 ?>
