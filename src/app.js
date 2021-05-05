
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('Registration successfull', reg))
    .catch((err) => console.log('Registration failed', err));
}
