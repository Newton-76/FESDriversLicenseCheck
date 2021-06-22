<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#040521">
  <title>FES Driver's License Check</title>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="manifest" href="/FESDriversLicenseCheck/manifest.json">
  <link rel="apple-touch-icon" href="/FESDriversLicenseCheck/img/apple-icon-180.png">
  <link rel="icon" href="/FESDriversLicenseCheck/img/favicon.ico">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="/FESDriversLicenseCheck/src/scanner.js"></script>
</head>

<body>
  <?php require_once "connect.php"; ?>

  <script>
  // Adapted the hints and instructions given by https://stackoverflow.com/questions/23740548/how-do-i-pass-variables-and-data-from-php-to-javascript
  // Author: Denis Neumann, 1308358
    var fahrzeuge = <?php
      $query = "SELECT * FROM Fahrzeuge";
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
    //debug and demonstration:
    for(var i = 0; i < (fahrer.length - 1); i++){
      var j = 1;
      console.log("Name: " + fahrer[i]['Nachname']);
      while(fahrer[i]['Fuehrerschein' + j + '_ID'] != null){
        var fid = (fahrer[i]['Fuehrerschein' + j + '_ID'] - 1);
        console.log("Fuehrerscheinklasse: " + fuehrerscheine[fid]['Klasse']);
        console.log("Gueltig bis: " + fahrer[i]['F' + j + '_Gueltigkeit']);
        j++;
      }
      j = 1;
      while(fahrer[i]['Qualifikation' + j + '_ID'] != null){
        var qid = (fahrer[i]['Qualifikation' + j + '_ID'] - 1);
        console.log("Qualifikation " + j + ": " + qualifikationen[qid]['Qualifikation']);
        console.log("Gueltig bis: " + fahrer[i]['Q' + j + '_Gueltigkeit']);
        j++;
      }
      console.log(" ");
    }

    for(var i = 0; i < (fahrzeuge.length - 1); i++){
      console.log("Kennzeichen: " + fahrzeuge[i]['Kennzeichen']);
      if(fahrzeuge[i]['Fuehrerschein_ID'] != null){
        var fid = (fahrzeuge[i]['Fuehrerschein_ID'] - 1);
        console.log("Benoetigte Fuehrerscheinklasse: " + fuehrerscheine[fid]['Klasse']);
      } else{
        console.log("Kein Fuehrerschein benoetigt.");
      }
      var j = 1;
      while(fahrzeuge[i]['Qualifikation' + j + '_ID'] != null){
        var qid = (fahrzeuge[i]['Qualifikation' + j + '_ID'] - 1);
        console.log("Benoetigte Qualifikation: " + qualifikationen[qid]['Qualifikation']);
        j++;
      }
      console.log(" ");
    }
// End of debug/demo
  </script>

  <script>
  //  Here the scanner needs to be started and return a RFID into var rfid
  // Implementation of the comparison: Denis Neumann, 1308358
  var ersteRFID = '04:4C:4D:52:17:3C:80';
  var ersterScan = sucheFahrzeug(ersteRFID);
  var istFahrzeug = false;
  var istFahrer = false;
  if(ersterScan === null){
    ersterScan = sucheFahrer(ersteRFID);
  } else{
    istFahrzeug = true;
  }
  if(ersterScan === null){
    alert("RFID nicht in der Datenbank vorhanden!");
  } else{
    istFahrer = true;
  }

  if(istFahrzeug || istFahrer){
    var zweiteRFID = '04:0D:4C:52:17:3C:81';
    var zweiterScan;
    if(istFahrzeug){
      zweiterScan = sucheFahrer(zweiteRFID);
      if(zweiterScan === null) alert("Kein Fahrer gefunden!");
    }
    if(istFahrer){
      zweiterScan = sucheFahrzeug(zweiteRFID);
      if(zweiterScan === null) alert("Kein Fahrzeug gefunden!");
    }
    if(zweiterScan != null){
      if(istFahrzeug){
        var active = true;
        if(!abgleichFuehrerschein(ersterScan['Fuehrerschein_ID'], zweiterScan)){
          alert("Fuererschein Klasse " + fuehrerscheine[(ersterScan['Fuehrerschein_ID'] - 1)]['Klasse'] + " nicht vorhanden!");
          active = false;
        }
        var i = 1;
        while(ersterScan['Qualifikation' + i + '_ID'] != null){
          if(active){
            if(!abgleichQualifikation(ersterScan['Qualifikation' + i + '_ID'], zweiterScan)){
              alert(qualifikationen[(ersterScan['Qualifikation' + i + '_ID'] - 1)]['Qualifikation'] + " nicht vorhanden!");
              active = false;
            }
            i++;
          }
        }
        if(active) alert("Sie koennen die Schluessel beruhigt abgeben :) ");
      }
      if(istFahrer){
        var active = true;
        if(!abgleichFuehrerschein(zweiterScan['Fuehrerschein_ID'], ersterScan)){
          alert("Fuererschein Klasse " + fuehrerscheine[(zweiterScan['Fuehrerschein_ID'] - 1)]['Klasse'] + "nicht vorhanden!");
          active = false;
        }
        var i = 1;
        while(zweiterScan['Qualifikation' + i + '_ID'] != null){
          if(active){
            if(!abgleichQualifikation(zweiterScan['Qualifikation' + i + '_ID'], ersterScan)){
              alert(qualifikationen[(zweiterScan['Qualifikation' + i + '_ID'] - 1)]['Qualifikation'] + " nicht vorhanden!");
              active = false;
            }
            i++;
          }
        }
        if(active) alert("Sie koennen die Schluessel beruhigt abgeben :) ");
      }
    }
  }

  </script>


  <div class="w3-bar w3-border" >
    <a href="/FESDriversLicenseCheck/main_menu.html" class="w3-bar-item w3-button w3-blue"><i class="fa fa-home"></i></a>
    <a href="#" class="w3-bar-item w3-button"><i class="fa fa-search"></i></a>
    <a href="/FESDriversLicenseCheck/personen.html" class="w3-bar-item w3-button"><i class="fa fa-male"></i></a>
    <a href="#" class="w3-bar-item w3-button"><i class="fa fa-car"></i></a>
    <a href="/FESDriversLicenseCheck/index.html" class="w3-bar-item w3-button"><i class="fa fa-sign-in"></i></a>
  </div>
</body>
</html>
