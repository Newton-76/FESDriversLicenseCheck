<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#040521">
  <title>Scanpage</title>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="manifest" href="/FESDriversLicenseCheck/manifest.json">
  <link rel="apple-touch-icon" href="/FESDriversLicenseCheck/img/apple-icon-180.png">
  <link rel="icon" href="/FESDriversLicenseCheck/img/favicon.ico">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<body>
  <?php
  require_once "/FESDriversLicenseCheck/src/database/connect.php";
   ?>

  <script>
  // Adapted the hints and instructions given by https://stackoverflow.com/questions/23740548/how-do-i-pass-variables-and-data-from-php-to-javascript
  // Author: Denis Neumann, 1308358
    var fahrzeuge = <?php
      $query = "SELECT * FROM Fahrzeug";
      $result = mysqli_query($link, $query) or die(mysqli_error($link));
      // create data object
      $data = array();
      while(true){
        if(($data[] = mysqli_fetch_array($result)) === null) break;
      }
      echo json_encode($data, JSON_HEX_TAG);
    ?>;

    var fahrer = <?php
      $query = "SELECT * FROM Fahrer";
      $result = mysqli_query($link, $query) or die(mysqli_error($link));
      // create data object
      $data = array();
      while(true){
        if(($data[] = mysqli_fetch_array($result)) === null) break;
      }
      echo json_encode($data, JSON_HEX_TAG);
    ?>;

    var fuehrerscheine = <?php
      $query = "SELECT * FROM Fuehrerscheine";
      $result = mysqli_query($link, $query) or die(mysqli_error($link));
      // create data object
      $data = array();
      while(true){
        if(($data[] = mysqli_fetch_array($result)) === null) break;
      }
      echo json_encode($data, JSON_HEX_TAG);
    ?>;

    var qualifikationen = <?php
      $query = "SELECT * FROM Qualifikationen";
      $result = mysqli_query($link, $query) or die(mysqli_error($link));
      // create data object
      $data = array();
      while(true){
        if(($data[] = mysqli_fetch_array($result)) === null) break;
      }
      echo json_encode($data, JSON_HEX_TAG);
    ?>;

  //debugging:
    var i = 1;
    var id = fahrer[0]['Fuehrerschein' + i + '_ID'];
    var fid = 0;

    for(var x = 0; x < (fuehrerscheine.length - 1); x++){
      if(fuehrerscheine[x]['id'] === id) fid = x;
    }

    console.log('Fahrer: ' + fahrer[0]['Nachname'] + '\nFuehrerscheinbeschreibung: ' + fuehrerscheine[fid]['Beschreibung']);
</script>

  <div class="w3-bar w3-border">
    <a href="/FESDriversLicenseCheck/scanpage.php" class="w3-bar-item w3-button w3-blue"><i class="fa fa-home"></i></a>
    <a href="#" class="w3-bar-item w3-button"><i class="fa fa-search"></i></a>
    <a href="/FESDriversLicenseCheck/personen.html" class="w3-bar-item w3-button"><i class="fa fa-male"></i></a>
    <a href="#" class="w3-bar-item w3-button"><i class="fa fa-car"></i></a>
    <a href="/FESDriversLicenseCheck/index.php" class="w3-bar-item w3-button"><i class="fa fa-sign-in"></i></a>
  </div>

<div class="w3-display-container" style="height:550px;">

  <div class="w3-display-topmiddle">
  <img src="/FESDriversLicenseCheck/img/fes.png" alt="Lights" class w3-image></div>

  <div class="w3-display-left"><img src="/FESDriversLicenseCheck/img/inapp_icons/030-creditcard.png"></div>
  <div class="w3-display-right"><a href="/FESDriversLicenseCheck/gescannte_person.html"><img src="/FESDriversLicenseCheck/img/inapp_icons/047-user.png"> </div>
  <button id="scan" class="w3-display-bottommiddle"><img src="/FESDriversLicenseCheck/img/inapp_icons/050-focus.png"></button>
  <script src="/FESDriversLicenseCheck/src/scanner.js"></script>
</div>

</body>

</html>
