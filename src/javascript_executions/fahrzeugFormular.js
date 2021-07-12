// Author: Denis Neumann, 1308358

var formular = document.getElementById("formular");

var i = 0;
var select = document.createElement("select");
var option = document.createElement("option");
option.innerHTML = "...";
select.appendChild(option);
while(fahrzeugklassen[i] != null){
  option = document.createElement("option");
  option.innerHTML = fahrzeugklassen[i]["Bezeichnung"];
  select.appendChild(option);
  i++;
}
formular.appendChild(select);
