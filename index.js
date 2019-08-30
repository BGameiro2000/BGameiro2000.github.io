// Get JSON file
var request = new XMLHttpRequest();
request.open("GET", "./index.json", false);
request.send(null);
var myJSON = JSON.parse(request.responseText);
alert (myJSON.result[0]);

// Calculate my age
function myAge(myDate){
    var today = new Date();
    var birthDate = new Date(myDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
        age--;
    }
    return age;
}

// Display content in side panel
function aboutPlus(){
    for (var title in Object.keys(myJSON.author.other)){
        document.write("<hr>");
        document.write("<h3>"+Object.keys(myJSON.author.other)[title]+":</h3>");
        for (var paragraph in Object.values(myJSON.author.other)[title]){
            document.write("<p>"+Object.values(myJSON.author.other)[title][paragraph]+"</p>");
        }
    }
}