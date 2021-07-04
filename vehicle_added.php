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
  <script src="/FESDriversLicenseCheck/src/javascript_executions/scanner.js"></script>
  <script src="/FESDriversLicenseCheck/src/javascript_executions/compare.js"></script>
  <script src="/FESDriversLicenseCheck/src/javascript_executions/addPerson.js"></script>
</head>

<body>
   <div class="w3-bar w3-border" >
     <a href="/FESDriversLicenseCheck/main_menu.html" class="w3-bar-item w3-button w3-blue"><i class="fa fa-home"></i></a>
     <a href="#" class="w3-bar-item w3-button"><i class="fa fa-search"></i></a>
     <a href="/FESDriversLicenseCheck/personen.html" class="w3-bar-item w3-button"><i class="fa fa-male"></i></a>
     <a href="#" class="w3-bar-item w3-button"><i class="fa fa-car"></i></a>
     <a href="/FESDriversLicenseCheck/index.html" class="w3-bar-item w3-button"><i class="fa fa-sign-in"></i></a>
   </div>
   <?php
    require_once "connect.php";
    require "storeVehicle.php";
    ?>
 </body>
 </html>
