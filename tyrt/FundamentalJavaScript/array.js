/* const array = ['test', 'blad', 'tad'];
const newArray = ['lol', 22, 'jajaja', array, 500 - 100];

console.log(newArray, newArray.length);
 */



/* const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1994, 1993, 1997, 2004, 2005];

const cAge = calcAge(years[2]);
console.log(cAge);
 */



/* 
const friends = ['Marco', 'Kim', 'Simon', 'Robban'];

friends.push('Sandro'); // adds to the end of the array;

friends.unshift('Elias'); // adds to the start of the array;

friends.pop(); // removes the last element in the array;

friends.shift(); // removes the first element in the array;

console.log(friends);

console.log(friends.indexOf('Robban')); // checks what the index of the element is, in this case 3 since we start from 0  (0,1,2,3)

console.log(friends.includes('Marco')); // kollar om Marco finns med i array, ger boolean värde av true om den finns.


if (friends.includes('Marco')) {
    friends.push('Jankovic');
    console.log(friends);
} else {
    console.log('Hellyeah bruddah!')
} */





/* const calcTip = function (bill) {

    return bill <= 300 && bill >= 50 ? bill * .15 : bill * .20;

}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(totals);
 */




/* const jonasArray = ['Jonas', 'Svensson', 2037 - 1994, 'teacher', ['Michael', 'Peter', 'Steven']];
 */
/* const jonas = {

    firstName: 'Marco',
    lastName: 'Jankovic',
    age: 2022 - 1994,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven']

} */

/* console.log(jonas.lastName);

console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]); */


/* const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {

    console.log(jonas[interestedIn]);

} else {
    console.log('does not exist');
} */

/* 
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasBassman';
/*  */


/* 

const jonas = {

    firstName: 'Marco',
    lastName: 'Jankovic',
    age: 2022 - 1994,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven']

}

const getFriend = (`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`);

console.log(getFriend);

 */




const jonas = {

    firstName: 'Marco',
    lastName: 'Jankovic',
    birthYear: 1994,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,
    /* 
          calcAge: function (birthYear) {
      
              return 2022 - birthYear;
          } 
    
        
            calcAge: function () {
        
                return 2022 - this.birthYear;
            }  */

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is ${this.calcAge()} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`
    }
};

console.log(jonas.calcAge());
console.log(jonas.getSummary());



// challange
// "Jonas is a 46-years oldteacher and he has a/no drivers license."





