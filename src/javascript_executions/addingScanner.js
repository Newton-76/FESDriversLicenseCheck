/*
 * sources:
 *  https://gerritniezen.com/getting-started-with-web-nfc
 *  https://web.dev/nfc/
 * Author: Denis Neumann, 1308358
 */

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
      id = event.serialNumber;
      startAdding();
    };
  } else {
    alert("NFC is not supported!");
  }
});
