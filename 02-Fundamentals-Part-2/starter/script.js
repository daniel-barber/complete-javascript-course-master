// strict mode
'use strict'; // activate strict mode for whole script, is recommended to write more secure code

let hasDriversLicense = false;
const passTest = true;

// typos in variables now throw errors
// if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive');

// Reserved variable names throw errors
// const interface = 'Audio';
// const private = 543;


// Functions

// defining the function
function logger() {
    console.log('My name is Dani');
}

// calling, running or invoking the function
logger();
logger();
logger(22); // passing argument does nothing if not used in function


// function with parameters
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// pass the arguments into the function
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function declaration - can be called before the declaration - hoisting
const age1 = calcAge1(1997); // argument (1997)

function calcAge1(birthYear) { // parameter (birthYear)
    return 2024 - birthYear;
}

console.log(age1);

// Function expression - anonymous function without a name, can't access calcAge2 before initialization
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}

const age2 = calcAge2(1999);
console.log(age1, age2);


// Arrow function with one parameter x => do smth with x
const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(1990);
console.log(age3);

// Arrow function with two parameters
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1997, 'Dani'));
console.log(yearsUntilRetirement(1970, 'Steve'));

// Arrow functions do not have a this

// Functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
}

console.log(fruitProcessor2(2, 3));

// Review Functions
const calcAge = function (birthYear) {
    return 2024 - birthYear;
}

const yearsUntilRetirement2 = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement; // return exits the function
        console.log('this should not get printed');
    } else {
        return -1;
    }
}
console.log(yearsUntilRetirement2(1997, 'Dani'));
console.log(yearsUntilRetirement2(1950, 'Sue'));


// Arrays

// not efficient
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// Array can also be created like this
const years = new Array(1991, 2039, 1999, 1980);

// Print different positions of Array
// console.log(friends[0]);
// console.log(friends[2]);
//
// // get length of Array
// console.log(friends.length);
//
// // get last element in Array
// console.log(friends[friends.length - 1]);
//
// // change element at position in Array - Arrays with const are not primitive and are mutable
// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice']; // this is not possible though
// const firstName = 'Jonas';
// const jonas = [firstName, 'Alice', 2024 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// Exercise
const calcAge4 = function (birthYear) {
    return 2024 - birthYear;
}
const years2 = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge4(years2)); // this won't work cause function doesn't take an Array

const newAge1 = calcAge1(years2[0]);
const newAge2 = calcAge1(years2[1]);
const newAge3 = calcAge1(years2[years.length - 1]);
console.log(newAge1, newAge2, newAge3);

const ages = [calcAge1(years2[0]), calcAge1(years2[1]), calcAge1(years2[years.length - 1])]
console.log(ages);

// Array Methods
const friends = ['Michael', 'Steven', 'Peter'];

// add element to the end of the Array
const newLength = friends.push('Jay'); //  and returns the new length
console.log(friends);
console.log(newLength);

// add element to beginning of Array
friends.unshift('John');
console.log(friends);

// pop removes last element of Array
const popped = friends.pop(); // returns removed element
friends.pop();
console.log(friends);
console.log(popped);

// remove first element from Array
friends.shift(); // returns removed element
console.log(friends);

// return the index of an element in the Array
console.log(friends.indexOf('Steven')); // returns 1
console.log(friends.indexOf('Bob')); // if not in Array will return -1

// check if element is in Array "strict"
console.log(friends.includes('Steven')); // returns true
console.log(friends.includes('Bob')); // returns false

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}


// Objects

// basic Array
const jonasArray = [
    'Jonas',
    'Schmid',
    2024 - 1997,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

// creating an Object
const jonasObj = {
    firstName: 'Jonas',
    lastName: 'Schmid',
    age: 2024 - 1997,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonasObj);

// getting content of Object
console.log(jonasObj.lastName); // dot notation preferred
console.log(jonasObj['lastName']); // bracket notation when you need to compute

// use square brackets to build a key you want to compute
const nameKey = 'Name';
console.log(jonasObj['first' + nameKey]);
console.log(jonasObj['last' + nameKey]);

// handle object doesn't have the Key
// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends.')
// if(jonasObj[interestedIn]){
//     console.log(jonasObj[interestedIn]); // using the input to retrieve the output from the Object
// } else {
//     console.log('Wrong request!');
// }

// add key-value to object just by assigning them
jonasObj.location = 'Portugal';
jonasObj['twitter'] = '@hisTwitter';
console.log(jonasObj);

// Challenge
// "Jonas has 3 friends and his best friend is called Michael"
console.log(`${jonasObj.firstName} has ${jonasObj.friends.length} friends and his best friend is called ${jonasObj.friends[0]}.`);


// Object Methods
const daniel = {
    firstName: 'Daniel',
    lastName: 'Barber',
    birthYear: 1997,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // assign function expression to property
    // calcAge: function(){
    //     console.log(this)
    //     return 2037 - this.birthYear; // use this to use the don't repeat principle - not daniel.birthYear!
    // },
    //
    // myCalcAge: function(currentYear){
    //     return currentYear - this.birthYear; // access the variable directly from the object
    // }

    myCalcAge: function (currentYear) {
        this.age = currentYear - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.myCalcAge(2024)}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`;
    }
};
// access the variable
// console.log(daniel.calcAge());

console.log(daniel.age); // here it is undefined

console.log(daniel.myCalcAge(2024)); // here we first call the function and it stores it in age

// console.log(daniel['myCalcAge'](2024));

// here the stored value can get called without compute
console.log(daniel.age);
console.log(daniel.age);
console.log(daniel.age);

// Challenge
console.log(daniel.getSummary());


// Loops

// this is bad -> repeating code
// console.log('Lifting weights repetition 1 🏋🏻‍♀️');
// console.log('Lifting weights repetition 2 🏋🏻‍♀️');
// console.log('Lifting weights repetition 3 🏋🏻‍♀️');
// console.log('Lifting weights repetition 4 🏋🏻‍♀️');
// console.log('Lifting weights repetition 5 🏋🏻‍♀️');

// create a for loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋🏻‍♀️`);
}


// For Loop with Array

// basic Array
const jonasArray1 = [
    'Jonas',
    'Schmid',
    2024 - 1997,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = []; // new empty loop

for (let i = 0; i < jonasArray1.length; i++) {
    console.log(jonasArray1[i], typeof jonasArray1[i]);
    // types[i] = typeof jonasArray1[i]; // filling an array via index
    types.push(typeof jonasArray1[i]); // filling an array via push
}
console.log(types);

const years1 = [1991, 2007, 1969, 2020];
const ages1 = [];
for (let i = 0; i < years.length; i++) {
    ages1.push(2024 - years1[i]);
}
console.log(ages1);

// continue and break
// continue is exit current iteration of loop
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonasArray1.length; i++) {
    if (typeof jonasArray1[i] !== 'string') continue; // goes to next iteration if type is not a string
    console.log(jonasArray1[i], typeof jonasArray1[i]);
}


// break exits the loop completely
console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonasArray1.length; i++) {
    if (typeof jonasArray1[i] === 'number') break; // stops loop when number is found
    console.log(jonasArray1[i], typeof jonasArray1[i]);
}

// looping backwards
const jonasArray2 = [
    'Jonas',
    'Schmid',
    2024 - 1997,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// start from length - 1 and go down to = 0
for (let i = jonasArray2.length - 1; i >= 0; i--) {
    console.log(i, jonasArray2[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---- Starting exercise ${exercise}`)
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋🏻‍♀️`);
    }
}

// While Loop

// create a while loop
let rep = 0; // create counter outside while loop
while (rep <= 10){
    console.log(`Lifting weights repetition ${rep} 🏋🏻‍♀ (while)️`);
    rep++; // increment inside loop
}

// create a random dice roll
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
console.log(`You rolled a ${dice}`); // needed at the end because last dice isn't printed -> solve with do-while

do {
    dice = Math.trunc(Math.random() * 6) + 1;
    console.log(`You rolled a ${dice}`);
    if (dice === 6) console.log('Loop is done.');
} while (dice !== 6);





























