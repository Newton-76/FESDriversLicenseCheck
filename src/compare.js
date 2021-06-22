//  Here the scanner needs to be started and return a RFID into var rfid
// Implementation of the comparison: Denis Neumann, 1308358
var ersteRFID = '04:4C:4D:52:17:3C:80';
var ersterScan = sucheFahrzeug(ersteRFID);
var istFahrzeug = false;
var istFahrer = false;
if(ersterScan === null){
  ersterScan = sucheFahrer(ersteRFID);
} else{
  istFahrzeug = true;
}
if(ersterScan === null){
  alert("RFID nicht in der Datenbank vorhanden!");
} else{
  istFahrer = true;
}

if(istFahrzeug || istFahrer){
  var zweiteRFID = '04:0D:4C:52:17:3C:81';
  var zweiterScan;
  if(istFahrzeug){
    zweiterScan = sucheFahrer(zweiteRFID);
    if(zweiterScan === null) alert("Kein Fahrer gefunden!");
  }
  if(istFahrer){
    zweiterScan = sucheFahrzeug(zweiteRFID);
    if(zweiterScan === null) alert("Kein Fahrzeug gefunden!");
  }
  if(zweiterScan != null){
    if(istFahrzeug){
      var active = true;
      if(!abgleichFuehrerschein(ersterScan['Fuehrerschein_ID'], zweiterScan)){
        alert("Fuererschein Klasse " + fuehrerscheine[(ersterScan['Fuehrerschein_ID'] - 1)]['Klasse'] + " nicht vorhanden!");
        active = false;
      }
      var i = 1;
      while(ersterScan['Qualifikation' + i + '_ID'] != null){
        if(active){
          if(!abgleichQualifikation(ersterScan['Qualifikation' + i + '_ID'], zweiterScan)){
            alert(qualifikationen[(ersterScan['Qualifikation' + i + '_ID'] - 1)]['Qualifikation'] + " nicht vorhanden!");
            active = false;
          }
          i++;
        }
      }
      if(active) alert("Wenn sich " + zweiterScan['Vorname'] + " " + zweiterScan['Nachname'] + " vor Ihnen befindet, koennen Sie die Schluessel beruhigt abgeben :)");
    }
    if(istFahrer){
      var active = true;
      if(!abgleichFuehrerschein(zweiterScan['Fuehrerschein_ID'], ersterScan)){
        alert("Fuererschein Klasse " + fuehrerscheine[(zweiterScan['Fuehrerschein_ID'] - 1)]['Klasse'] + "nicht vorhanden!");
        active = false;
      }
      var i = 1;
      while(zweiterScan['Qualifikation' + i + '_ID'] != null){
        if(active){
          if(!abgleichQualifikation(zweiterScan['Qualifikation' + i + '_ID'], ersterScan)){
            alert(qualifikationen[(zweiterScan['Qualifikation' + i + '_ID'] - 1)]['Qualifikation'] + " nicht vorhanden!");
            active = false;
          }
          i++;
        }
      }
      if(active) alert("Wenn sich " + ersterScan['Vorname'] + " " + ersterScan['Nachname'] + " vor Ihnen befindet, koennen Sie die Schluessel beruhigt abgeben :)");
    }
  }
}
