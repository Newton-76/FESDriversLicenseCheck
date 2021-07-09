// code by: https://gerritniezen.com/getting-started-with-web-nfc
document.addEventListener('DOMContentLoaded', event => {
  const scanButton = document.getElementById('scan');
  if ("NDEFReader" in window) {
    const reader = new NDEFReader();

    scanButton.addEventListener('click', async () => {
      try {
        console.log('Scanning..');
        await reader.scan();
      } catch (e) {
        console.error("Error: ", e);
      }
    });

    reader.onreading = event => {
      console.log('Event:', event);
      if(ersteRFID === null){
        ersteRFID = event.serialNumber;
        firstScan();
      } else{
        zweiteRFID = event.serialNumber;
        startComparing();
      }
    };
  } else {
    alert("NFC is not supported!");
  }
});

/* Test without button --> Android's own NFC reader interrupts
if ("NDEFReader" in window) {
  const reader = new NDEFReader();
} else {
  alert("NFC is not supported!");
}

async function scan() {
  try {
    console.log('Scanning..');
    await reader.scan();
  } catch (e) {
    console.error("Error: ", e);
  }

  reader.onreading = event => {
    console.log('Event:', event);
    alert(event.serialNumber);
  };
}*/