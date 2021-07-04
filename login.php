<!DOCTYPE html>
<html lang="en" dir="ltr">

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
</head>

<body>
  <div class="w3-col w3-container" style="width:20%"> </div>
  <div class="w3-col w3-container" style="width:80%">
    <img src="/FESDriversLicenseCheck/img/fes.png" alt="Lights" class="w3-image">
    <?php
    session_start();

    if ( isset($_POST['kennwort']) and $_POST['kennwort'] != ""  )
    {
        // Kontrolle, ob Kennwort korrekt
        //TODO diese werden i.d.R. aus Datenbank ausgelesen
        if (
             $_POST['kennwort'] == "0987"
           )
        {
            $_SESSION['eingeloggt'] = true;
        }
        else
        {
            echo "<h4>ungültige Eingabe";
            $_SESSION['eingeloggt'] = false;
        }
    }

    if ( isset($_SESSION['eingeloggt']) and $_SESSION['eingeloggt'] == true )
    {
        // weiterleiten zum Inhaltsbereich
        header("Location: main_menu.html");
    }
    else
    {
          echo "<h3>Bitte loggen Sie sich mit ihrem 4-stelligen PIN ein";

          $url = $_SERVER['SCRIPT_NAME'];
          echo '<form action="'. $url .'" method="POST">';
          echo '<p>Kennwort:<br>';
          echo '<input type="password" name="kennwort" value="">';
          echo '<p><background-color: #008CBA; input type="Submit" value="einloggen">';
          echo '</form>';

          // Programm wird hier beendet, denn Benutzer ist noch nicht
          // eingeloggt
      }

      ?>

    </div>
    <div class="w3-col w3-container" style="width:20%"> </div>
  </div>
  <script src="/FESDriversLicenseCheck/src/javascript_executions/app.js"></script>
</body>

</html>
