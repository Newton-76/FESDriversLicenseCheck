//  Here the scanner needs to be started and return a RFID into var rfid
// Author: Denis Neumann, 1308358

class Fahrzeug {
  constructor() {
    this.rfid;
    this.kennzeichen;
    this.fahrzeugart;
  }
}

function rfidCheck(){
  if (sucheFahrzeug(id) != null){
    if(confirm("Fahrzeug bereits vorhanden, wollen Sie Änderungen vornehmen?")){

    } else{
      document.location.href = "main_menu.html";
    }
  } else if(sucheFahrer(id) != null){
    alert("RFID wird bereits als Fahrer verwendet!");
    document.location.href = "main_menu.html";
  }
}


function startAdding() {
  const fahrzeug = new Fahrzeug();
  var liste = document.getElementById("liste");
  fahrzeug.rfid = id;
  fahrzeug.kennzeichen = document.getElementById("kennzeichen").value;
  if(liste.selectedIndex > 0){
    fahrzeug.fahrzeugart = fahrzeugklassen[liste.selectedIndex - 1]["id"];
  }
  console.log(fahrzeug);
  document.cookie = "fahrzeug=" + JSON.stringify(fahrzeug);
  document.location.href = "vehicle_added.php";
}


 /* Not needed here anymore, but maybe useful in other usecases
function addLicenses(fahrzeug) {
  var i = 0;
  var set = false;
  while (fuehrerscheine[i] != null && !set) {
    if (confirm("Fuehrerschein Klasse " + fuehrerscheine[i]['Klasse'] + " benoetigt?")) {
      fahrzeug.fuehrerscheinID = fuehrerscheine[i]['id'];
      set = true;
    }
    i++;
  }
}

function addQualifications(fahrzeug) {
  var i = 0;
  var j = 0;
  while (qualifikationen[i] != null) {
    if (confirm("Wird " + qualifikationen[i]['Qualifikation'] + " benoetigt?")) {
      fahrzeug.qualifikationIDs[j] = qualifikationen[i]['id'];
      j++;
    }
    i++;
  }
  fahrzeug.anzahlQualifikationsArten = i;
  fahrzeug.anzahlQualifikationen = j;
}
*/
