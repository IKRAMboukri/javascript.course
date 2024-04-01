const students = ["Spongbob", "Patrick", "Sandy"];
const studentUpper = students.map(upperCase);
console.log(studentUpper)

function upperCase(element){
    return element.toUpperCase();
}


function lowerCase(element){
    return element.toLowerCase();
}
const studentLower = students.map(lowerCase);
console.log(studentLower)


//exp
 const dates = ["2024-1-10","2025-1-23"];
 const datesFormat = dates.map(formatDate);
 console.log(datesFormat)

 function formatDate(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
 }