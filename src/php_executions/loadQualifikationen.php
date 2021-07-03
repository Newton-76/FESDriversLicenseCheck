<?php
  $query = "SELECT * FROM Qualifikationen";
  $result = mysqli_query($link, $query) or die(mysqli_error($link));
  // create data object
  $data = array();
  while(true){
    if(($data[] = mysqli_fetch_array($result)) === null) break;
  }
  echo json_encode($data, JSON_HEX_TAG);
?>
