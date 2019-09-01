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

// Fetch content from JSON
function setMetadata(){
    document.getElementById("author").setAttribute("content", myJSON.document.author);
    document.getElementById("subject").setAttribute("content", myJSON.document.subject);
    document.getElementById("title").innerHTML=myJSON.document.title
    document.getElementById("description").setAttribute("content", myJSON.document.description);
    document.getElementById("icon").setAttribute("href", myJSON.document.icon);
}

function about(){
    document.getElementById("avatar").setAttribute("src", myJSON.author.id.avatar)
    document.getElementById("name").innerHTML=myJSON.author.id.name
    for (info in myJSON.author.about){
        document.write("<p id='"+myJSON.author.about[info].id+"'><i class='"+myJSON.author.about[info].class+" icons'></i>"+myJSON.author.about[info].content+"</p>");
    }
}

function aboutPlus(){
    for (var title in Object.keys(myJSON.author.other)){
        document.write("<hr>");
        document.write("<h3>"+Object.keys(myJSON.author.other)[title]+":</h3>");
        for (var paragraph in Object.values(myJSON.author.other)[title]){
            document.write("<p>"+Object.values(myJSON.author.other)[title][paragraph]+"</p>");
        }
    }
}