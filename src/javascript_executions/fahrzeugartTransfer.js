// Author: Denis Neumann, 1308358

class Fahrzeugart{
  constructor(){
    this.bezeichnung;
    this.fuehrerscheinID;
    this.qualifikationIDs = [];
    this.anzahlQualifikationsArten;
    this.anzahlQualifikationen;
  }
}

function start(){
  var fahrzeugart = new Fahrzeugart();
  var bezeichnung = document.getElementById("bezeichnung");
  fahrzeugart.bezeichnung = bezeichnung.value;
  var liste = document.getElementById("liste");
  if(liste.selectedIndex > 0){
    fahrzeugart.fuehrerscheinID = fuehrerscheine[liste.selectedIndex - 1]["id"];
  }
  addQualifications(fahrzeugart);
  document.cookie = "fahrzeugart=" + JSON.stringify(fahrzeugart);
  document.location.href = "fahrzeugart_hinzugefuegt.php";
}

function addQualifications(fahrzeugart) {
  var i = 0;
  var j = 0;
  var checkbox = null;
  while(document.getElementById("checkbox" + i) != null){
    checkbox = document.getElementById("checkbox" + i);
    if(checkbox.checked){
      fahrzeugart.qualifikationIDs[j++] = qualifikationen[i]["id"];
    }
   i++;
  }
  fahrzeugart.anzahlQualifikationsArten = i;
  fahrzeugart.anzahlQualifikationen = j;
}
