<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#040521">
  <title>FES Driver's License Check</title>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="manifest" href="/manifest.json">
  <link rel="apple-touch-icon" href="/img/apple-icon-180.png">
  <link rel="icon" href="/img/favicon.ico">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="/src/javascript_executions/compare.js"></script>
</head>

<body>
  <?php require_once "connect.php"; ?>

  <script>
  // Adapted the hints and instructions given by https://stackoverflow.com/questions/23740548/how-do-i-pass-variables-and-data-from-php-to-javascript
  // Author: Denis Neumann, 1308358
    var fahrzeuge = <?php require "loadFahrzeuge.php" ?>;
    var fahrer = <?php require "loadFahrer.php" ?>;
    var fuehrerscheine = <?php require "loadFuehrerscheine.php" ?>;
    var qualifikationen = <?php require "loadQualifikationen.php" ?>;
/*debug and demonstration:
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
*/
  var ersteRFID = null;
  var zweiteRFID = null;
  </script>
  <button id="scan">Click to start scanning!</button>
  <script src="/src/javascript_executions/scanner.js"></script>

  <div class="w3-bar w3-border" >
    <a href="/main_menu.html" class="w3-bar-item w3-button w3-blue"><i class="fa fa-home"></i></a>
    <a href="#" class="w3-bar-item w3-button"><i class="fa fa-search"></i></a>
    <a href="/personen.html" class="w3-bar-item w3-button"><i class="fa fa-male"></i></a>
    <a href="#" class="w3-bar-item w3-button"><i class="fa fa-car"></i></a>
    <a href="/index.html" class="w3-bar-item w3-button"><i class="fa fa-sign-in"></i></a>
  </div>
</body>
</html>
