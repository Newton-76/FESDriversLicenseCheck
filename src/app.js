//Author: Denis Neumann, 1308358

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
  //  .then((registration) => console.log("Registration successfull: ", registration))
  //    .catch((error) => console.log("Registration failed: ", error));
}


/*
// code by: https://gerritniezen.com/getting-started-with-web-nfc
document.addEventListener('DOMContentLoaded', event => {
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
});





/*
const scanButton = document.createElement("button");
const ndef = new NDEFReader();
scanButton.innerHTML = "Click me!";
scanButton.addEventListener("click", e => {
  console.log("You clicked me!")
});
document.body.appendChild(scanButton);

/*
 * Prototype, fully copied from https://web.dev/nfc/

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
