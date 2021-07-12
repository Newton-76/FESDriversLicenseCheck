<?php
  $fahrzeugart = json_decode($_COOKIE["fahrzeugart"]);
  $querystart = "INSERT INTO Fahrzeugklassen (Bezeichnung, Fuehrerschein_ID";
  $queryende = "VALUES('";
    $queryende .= $fahrzeugart->bezeichnung . "', ";
    if($fahrzeugart->fuehrerscheinID != NULL){
      $queryende .= $fahrzeugart->fuehrerscheinID;
    } else{
      $queryende .= "NULL";
    }
  $i = 0;
  while($i < $fahrzeugart->anzahlQualifikationsArten){
    while($i < $fahrzeugart->anzahlQualifikationen){
      $querystart .= ", Qualifikation" . $i+1 . "_ID";
      $queryende .= ", " . $fahrzeugart->qualifikationIDs[$i];
      $i++;
    }
    $querystart .= ", Qualifikation" . $i+1 . "_ID";
    $queryende .= ", NULL";
    $i++;
  }
  $querystart .= ") ";
  $queryende .= ");";
  $query = $querystart . $queryende;
  mysqli_query($link, $query) or die(mysqli_error($link));
 ?>
