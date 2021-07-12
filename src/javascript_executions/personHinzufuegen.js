// Author: Denis Neumann, 1308358

var checkbox = null;

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

function rfidCheck(){
  if (sucheFahrer(id) != null){
    if(confirm("Fahrer bereits vorhanden, wollen Sie Änderungen vornehmen?")){

    } else{
      document.location.href = "main_menu.html";
    }
  } else if(sucheFahrzeug(id) != null){
    alert("RFID wird bereits als Fahrzeug verwendet!");
    document.location.href = "main_menu.html";
  }
}

function startAdding() {
  const person = new Person();
  person.rfid = id;
  person.vorname = document.getElementById("vorname").value;
  person.nachname = document.getElementById("nachname").value;
  addLicenses(person);
  addQualifications(person);
  document.cookie = "person=" + JSON.stringify(person);
  document.location.href = "person_added.php";
}

function addLicenses(person) {
  var i = 0;
  var j = 0;
  while(document.getElementById("fuehrerschein" + i) != null){
    checkbox = document.getElementById("fuehrerschein" + i);
    if(checkbox.checked){
      person.fuehrerscheinIDs[j] = fuehrerscheine[i]["id"];
      person.fGueltigkeiten[j] = document.getElementById("fDateInput" + i).value;
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
  while(document.getElementById("qualifikation" + i) != null){
    checkbox = document.getElementById("qualifikation" + i);
    if(checkbox.checked){
      person.qualifikationIDs[j] = qualifikationen[i]["id"];
      person.qGueltigkeiten[j] = document.getElementById("qDateInput" + i).value;
      j++;
    }
   i++;
  }
  person.anzahlQualifikationsArten = i;
  person.anzahlQualifikationen = j;
}
