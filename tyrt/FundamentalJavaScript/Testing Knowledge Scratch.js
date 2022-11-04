/* // Return Value With Arrow Function
let firstFunction = (a,b) => {
    
    return a - b;

} 
console.log(firstFunction(10,1));
/////////////////////////////////////////////////////////////////




// Build Pyrmamide Without Function //
for (let build = "#"; build.length < 10; build += "#") {
    console.log(build);
}
 ////////////////////////////////////////////////////////////////




// Build Pyrmamide With Arrow Function //
let buildFunction = () => {
    for (let build = "#"; build.length < 10; build += "#") 
        console.log(build);
}

buildFunction();
//////////////////////////////////////////////////////////////////



// Build Pyrmamide With Basic Function //
let testFunction = function () {
    for (let build = "#"; build.length < 10; build += "#") 
    console.log(build);
}
testFunction();
//////////////////////////////////////////////////////////////////



// Testing Calculations //
const naje = function (base, expo) {
    
    let result = 5;

    for (let count = 0; count < expo; count++) {
        result += base; 
    }
    return result; 
}
console.log(naje(20,3));
//////////////////////////////////////////////////////////////////


// Testing Calculations //
function power (base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count ++){
        result *= base;
    }
    return result;
}
console.log(power(4));
//////////////////////////////////////////////////////////////////


// MANIPULATE PARAMETER AND GIVE IT AN ARGUMENT WITH NEW VALUE INSTEAD 
function power (base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count ++){
        result *= base;
    }
    return result;
}
console.log(power(4,4)); // 2 becomes 4

//////////////////////////////////////////////////////////////////

 */

 // FARM / COW / CHICKENS ///
/*  function printFarmInventory (cows, chickens) {

     let cowString = String(cows);

     while (cowString.length < 3) {
        cowString = "0" + cowString;
     }
     console.log(`${cowString} Cows`);

     let chickenString = String(chickens)

     while (chickenString.length <3) {
        chickenString = "0" + chickenString;
     }
     console.log(`${chickenString} Chickens`)
 }
 printFarmInventory(7,11); */



/*  function PrintAnimals (wolfs, foxes) {

     let wolfsString = String(wolfs);

    while (wolfsString.length < 3) {
        wolfsString = "0" + wolfsString;
    }
    console.log(`${wolfsString} Wolfs`);

    let foxString = String(foxes);

    while (foxString.length < 3) {
    foxString = "0" + foxString;
    }
    console.log(`${foxString} Foxes`);
 }
 PrintAnimals(4,8);


 */


/*  function printZeroPaddedWithLabel(number, label) {
     let numberString = String(number);
     while (numberString.length < 3) {
         numberString = "0" + numberString;
     }
     console.log(`${numberString} ${label}`);
 }

 function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens")
    printZeroPaddedWithLabel(pigs, "Pigs");
 }

 printFarmInventory(7, 11, 3);
 */




/* function printLabel (number, type) {

    numberString = String(number);

    while (numberString.length < 3){
        
        numberString = "0" + numberString;   
    }
    console.log(`${numberString} ${type}`);
}

function animalSelector (monkey, pig, dog) {
    printLabel(monkey, "Monkeys");
    printLabel(pig, "pigs");
    printLabel(dog, "dogs");
}
animalSelector(3,6,1);
  */


/* 
function test (number, label){

    let numberString = String(number);

    while (numberString.length <3){
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);   
}

function animalis (cow, dog, cat) {
   test(cow, "Cows");
   test(dog, "Dogs");
   test(cat, "Cats");
}

animalis(3, 5, 6); */




/* 
function zeroPad(number, width){
    let string = String(number);

    while(string.length < width){
        string = "0" + string;
    }
    return string;
}

function printAnimals (cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`)
    console.log(`${zeroPad(chickens, 3)} Chickens`)
    console.log(`${zeroPad(pigs, 3)} Pigs`)
}
printAnimals(61, 33, 13)




 */





/*  function min(a, b) {

     console.log(Math.min(a,b))
 }

 min(10,42);


 function min(a,b){
     var result = b;
     if (a < b)
        result = a;

     return result;
}
 
console.log(min(44, 10)); */

/* 
function isEven(num) {
    if (num == 0)
      return true;
    if (num == 1)
      return false;
    if (num < 0)
      return "??";
    else return isEven(num - 2);
  }

  console.log(isEven()); */







  for (let count = "#"; count.length < 10; count += "#") {
      console.log(count);
  }


  function printFarmAnimals(number, width) {

      let string = String(number);

      while (string.length < width){
        string = "0" + string;  
      }
      return string;
  }

  function printAnimalsAmount(cows, chickens, dogs) {

    console.log(`${printFarmAnimals(cows, 3)} Cows`)
    console.log(`${printFarmAnimals(chickens,3)} Chickens`)
    console.log(`${printFarmAnimals(dogs,3)} Dogs`)
  }
  printAnimalsAmount(5,3,6);





  function arrayName(){

      let namn = new Array();

      namn[0] = "Magnus";
      namn[1] = "Kim";
      namn[2] = "Ted";
      namn[3] = "Bob";
      namn[4] = "Adam";

      for (let i = 0; i < namn.lenght; i++)

      console.log(namn[i]);

}

arrayName();



 