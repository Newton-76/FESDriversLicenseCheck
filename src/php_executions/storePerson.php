<?php
  $person = json_decode($_COOKIE["person"]);
  $query = "INSERT INTO Fahrer VALUES('";
    $query .= $person->rfid;
    $query .=  "', '" . $person->vorname;
    $query .= "', '" . $person->nachname . "'";
    $i = 0;
    while($i < $person->anzahlFuehrerschienKlassen){
      while($i < $person->anzahlFuehrerscheine){
        $query .= ", " . $person->fuehrerscheinIDs[$i] . ", '" . $person->fGueltigkeiten[$i] . "'";
        $i++;
      }
      $query .= ", NULL, NULL";
      $i++;
    }
    $i = 0;
    while($i < $person->anzahlQualifikationsArten){
      while($i < $person->anzahlQualifikationen){
        $query .= ", " . $person->qualifikationIDs[$i] . ", '" . $person->qGueltigkeiten[$i] . "'";
        $i++;
      }
      $query .= ", NULL, NULL";
      $i++;
    }
    $query .= ");";
    mysqli_query($link, $query) or die(mysqli_error($link));
 ?>
