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

if (friends.includes('Steven')){
    console.log('You have a friend called Steven');
}











