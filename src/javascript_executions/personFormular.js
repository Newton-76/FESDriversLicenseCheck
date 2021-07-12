// Author: Denis Neumann, 1308358

var formular = document.getElementById("formular");

var i = 0;
var checkbox = null;
var label = null;
var div = null;
var date = null;
var dateInput = null;
var dateLabel = null;

var text = document.createElement("p");
text.innerHTML = "Führerscheinklassen: ";
formular.appendChild(text);

while (fuehrerscheine[i] != null) {
  div = document.createElement("div");
  checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "fuehrerschein" + i);
  date = document.createElement("div");
  dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("name", "fDateInput" + i);
  dateInput.setAttribute("id", "fDateInput" + i);
  dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "fDateInput" + i);
  dateLabel.innerHTML = "Gültig bis: ";
  date.appendChild(dateLabel);
  date.appendChild(dateInput);
  date.style.display = "none";
  date.setAttribute("id", "fDate" + i);
  checkbox.setAttribute("onchange", "toggleDiv(fDate" + i + ")");
  label = document.createElement("label");
  label.setAttribute("for", i);
  label.innerHTML = "Klasse " + fuehrerscheine[i]["Klasse"];
  div.appendChild(checkbox);
  div.appendChild(label);
  div.appendChild(date);
  formular.appendChild(div);
  i++;
}

text = document.createElement("p");
text.innerHTML = "Qualifikationen:";
formular.appendChild(text);

i = 0;
while (qualifikationen[i] != null) {
  div = document.createElement("div");
  checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "qualifikation" + i);
  date = document.createElement("div");
  dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("name", "qDateInput" + i);
  dateInput.setAttribute("id", "qDateInput" + i);
  dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "qDateInput" + i);
  dateLabel.innerHTML = "Gültig bis: ";
  date.appendChild(dateLabel);
  date.appendChild(dateInput);
  date.style.display = "none";
  date.setAttribute("id", "qDate" + i);
  checkbox.setAttribute("onchange", "toggleDiv(qDate" + i + ")");
  label = document.createElement("label");
  label.setAttribute("for", i);
  label.innerHTML = qualifikationen[i]["Qualifikation"];
  div.appendChild(checkbox);
  div.appendChild(label);
  div.appendChild(date);
  formular.appendChild(div);
  i++;
}

function toggleDiv(element){
  if(element.style.display === "none"){
    element.style.display = "block";
  } else{
    element.style.display = "none";
  }
}
