if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
  //  .then((registration) => console.log("Registration successfull: ", registration))
  //    .catch((error) => console.log("Registration failed: ", error));
}
