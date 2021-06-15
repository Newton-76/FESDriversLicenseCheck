/*
 * Programming the IndexedDB which is highly reccomended for usage in
 * progressive web applications.
 * Followed the instructions of :
 * - https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
 * - https://developer.chrome.com/docs/devtools/storage/indexeddb
 * Author: Denis Neumann, 1308358
 */

window.indexedDB = window.indexedDB || window.mozIndexedDB ||
  window.webkitIndexedDB || window.msIndexedDB;

if (!window.indexedDB) {
  alert("IndexedDB wird nicht von Ihrem Browser unterstützt!");
} else {
  var request = window.indexedDB.open("FESDatenbank", 1);

  request.onupgradeneeded = e => {
    alert("Datenbank wird erneuert...");
  }

  request.onsuccess = e => {
    alert("Datenbank geladen.");
  }

  request.onerror = e => {
    alert(e.target.error);
  }
}
