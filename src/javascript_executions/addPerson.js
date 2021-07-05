//  Here the scanner needs to be started and return a RFID into var rfid
// Author: Denis Neumann, 1308358

class Person {
  constructor() {
    this.rfid;
    this.vorname;
    this.nachname;
    this.fuehrerscheinIDs = [];
    this.fGueltigkeiten = [];
    this.anzahlFuehrerschienKlassen;
    this.anzahlFuehrerscheine;
    this.qualifikationIDs = [];
    this.qGueltigkeiten = [];
    this.anzahlQualifikationsArten;
    this.anzahlQualifikationen;
  }
}


function startAdding() {
  if (sucheFahrer(id) != null || sucheFahrzeug(id) != null) alert("RFID bereits in Verwendung!");
  else {
    const person = new Person();
    person.rfid = id;
    person.vorname = prompt("Bitte geben Sie den Vornamen ein:", "Vorname");
    person.nachname = prompt("Bitte geben Sie den Nachnamen ein:", "Nachname");
    addLicenses(person);
    addQualifications(person);
    console.log(person);
    document.cookie = "person=" + JSON.stringify(person);
  }
}

function addLicenses(person) {
  var i = 0;
  var j = 0;
  while (fuehrerscheine[i] != null) {
    if (confirm("Fuehrerschein Klasse " + fuehrerscheine[i]['Klasse'] + " vorhanden?")) {
      person.fuehrerscheinIDs[j] = fuehrerscheine[i]['id'];
      var year = parseInt(prompt("In welchem Jahr verliert der Fuehrerschein die Gueltigkeit?"));
      while (isNaN(year) || year < new Date().getFullYear()) {
        alert("Bitte nur gueltige Zahlen eingeben!");
        year = prompt("In welchem Jahr verliert der Fuehrerschein die Gueltigkeit?")
      }
      person.fGueltigkeiten[j] = year.toString() + "-";
      var month = parseInt(prompt("In welchem Monat verliert der Fuehrerschein die Gueltigkeit?"));
      while (isNaN(month) || month < 0 || month > 12) {
        alert("Bitte nur gueltige Zahlen eingeben!");
        month = prompt("In welchem Monat verliert der Fuehrerschein die Gueltigkeit?")
      }
      if (month < 10) person.fGueltigkeiten[j] += "0";
      person.fGueltigkeiten[j] += month + "-";
      var day = parseInt(prompt("An welchem Tag verliert der Fuehrerschein die Gueltigkeit?"));
      while (isNaN(day) || day < 0 || day > 31) {
        alert("Bitte nur gueltige Zahlen eingeben!");
        day = prompt("An welchem Tag verliert der Fuehrerschein die Gueltigkeit?")
      }
      if (day < 10) person.fGueltigkeiten[j] += "0";
      person.fGueltigkeiten[j] += day;
      j++;
    }
    i++;
  }
  person.anzahlFuehrerschienKlassen = i;
  person.anzahlFuehrerscheine = j;
}

function addQualifications(person) {
  var i = 0;
  var j = 0;
  while (qualifikationen[i] != null) {
    if (confirm("Ist " + qualifikationen[i]['Qualifikation'] + " vorhanden?")) {
      person.qualifikationIDs[j] = qualifikationen[i]['id'];
      var year = parseInt(prompt("In welchem Jahr verliert die Schulung die Gueltigkeit?"));
      while (isNaN(year) || year < new Date().getFullYear()) {
        alert("Bitte nur gueltige Zahlen eingeben!");
        year = prompt("In welchem Jahr verliert die Schulung die Gueltigkeit?")
      }
      person.qGueltigkeiten[j] = year.toString() + "-";
      var month = parseInt(prompt("In welchem Monat verliert die Schulung die Gueltigkeit?"));
      while (isNaN(month) || month < 0 || month > 12) {
        alert("Bitte nur gueltige Zahlen eingeben!");
        month = prompt("In welchem Monat verliert die Schulung die Gueltigkeit?")
      }
      if (month < 10) person.qGueltigkeiten[j] += "0";
      person.qGueltigkeiten[j] += month + "-";
      var day = parseInt(prompt("An welchem Tag verliert die Schulung die Gueltigkeit?"));
      while (isNaN(day) || day < 0 || day > 31) {
        alert("Bitte nur gueltige Zahlen eingeben!");
        day = prompt("An welchem Tag verliert die Schulung die Gueltigkeit?")
      }
      if (day < 10) person.qGueltigkeiten[j] += "0";
      person.qGueltigkeiten[j] += day;
      j++;
    }
    i++;
  }
  person.anzahlQualifikationsArten = i;
  person.anzahlQualifikationen = j;
}
