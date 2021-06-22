// code by: https://gerritniezen.com/getting-started-with-web-nfc
/*document.addEventListener('DOMContentLoaded', event => {
  const scanButton = document.getElementById('scan');
  const reader = new NDEFReader();

  scanButton.addEventListener('click', async () => {
    try {
      console.log('Scanning..');
      await reader.scan();
    } catch(e) {
      console.error("Error: ", e);
    }
  });

  reader.onreading = event => {
    console.log('Event:', event);
    document.getElementById("p1").innerHTML = event.serialNumber;
  };
});*/

// Compare functions by: Denis Neumann, 1308358
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

// Compare functions by: Denis Neumann, 1308358
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

// Compare functions by: Denis Neumann, 1308358
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

// Compare functions by: Denis Neumann, 1308358
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

/*
// Alternate try
const scanButton = document.createElement("button");
const ndef = new NDEFReader();
scanButton.innerHTML = "Click me!";
scanButton.addEventListener("click", e => {
  console.log("You clicked me!");
  scanTag();
});
document.body.appendChild(scanButton);

// Prototype, fully copied from https://web.dev/nfc/

async function scanTag() {
  try {
    const status = await navigator.permissions.query({ name: 'nfc'});
  }
  catch(e) {
    alert("No permission to use NFC!");

  }
  if ("NDEFReader" in window) {
    const ndef = new NDEFReader();
    ndef.scan().then(() => {
      console.log("Scan started successfully.");
      ndef.onreadingerror = () => {
        console.log("Cannot read data from the NFC tag. Try another one?");
      };
      ndef.onreading = event => {
        const message = event.message;
        for (const record of message.records) {
          console.log("Record type:  " + record.recordType);
          console.log("MIME type:    " + record.mediaType);
          alert("Record id:    " + record.id);
        }
      };
    }).catch(error => {
      console.log(`Error! Scan failed to start: ${error}.`);
    });
  } else {
    alert("NFC is not supported.");
  }
}
*/
