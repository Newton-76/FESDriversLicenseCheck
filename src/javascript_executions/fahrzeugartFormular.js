// Author: Denis Neumann, 1308358

var formular = document.getElementById("formular");

var i = 0;
var div = document.createElement("div");
var text = document.createElement("p");
text.innerHTML = "Benötigte Führerscheinklasse: ";
div.appendChild(text);
var select = document.createElement("select");
select.setAttribute("id", "liste");
select.setAttribute("onchange", "beschreibung()");
var option = document.createElement("option");
option.innerHTML = "...";
select.appendChild(option);
while(fuehrerscheine[i] != null){
  var option = document.createElement("option");
  option.innerHTML = fuehrerscheine[i]["Klasse"];
  select.appendChild(option);
  i++;
}
div.appendChild(select);
text = document.createElement("p");
text.setAttribute("id", "Beschreibung");
div.appendChild(text);
formular.appendChild(div);

var checkbox = null;
var label = null;
i = 0;
while(qualifikationen[i] != null){
  div = document.createElement("div");
  checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "checkbox" + i);
  label = document.createElement("label");
  label.setAttribute("for", i);
  label.innerHTML = qualifikationen[i]["Qualifikation"];
  div.appendChild(checkbox);
  div.appendChild(label);
  formular.appendChild(div);
  i++;
}

function beschreibung(){
  var liste = document.getElementById("liste");
  if(liste.selectedIndex > 0){
    document.getElementById("Beschreibung").innerHTML = fuehrerscheine[liste.selectedIndex - 1]["Beschreibung"];
  }
}
