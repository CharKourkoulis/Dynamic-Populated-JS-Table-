function Company(name, country, telephone) {
  this.name = name;
  this.country = country;
  this.telephone = telephone;
}

var p = [];
p[0] = new Company("AECOM", "America", "+00546982309");
p[1] = new Company("CH2 Hill", "America", "+4005564346");
p[2] = new Company("Arcadis", "Hungary", "+5400554246");
p[3] = new Company("GHD", "Ukraine", "+997545234213");
p[4] = new Company("ERM", "Italy", "+5400554246");
p[5] = new Company("MWH Global", "Germany", "+1244554246");
p[6] = new Company("Jacobs", "Greece", "+00306982309");
p[7] = new Company("Grontmij", "Norway", "+001196982309");
p[8] = new Company("Mott Jhord", "Denmark", "+00226982309");
p[9] = new Company("Worley Parsons", "UK", "+00446982378");
p[10] = new Company("Atkins", "Holland", "+007686982309");
p[11] = new Company("Cardbo", "Romania", "+0007675749");
p[12] = new Company("Ramboll", "Brazil", "+004577683463");
p[13] = new Company("Korobos", "Greece", "+004577683463");



function UpdateTable(table, titlos) {
  var headings = "<thead><tr>";
  var footings = "<tfoot><tr>";
  var data = "";
  var keys = Object.keys(table[0]);
  
  for (var key of keys) {
    headings += "<th>" + key + "</th>";
    footings += "<th>" + key + "</th>";
  }

   headings += "</tr></thead>";
   footings += "</tr></tfoot>";

  text = "<caption>" + titlos + "</caption>";
  text += headings;
  text += "<tbody>";

  for (let i = 0; i < table.length; i++) {
    data += "<tr>";
    for (var x in table[i]) {
         data += "<td>" + table[i][x] + "</td>";
         
    }
    data += "</tr>";
  }

  text += data;
  text += "</tbody>";
  text += footings;
}


UpdateTable(p, "ECOLOGICAL COMPANIES");
document.getElementById("monitor").innerHTML = text;



$(document).ready(function () {
  
$("li").mouseover(function () { 
    this.slideDown();
});

});

