var age = Number( prompt("Сколько вам лет"))
console.log(age);


if(age % 10 === 1 && age % 100 != 11) {
    console.log(age + ' год')
}else if (
    age % 10 >= 2 &&
    age % 10 <= 4 &&
    (age % 100 < 10 || age % 100 >=20)) {
        console.log(age + ' года')
} else {
    console.log(age + ' лет')
}