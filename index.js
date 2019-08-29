var DoB = "6/9/2000" // MM/DD/YYYY

function myAge( ){
    var today = new Date();
    var birthDate = new Date(DoB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
        age--;
    }
    return age;
}