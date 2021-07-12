<?php
  $neu = json_decode($_COOKIE["qualifikation"]);
  $query = "INSERT INTO Qualifikationen (Qualifikation) VALUES ('" . $neu->qualifikation . "');";
  $query .= "ALTER TABLE Fahrer ADD COLUMN Qualifikation" . $neu->anzahl . "_ID INT UNSIGNED, Q" . $neu->anzahl . "_Gueltigkeit DATE;";
  $query .= "ALTER TABLE Fahrzeugklassen ADD COLUMN Qualifikation" . $neu->anzahl . "_ID INT UNSIGNED;";
  mysqli_multi_query($link, $query) or die(mysqli_error($link));
?>
