//Author: Denis Neumann, 1308358

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/FESDriversLicenseCheck/sw.js")
    .then((registration) => console.log("Registration successfull: ", registration))
      .catch((error) => console.log("Registration failed: ", error));
}
