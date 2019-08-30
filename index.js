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
    for (title in myJSON.author.about.other){
        document.write("<hr>");
        document.write("<h3>"+title+":</h3>");
        for (var i = 0; i < title.lenght; i++){
            var obj = title[i];
            document.write("<p>"+obj+"</p>");
        }
    }
}