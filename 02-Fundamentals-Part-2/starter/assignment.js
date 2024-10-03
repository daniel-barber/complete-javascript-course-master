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
console.log(populations.length===4);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

// Array Operations
const neighbors = ['NotGermany', 'France', 'Italy', 'Austria'];
neighbors.push('Utopia');
neighbors.pop();
if(!neighbors.includes('Germany')) console.log('Probably not a central european country :D');
neighbors[neighbors.indexOf('Italy')] = 'ItalianStallion';
console.log(neighbors);





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






