
var Sudents = ["Narine", "Giselle"]

var Students = {
    firstName: "Giselle",
    age       : 37,
    webLanguage : "js",
    country: "Mexico",
    fullName : function() {
      return this.firstName + " " + this.webLanguage;
    }
  };

  document.getElementById("demo").innerHTML = Students.fullName();