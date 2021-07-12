class Qualifikationen{
  constructor(){
    this.qualifikation;
    this.anzahl;
  }
}


function start(){
  var neueQualifikation = new Qualifikationen();
  var eingabe = document.getElementById("eingabe");
  neueQualifikation.qualifikation = eingabe.value;
  var i = 0;
  while(qualifikationen[i] != null){
    i++;
  }
  neueQualifikation.anzahl = ++i;
  document.cookie = "qualifikation=" + JSON.stringify(neueQualifikation);
  document.location.href = "qualifikation_hinzugefuegt.php";
}
