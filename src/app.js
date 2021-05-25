if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
  //  .then((registration) => console.log("Registration successfull: ", registration))
  //    .catch((error) => console.log("Registration failed: ", error));
}

let scanButton = document.createElement("button");
scanButton.innerHTML = "ClickMe!";
scanButton.addEventListener("click", scanTag());
document.body.appendChild(scanButton);


/*
 * Prototype, fully copied from https://web.dev/nfc/
 */
async function scanTag() {
  if ("NDEFReader" in navigator) {
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
