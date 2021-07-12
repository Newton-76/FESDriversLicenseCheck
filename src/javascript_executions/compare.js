//  Here the scanner needs to be started and return a RFID into var rfid
// Implementation of the comparison: Denis Neumann, 1308358

var istFahrer = false;
var istFahrzeug = false;
var ersterScan = null;
var zweiterScan = null;
var found = false;

function firstScan(){
  if((ersterScan = sucheFahrzeug(ersteRFID)) === null){
    ersterScan = sucheFahrer(ersteRFID);
  } else{
    istFahrzeug = true;
    text.innerHTML = "Fahrzeug erkannt";
  }
  if(!istFahrzeug){
    if(ersterScan === null){
      alert("RFID nicht in der Datenbank vorhanden!");
      text.innerHTML = "";
    } else{
      istFahrer = true;
      text.innerHTML = "Fahrer erkannt";
    }
  }
}


function startComparing(){
  if(istFahrzeug || istFahrer){
    if(istFahrzeug){
      zweiterScan = sucheFahrer(zweiteRFID);
      if(zweiterScan === null){
        alert("Kein Fahrer gefunden!");
        ersteRFID = null;
        zweiteRFID = null;
        text.innerHTML = "";
      }
    }
    if(istFahrer){
      zweiterScan = sucheFahrzeug(zweiteRFID);
      if(zweiterScan === null){
        alert("Kein Fahrzeug gefunden!");
        ersteRFID = null;
        zweiteRFID = null;
        text.innerHTML = "";
      }
    }
    if(zweiterScan != null){
      if(istFahrzeug){
        var active = true;
        if(!abgleichFuehrerschein(ersterScan['Fuehrerschein_ID'], zweiterScan)){
          text.innerHTML = "Fuererschein Klasse " + fuehrerscheine[(ersterScan['Fuehrerschein_ID'] - 1)]['Klasse'] + " nicht vorhanden!";
          active = false;
        }
        var i = 1;
        while(ersterScan['Qualifikation' + i + '_ID'] != null){
          if(active){
            if(!abgleichQualifikation(ersterScan['Qualifikation' + i + '_ID'], zweiterScan)){
              text.innerHTML = qualifikationen[(ersterScan['Qualifikation' + i + '_ID'] - 1)]['Qualifikation'] + " nicht vorhanden!";
              active = false;
            }
            i++;
          }
        }
        if(active) text.innerHTML = "Wenn sich " + zweiterScan['Vorname'] + " " + zweiterScan['Nachname'] + " vor Ihnen befindet, koennen Sie die Schluessel beruhigt abgeben :)";
      }
      if(istFahrer){
        var active = true;
        if(!abgleichFuehrerschein(zweiterScan['Fuehrerschein_ID'], ersterScan)){
          text.innerHTML = "Fuererschein Klasse " + fuehrerscheine[(zweiterScan['Fuehrerschein_ID'] - 1)]['Klasse'] + "nicht vorhanden!";
          active = false;
        }
        var i = 1;
        while(zweiterScan['Qualifikation' + i + '_ID'] != null){
          if(active){
            if(!abgleichQualifikation(zweiterScan['Qualifikation' + i + '_ID'], ersterScan)){
              text.innerHTML = qualifikationen[(zweiterScan['Qualifikation' + i + '_ID'] - 1)]['Qualifikation'] + " nicht vorhanden!";
              active = false;
            }
            i++;
          }
        }
        if(active) text.innerHTML = "Wenn sich " + ersterScan['Vorname'] + " " + ersterScan['Nachname'] + " vor Ihnen befindet, koennen Sie die Schluessel beruhigt abgeben :)";
      }
    }
  }
  ersteRFID = null;
  zweiteRFID = null;
}

function sucheFahrzeug(id){
  var i = 0;
  found = false;
  while(fahrzeuge[i] != null){
    console.log(fahrzeuge[i]["RFID"]);
    console.log(id);
    if(fahrzeuge[i]['RFID'] === id){
      found = true;
      console.log("Comparison successful!");
      return fahrzeugklassen[(fahrzeuge[i]["Fahrzeug_ID"] - 1)];
    }
    i++;
  }
  if(!found) return null;
}

function sucheFahrer(id){
  var i = 0;
  found = false;
  while(fahrer[i] != null){
    if(fahrer[i]['RFID'] === id){
      found = true;
      return fahrer[i];
    }
    i++;
  }
  if(!found) return null;
}

function abgleichFuehrerschein(maschine, mensch){
  var i = 1;
  while(mensch['Fuehrerschein' + i + '_ID'] != null){
    if(maschine === mensch['Fuehrerschein' + i + '_ID']){
      var gueltigkeit = mensch['F' + i + '_Gueltigkeit'];
      var datum = gueltigkeit.split('-');
      var heute = new Date();
      if(heute.getFullYear() < datum[0]){
        return true;
      } else if(heute.getFullYear() === datum[0]) {
        if(heute.getMonth() < datum[1]){
          return true;
        } else if(heute.getMonth() === datum[1]){
          if(heute.getDate() <= datum[2]){
            return true;
          }
        }
      }
    }
    i++;
  }
  return false;
}

function abgleichQualifikation(maschine, mensch){
  var i = 1;
  while(mensch['Qualifikation' + i + '_ID'] != null){
    if(maschine === mensch['Qualifikation' + i + '_ID']){
      var gueltigkeit = mensch['Q' + i + '_Gueltigkeit'];
      var datum = gueltigkeit.split('-');
      var heute = new Date();
      if(heute.getFullYear() < datum[0]){
        return true;
      } else if(heute.getFullYear() === datum[0]) {
        if(heute.getMonth() < datum[1]){
          return true;
        } else if(heute.getMonth() === datum[1]){
          if(heute.getDate() <= datum[2]){
            return true;
          }
        }
      }
    }
    i++;
  }
  return false;
}
