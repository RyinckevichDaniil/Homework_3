// var age = Number( prompt("Сколько вам лет", "19 лет"))

//     var ageNumber = age > 10 ? age % 10 : age;



//         if (ageNumber === 1) {
//             console.log(age + ' год')
//         } else if (age > 1 && age < 5 ) {
//             console.log(age +  ' года');
//         } else if (ageNumber > 1 && age < 5 ) {
//             console.log(age +  ' года');
//         } else {
//             console.log(age + ' лет');
//         }
var age = Number( prompt("Сколько вам лет"))

var ageNumber = age > 20 ? age % 10 : age;
console.log(ageNumber)


if (ageNumber === 1) {
    console.log(age + ' год')
} else if (ageNumber > 1 && ageNumber < 5 ) {
    console.log(age + ' года')
} else {
    console.log(age + ' лет');
}
