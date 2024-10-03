const country = "Switzerland";
const continent = "Europe";
let population = 8_000_000;
const isIsland = false;
let language;
const nullVar = null;

console.log(country, continent, population, isIsland, language);
console.log(typeof country, typeof continent, typeof population, typeof isIsland, typeof language, typeof nullVar);

language = "Swiss German";

// If your country split in half, and each half would contain half the population, then how many people would live in each half?
console.log(population / 2);

// Increase the population of your country by 1 and log the result to the console.
population++;
console.log(population);

// Finland has a population of 6 million. Does your country have more people than Finland?
console.log(population > 6_000_000);

// The average population of a country is 33 million people. Does you country have less people than the average country?
console.log(population < 33_000_000);

// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
const description = country + " is in " + continent + " and its " + population + " people speak " + language + ".";
console.log(description);
const descriptionNew = `${country} is in ${continent} and its ${population} people speak ${language}.`;
console.log(descriptionNew);

// If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).
const populationAverage = 33_000_000;
if (population < populationAverage) {
    console.log(`${country}'s population is ${populationAverage - population} below average.`);
} else {
    console.log(`${country}'s population is ${population - populationAverage} above average.`);
}

// Predict the result of these 5 operations without executing them
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

// Equality Operators
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border')
// } else console.log('No borders');

// Logical Operators
if (language === "English" && population < 50_000_000 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else console.log(`${country} does not meet your criteria :(`);

// Switch
const newLanguage = 'chinese';
switch (newLanguage) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

// Conditional (Ternary) Operator
console.log(`Portugal's population is ${population > 33_000_000 ? 'above' : 'below'} average`);


// Challenge 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const calculateBMI = mass => height => mass / height ** 2;

const BMIMark = calculateBMI(massMark)(heightMark);
const BMIJohn = calculateBMI(massJohn)(heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

// Challenge 2
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// Challenge 3
/* Write your code below. Good luck! 🙂 */
const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy");
}
if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy");
} else console.log('No one wins the trophy');

// Challenge 4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);







