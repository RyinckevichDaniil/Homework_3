var age = Number( prompt("Сколько вам лет"))

var ageNumber = age > 20 ? age % 10 : age && age > 100 ? age % 100 : age;
console.log(ageNumber)


if (ageNumber === 1) {
    console.log(age + ' год')
} else if (ageNumber > 1 && ageNumber < 5 ) {
    console.log(age + ' года')
} else {
    console.log(age + ' лет');
}
