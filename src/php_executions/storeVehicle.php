<?php
  $fahrzeug = json_decode($_COOKIE["fahrzeug"]);
  $query = "INSERT INTO Fahrzeuge VALUES('";
    $query .= $fahrzeug->rfid;
    $query .=  "', '" . $fahrzeug->kennzeichen;
    $query .= "', " . $fahrzeug->fahrzeugart . ");";
    mysqli_query($link, $query) or die(mysqli_error($link));
 ?>

<!--
if($fahrzeug->fuehrerscheinID != NULL){
  $query .= ", " . $fahrzeug->fuehrerscheinID;
} else{
  $query .= ", NULL";
}
$i = 0;
while($i < $fahrzeug->anzahlQualifikationsArten){
  while($i < $fahrzeug->anzahlQualifikationen){
    $query .= ", " . $fahrzeug->qualifikationIDs[$i];
    $i++;
  }
  $query .= ", NULL";
  $i++;
}
$query .= ");";
-->
