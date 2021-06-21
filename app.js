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
