//  Here the scanner needs to be started and return a RFID into var rfid
// Implementation of the comparison: Denis Neumann, 1308358

function startComparing(){
  //wait for scan here
  var ersteRFID = '04:4C:4D:52:17:3C:80'; //supposed to be delivered by the scanner
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
    //wait for scan here
    var zweiteRFID = '04:0D:4C:52:17:3C:81'; //supposed to be delivered by the scanner
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
}

function sucheFahrzeug(id){
  var i = 0;
  var found = false;
  while(fahrzeuge[i] != null){
    if(fahrzeuge[i]['RFID'] === id){
      found = true;
      return fahrzeuge[i];
    }
    i++;
  }
  if(found === false) return null;
}

function sucheFahrer(id){
  var i = 0;
  while(fahrer[i] != null){
    if(fahrer[i]['RFID'] === id){
      return fahrer[i];
    }
    i++;
  }
  return null;
}

function abgleichFuehrerschein(maschine, mensch){
  var i = 1;
  while(mensch['Fuehrerschein' + i + '_ID'] != null){
    if(maschine === mensch['Fuehrerschein' + i + '_ID']){
      //Validity needs to be compared with today's date here
      // if valid:
      return true;
      // else return false;
    }
    i++;
  }
  return false;
}

function abgleichQualifikation(maschine, mensch){
  var i = 1;
  while(mensch['Qualifikation' + i + '_ID'] != null){
    if(maschine === mensch['Qualifikation' + i + '_ID']){
      //Validity needs to be compared with today's date here
      // if valid:
      return true;
      // else return false;
    }
    i++;
  }
  return false;
}
