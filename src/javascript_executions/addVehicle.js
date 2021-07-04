//  Here the scanner needs to be started and return a RFID into var rfid
// Author: Denis Neumann, 1308358

class Fahrzeug {
  constructor() {
    this.rfid;
    this.kennzeichen;
    this.bezeichnung;
    this.fuehrerscheinIDs = [];
    this.qualifikationIDs = [];
    this.anzahlQualifikationsArten;
    this.anzahlQualifikationen;
  }
}


function startAdding() {
  // wait for scan here
  var id = "10:20:30:40:50:60:70"; //supposed to be delivered by the scanner
  if (sucheFahrer(id) != null || sucheFahrzeug(id) != null) alert("RFID bereits in Verwendung!");
  else {
    const fahrzeug = new Fahrzeug();
    fahrzeug.rfid = id;
    fahrzeug.kennzeichen = prompt("Bitte geben Sie das Kennzeichen ein:", "F-ES ");
    fahrzeug.bezeichnung = prompt("Um was fuer ein Fahrzeug handelt es sich?", "Fahrzeugart");
    addLicenses(fahrzeug);
    addQualifications(fahrzeug);
    console.log(fahrzeug);
    document.cookie = "fahrzeug=" + JSON.stringify(fahrzeug);
  }
}

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
