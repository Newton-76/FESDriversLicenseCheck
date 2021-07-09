//  Here the scanner needs to be started and return a RFID into var rfid
// Author: Denis Neumann, 1308358

class Fahrzeug {
  constructor() {
    this.rfid;
    this.kennzeichen;
    this.fahrzeugart;
  }
}


function startAdding() {
  if (sucheFahrer(id) != null || sucheFahrzeug(id) != null) alert("RFID bereits in Verwendung!");
  else {
    const fahrzeug = new Fahrzeug();
    fahrzeug.rfid = id;
    fahrzeug.kennzeichen = prompt("Bitte geben Sie das Kennzeichen ein:", "F-ES ");
    fahrzeug.fahrzeugart = 1; //Choose from dropdown list
    console.log(fahrzeug);
    document.cookie = "fahrzeug=" + JSON.stringify(fahrzeug);
  }
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