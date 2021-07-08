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
  <script src="/src/javascript_executions/addVehicle.js"></script>
</head>

<body>
  <?php require_once "connect.php"; ?>

  <script>
  // Adapted the hints and instructions given by https://stackoverflow.com/questions/23740548/how-do-i-pass-variables-and-data-from-php-to-javascript
  // Author: Denis Neumann, 1308358
    var fahrzeuge = <?php require "loadFahrzeuge.php"; ?>;
    var fahrer = <?php require "loadFahrer.php"; ?>;
    var fahrzeugklassen = <?php require "loadFahrzeugklassen.php" ?>;

  // Brought data back to php with the help of https://www.w3schools.com/js/js_cookies.asp and https://www.google.com/amp/s/www.geeksforgeeks.org/how-to-pass-javascript-variables-to-php/amp/
  var id = null;
  </script>
  <button id="scan">Click to start scanning!</button>
  <script src="/src/javascript_executions/addingScanner.js"></script>

  <div class="w3-display-left"><a href="/vehicle_added.php"><img src="/img/inapp_icons/030-creditcard.png"></div>

  <div class="w3-bar w3-border" >
    <a href="/main_menu.html" class="w3-bar-item w3-button w3-blue"><i class="fa fa-home"></i></a>
    <a href="#" class="w3-bar-item w3-button"><i class="fa fa-search"></i></a>
    <a href="/personen.html" class="w3-bar-item w3-button"><i class="fa fa-male"></i></a>
    <a href="#" class="w3-bar-item w3-button"><i class="fa fa-car"></i></a>
    <a href="/index.html" class="w3-bar-item w3-button"><i class="fa fa-sign-in"></i></a>
  </div>
</body>
</html>
