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

// Type Conversion
const inputYear = '1991'; // string
console.log(inputYear + 18); // outputs 199118
console.log(Number(inputYear) + 18); // use Number() to return String as a Number
// original variable is still a String though!

console.log(Number('Daniel')); // fails and returns NaN
console.log(typeof NaN); // NaN is actually a number, just an invalid one

console.log(String(23)); // Number to String

// Type Coercion
console.log('I am ' + 23 + ' years old'); // the + between strings triggers coercion of numbers to strings
console.log('23' - '10' - 3); // the - converts strings to numbers!
console.log('23' + '10' + 3);
console.log('23' * '2' / '2') // * and / convert to numbers

let n = '1' + 1; // coercion to string -> 11
n = n - 1; // 11 - 1 = 10
console.log(n); // 10

let m = 2 + 3 + 4 + '5'; // 95
let o = '10' - '4' - '3' - 2 + '5'; // 15

// 5 falsy values are false when converted to a boolean:
// 0, '', undefined, null, NaN
// everything else will convert to true in a boolean
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Daniel')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

// example
const money = 0; // falsy
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!"); // this will be executed
}

let height; // undefined is falsy
if (height) {
    console.log("Yey height is defined");
} else {
    console.log("Height is UNDEFINED or 0"); // this will be executed
}

// Equality Operators === and ==
const ageQ = 18;
// always try to use ===
if (ageQ === 18) console.log('You just became an adult (strict)'); // {} not needed on single line
// == is a loose equality operator and converts, to be avoided!
if (ageQ == 18) console.log('You just became an adult (loose)');

// save a prompt input into a variable, but it stores as String. if Number wanted use Number() around prompt
// const favourite = prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);
//
// if (favourite == 23) { // "23" == 23 is true, but "23" === 23 is false
//     console.log("Cool, 23 is an amazing number!");
// } else if (favourite == 7) {
//     console.log("7 is also cool");
// } else console.log("Number is nor 23 or 7");
//
// // !== for not equals
// if (Number(favourite) !== 23) console.log('Why not 23?');


// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive.');
// } else {
//     console.log('Someone else should drive');
// }

const isTired = false; // C
console.log(hasDriversLicense || hasGoodVision || isTired); // true
console.log(hasDriversLicense && hasGoodVision && isTired); // false

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive.');
} else {
    console.log('Someone else should drive');
}


