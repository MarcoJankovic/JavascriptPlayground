'use strict';

/* function processJuice(apple, pear) {

    const juice = `Juice with ${apple} apples and ${pear} pears `;
    return juice;
}

const juiceWithFruits = processJuice(2, 6);
const juiceWithNewFruits = processJuice(9, 8);
console.log(juiceWithNewFruits);



function battery(lithium, coal) {   // parametrar lithium, coal
    const builder = `You need ${lithium} lithiums and ${coal} coals to build a battery.`;  // bygg en string som skriver va du använder.

    return builder;  // retunera värdet och fångar värdet sen i en variable som heter batteryRecipe där nedan.

}

const batteryRecipe = battery(1, 8);   // argmument 1 och 8 

console.log(batteryRecipe);

 */

/* 
function machine(cpu, gpu) {
    const builder = `You need ${cpu} cpus and atleast ${gpu} gpus to build this machine!`;
    return builder;
}

const material = machine(17, 31);

console.log(material);

 */



/* // Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1994);


// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);


// arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
 */


/* const yearsUntilRetirement = birthYear => {
    const age = 2038 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));

 */
/* 
function cutFruitPieces(fruit) {
    return fruit * 4;
}



function fruitProccess(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `I press ${applePieces} apples and ${orangePieces} oranges to make juice`;
    return juice;
}

console.log(fruitProccess(2, 3));
 */


/* const pieceSelector = function (pieces) {
    return pieces * 4;
}


const buildMachine = function (cpu, gpu) {

    const cpuPieces = pieceSelector(cpu);
    const gpuPieces = pieceSelector(gpu);

    const builder = `I need ${cpuPieces} cpus and ${gpuPieces} gpus to make Machine`;

    return builder;
}

const partScrambler = buildMachine(2, 4);
console.log(partScrambler)
 */



/* const extraRedbull = function (extra) {
    return extra + 1;
}


const redbull = function (sugar, apples) {
    const extraSugar = extraRedbull(sugar);
    const extraApples = extraRedbull(apples);
    const drink = `You blend ${extraSugar} sugar and ${extraApples} apples to make redbull drink!`
    return drink;
}

const ingriedients = redbull(2, 4);
console.log(ingriedients);

 */


/* 
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    
    return `${firstName} retires in ${retirement} years`;

}
const person = yearsUntilRetirement(1994, 'Marco');
console.log(person);

 */






/* 
const average = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = average(44, 23, 71);
let scoreCoalas = average(24, 24, 19)

console.log(scoreCoalas, scoreDolphins);


const checkWinner = function (avgDolphins, avgCoalas) {

    if (avgDolphins >= 2 * avgCoalas) {
        console.log('dolphins win')
    } else if (avgCoalas >= 2 * avgDolphins) {
        console.log('coalas win')
    } else {
        console.log('noone win');
    }
}

checkWinner(scoreDolphins, scoreCoalas);
 */

