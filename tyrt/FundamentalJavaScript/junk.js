'use strict';
/*
for (let i = 1; i <= 10; i++) {
    console.log(`Lifting weights repetition ${i}`);
} */




/* const marcoArray = [
    'Marco',
    'Jankovic',
    2022 - 1994,
    'Frontend',
    ['Simon', 'Calle', 'John'],
    'Yoyo'
];

const types = [];

for (let i = 0; i <= marcoArray.length; i++) {

    console.log(marcoArray[i]);

    // types[i] = typeof marcoArray[i];

    types.push(typeof marcoArray[i]); // better approaches

}

console.log(types); */


/* const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i <= years.length; i++) {

    ages.push(2037 - years[i]);

}
console.log(ages); */


// loop backwards //
/* const marcoArray = [
    'Marco',
    'Jankovic',
    2022 - 1994,
    'Frontend',
    ['Simon', 'Calle', 'John']
];

for (let i = marcoArray.length - 1; i >= 0; i--) {
    console.log(marcoArray[i]);
}
 */


/* for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---------- starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`lifting weight repetition ${rep}`);
    }
} */


/* for (let i = 1; i <= 10; i++) {
    console.log(`Lifting weights repetition ${i}`);
}
 */

/* let i = 1;
while (i <= 10) {

    console.log(`Lifting weights repetition ${i}`);
    i++
}
 */

/* let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`you rolled a ${dice} ending loop.....`);
    }
}
 */


/* 
const calcTip = function (bill) {

    return bill <= 300 && bill >= 50 ? bill * .15 : bill * .20;

}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {

    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);
 */


