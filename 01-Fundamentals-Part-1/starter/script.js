let js = "amazing";
console.log(60 + 9);

console.log('Jonas');

// let firstName = "Bob";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);


// let, const and var

// let is changeable
// let age = 30;
// age = 31;

// const is immutable
// const birthYear = 1997;
// birthYear = 1998; -> not possible

// const job; -> const has to be initialized
// const job = "god";
// prefer const to declare variables and change to let only if necessary

// var should never be used!
var myJob = "sea manager"; //
myJob = "customer success manager";

// global variables should also never be used!
// lastName = "Barber";


// Maths operators
const now = 2024;
const ageJonas = now - 1991;
const ageSarah = now - 1999;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Jonas";
const lastName = "Berger";
// console.log(firstName + " " + lastName);

// Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isSarahFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// Operator precedence
console.log(25 - 10 - 5);
let x, y; // declare two empty values at once
x = y = 25 - 10 - 5; // x = y = 10, x = 10, assignments happen right to left
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge)


// Strings and Template Literals
const firstName = "Daniel";
const job = "Customer Success Manager";
const birthYear = 1997;
const year = 2024;

const daniel = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + ".";
console.log(daniel);

// use the back-ticks to tell javascript we are using a template literal
const danielNew = `I'm ${firstName} a ${year - birthYear} year old ${job}.`;
console.log(danielNew);

// multi line string with ""
console.log("String with \n\
multiple\n\
lines")

//easier with back-ticks
console.log(`String
with multiple
lines`);


// if / else
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
