'use strict';

// Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const france = describeCountry('France', 6, 'Paris');
const germany = describeCountry('Germany', 12, 'Berlin');
const england = describeCountry('England', 20, 'London');

console.log(france, germany, england);

// function declaration vs expression
const worldPopulation = 7900;

function percentageOfWorld1(population) {
    return 100 / worldPopulation * population;
}

const popChina = percentageOfWorld1(1441);
const popSwitzerland = percentageOfWorld1(9);
const popFrance = percentageOfWorld1(14);

console.log(popChina, popSwitzerland, popFrance);

const percentageOfWorld2 = function (population) {
    return 100 / worldPopulation * population;
}
console.log(percentageOfWorld2(1441), percentageOfWorld2(9), percentageOfWorld2(14));


// Arrow function =>
const percentageOfWorld3 = population => 100 / worldPopulation * population;
console.log(percentageOfWorld3(69));

// function calling function
function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;
}

console.log(describePopulation('England', 12));

// Arrays
const populations = [3, 44, 69, 420];
const countries = ['England', 'France', 'Portugal', 'Spain'];
console.log(populations.length === 4);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

// Array Operations
const neighbors = ['NotGermany', 'France', 'Italy', 'Austria'];
neighbors.push('Utopia');
neighbors.pop();
if (!neighbors.includes('Germany')) console.log('Probably not a central european country :D');
neighbors[neighbors.indexOf('Italy')] = 'ItalianStallion';
console.log(neighbors);

// Objects
const myCountry = {
    country: 'Switzerland',
    capital: 'Bern',
    language: 'German',
    population: 9,
    neighbors: ['Germany', 'Italy', 'France', 'Austria'],
    // Object Method
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.length} neighboring countries and a capital called ${this.capital}.`);
    },
    checkIsland: function () {
        // this.isIsland = this.neighbors.length > 0;
        this.isIsland = !Boolean(this.neighbors.length);
    }
};
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`);
myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);

// Call the Object Method
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

// Loops
for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
}

// Loop Array
const populations1 = [3, 44, 69, 420];
const percentages2 = [];
for (let i = 0; i < populations1.length; i++) {
    percentages2.push(percentageOfWorld1(populations1[i]));
}
console.log('percentages2: ', percentages2);

// Looping backwards
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i <= listOfNeighbours.length - 1; i++) { // needs the -1 because otherwise out of bounds
    console.log(`--- List Number ${i} ---`);
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
}

// while loop
const populations2 = [3, 44, 69, 420];
const percentages3 = [];
let counter = 0;
while (counter < populations2.length) {
    percentages3.push(percentageOfWorld3(populations2[counter]));
    counter++; // don't forget ti increment counter
}
console.log('percentages3: ', percentages3);


// Challenge 1
/* Write your code below. Good luck! 🙂 */

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (2 * avgKoalas)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);


// Challenge 2
/* Write your code below. Good luck! 🙂 */

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else return bill * 0.20;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[tips.length - 1]];


// Challenge 3
/* Write your code below. Good luck! 🙂 */

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.bmi = this.mass / (this.height * this.height);
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.bmi = this.mass / (this.height * this.height);
    }
}

console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is ${mark.calcBMI() > john.calcBMI() ? `higher` : `lower`} than ${john.fullName}'s (${john.bmi})!`);


// Challenge 4

const calcTip1 = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */

const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips1 = [];
const totals1 = [];

for (let i = 0; i < bills1.length; i++) {
    tips1.push(calcTip1(bills1[i]));
    totals1.push(bills1[i] + tips1[i]);
}

const calcAverage1 = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage1(totals1));
console.log(calcAverage1(tips1));










