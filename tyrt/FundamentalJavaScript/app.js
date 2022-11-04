/* let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / (johnHeight * johnHeight);

let highestBMI = markBMI > johnBMI;


console.log(johnBMI, markBMI, highestBMI);
 */


/* const myName = 'Marco'
const lastName = 'Jankovic'
const birthYear = 1994;
const presentYear = 2022;

// template literals //

/* const template =
    `
I'm ${myName} ${lastName} i currenly ${presentYear - birthYear}
`

console.log(template); */


/*
const age = 19;
const OldEnough = age >= 18;


if (OldEnough) {
    console.log('Sarah can start driving license');
} else {
    (!OldEnough)
    console.log('Shes not old enough to start driving license')
}



const tage = 12;

if (tage >= 18) {
    console.log('Sarah can start driving license');
} else {
    (tage <= 17)
    console.log('Shes not old enough to start driving license')
} */



/*
const birthYear = 1994;

if (birthYear <= 2000) {
    let century = 20;
} else {
    let century = 21;
}

console.log(century) */


/* // to access inside block we move them outside and can declare and empty century variable //

const birthYear = 1994;
let century; // LIKE THIS

if (birthYear <= 2000) {
    century = 20;  // THEN WE REMOVE THE VARIABLE & CHANGE THE VALUE
} else {
    century = 21; // THEN WE REMOVE THE VARIABLE & CHANGE THE VALUE
}
console.log(century);

 */

/*

let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / (johnHeight * johnHeight);

let highestBMI = markBMI > johnBMI;


if (highestBMI) {
    console.log(`Mark's ${markBMI} BMI is higher than John's ${johnBMI} BMI`)
} else {
    console.log(`John's ${johnBMI} BMI is higher than Mark's ${markBMI} BMI`)
} */


// type conversion //
/*
const inputYear = '1991';
console.log(Number(inputYear));

console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23); */


/*
let n = '1' + 1;

n = n - 1;
console.log(n); // 10
 */


// falsy has 5 values:  0 NaN undefined '' null
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('hello'));
console.log(Boolean(NaN));
console.log(Boolean({}));
console.log(Boolean([])); */

/* const money = 0;

if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job!');  // <-----
}


let height;

if (height) {
    console.log('Yay! Height is defined');
} else {
    console.log('Height is undefined');  // <-----
} */


/* const age = 18;
23
if (age === 18)
    console.log('Adult!') */


/* const favorite = Number(prompt("whats ur number?"));

if (favorite === 23) {
    console.log(favorite);
} else if (favorite === 7) {
    console.log('7 is good number');
} else {
    console.log('great');
/* } */

/* const hasDriverLicens = true;
const hasGoodVision = true;
const age = 20;


if (hasDriverLicens && !hasGoodVision) {
    console.log('enjoy driving');
} else {
    console.log('dont drive');
}


if (hasDriverLicens || !hasGoodVision) {
    console.log('enjoy driving');
} else {
    console.log('dont drive');
}
 */


/* const Dolphins = (96 + 108 + 89) / 3; // 97.6
const Coalas = (88 + 91 + 110) / 3; // 96.3
console.log(Dolphins, Coalas);

if (Dolphins > Coalas) {
    console.log('Dolphins win the thropy');
} else if (Coalas > Dolphins) {
    console.log('Coalas win the thropy');
} else {
    console.log('Both wins the thropy, due to draw');
}
 */
/*
const Dolphins = (97 + 112 + 101) / 3; // 97.6
const Coalas = (109 + 95 + 123) / 3; // 96.3
console.log(Dolphins, Coalas);

if (Dolphins > Coalas && Dolphins >= 100) {
    console.log('Dolphins win the thropy');
} else if (Coalas > Dolphins && Coalas >= 100) {
    console.log('Coalas win the thropy');
} else {
    console.log('Both wins the thropy, due to draw');
}

 */


/* const day = 'monday';

switch (day) {

    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;

    case 'tuesday':
        console.log('prepare theory videos');
        break;

    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;

    case 'friday':
        console.log('record videos');
        break;

    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
} */

/*
const age = 15;

// age >= 17 ? console.log('I like to drink water') : console.log('I like to drink wine');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);


let drink2;

if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2); */

/* const age = 19;

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`) */

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * .20;

// console.log(`your bill is ${bill} and your tip is ${tip} and your total is ${bill + tip}`);