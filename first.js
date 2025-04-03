// // console.log(25 + 40);
// // console.log("hello I live in gwalior");
// // let number = Math.trunc(Math.random() * 10);
// // console.log(number);

// console.log(4 + 6);

// let number = 10;
// let y = 20;
// let z = 6; //not descriptive enough

// //convention  --- can break it
// let firstName = "Sachin";

// let presidentOfIndia = "Droupadi murmu";

// let firstname = "Sachin"; // small case
// let first_Name = "Sachin";
// let FirstName = "Sachin"; // pascal case or upper camal case
// let Firstname = "Sachin";
// let FIRSTNAME = "Sachin"; // constant
// let lastName = "Tendulkar"; // camal case

// let PI = 3.14;
// let MAXLIMIT = 50;
// let AVAGADRONUMBER =
//   // let prime_minister_of_india ="Narendra Modi"   /// snake case

// // console.log(x + y);
// // console.log(x + z);

// // let 99acers = "website for property";

// let $price = 59;
// console.log($price);

// let _name = "rahul";

// let mahindra&mahindra = "tractor" // invalid

// let presidentOfIndia = "Droupadi murmu"; // assignment operator

// console.log(presidentOfIndia);

// let isShopOpen = true;

// console.log(isShopOpen);

// 01/04/2025
// How to declare variable

// let --- temporary variable or subject value change  , const , var ,

// let const and var are to be used only once while decleration

// const numberOfCenturyOfSachin = 100; // assingment of value to variable
// numberOfCenturyOfSachin = 101; // reassignment of value to existing variable
//variable declered with const can't be reassigned

// let centuriesOfVirat = 83;
// centuriesOfVirat = 84;

// console.log(numberOfCenturyOfSachin);
// console.log(centuriesOfVirat);

//var

// var heightOfMangoTree = 12;

// heightOfMangoTree = 14;
// console.log(heightOfMangoTree);

// console.log(window);

// weight = 140; // if we do not declare variable with let, const , var then it is by default var

// console.log(weight);

// console.log(window);

// let streetName;
// const cityName = "Gwalior";
// var countryName;

// console.log(typeof streetName);

//Data Type

// cityName = "gwalior";

// streetName = "MORAR road";
// console.log(typeof streetName);

// console.log(typeof centuriesOfVirat);

// console.log(typeof isShopOpen);

// isLightOn = false;
// console.log(typeof isLightOn);

// console.log(centuriesOfVirat);

// string decleration rule

// countryName = "India";
// const middleName = "Ramesh";
// const village = `Tedule`;

// let pappu = `pappu cant't daNCE SALA"PAPPU CAN'T Dance sala... "Mkg" `;

// const emptyValue = null; // intentional absence of value
// console.log(emptyValue); //  value - null
// console.log(typeof emptyValue); // type - object
// console.log(typeof null); // type - object

// let cost;

// console.log(cost); // value - undefined

// console.log(typeof cost); //type - undefined

// console.log(Number.MAX_SAFE_INTEGER);

// BigInt

// const num1 = 23n;
// console.log(typeof num1); // Bigint

// const num2 = 2n; // if no n is applied we can't multiply
//only operationm of bigInt is possible

// console.log(num1 * num2);

//coment and multiline comment

// first type
//  ctrl + /
/* Gwalior is clean city 
and this is not a joke  */

// console.log(typeof 23);
// console.log("hello");
// console.log("hello");

// 02/04/2025
// operators in js

//  = //assignment operator   -- ham value de rahe hai

// ==  // loose equality  only value check
//  === // strict equality  value check , data type check

// console.log(centuriesOfVirat === numberOfCenturyOfSachin);

// console.log(20 === "20");
// console.log(20 == "21");

// difference check
// console.log(20 != "20"); // loose difference - only value check
// console.log(20 !== "200"); // strong difference - value and data type check

// console.log(undefined == null);
// console.log(undefined === null);

// console.log(4 > 5); // false
// console.log(4 < 5); // true
// console.log(5 <= 5); // true

// console.log(centuriesOfVirat, numberOfCenturyOfSachin);

// if (centuriesOfVirat < numberOfCenturyOfSachin) {
//   console.log("virat is great");
// } else {
//   console.log("sachin is great");
// }

// logical operator
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log(!false);
// console.log(!true);

// Addition operator

// let x = 10;
// x += 4; // x = x + 4;
// console.log(x);

// x -= 2; // x = x - 2;
// console.log(x);

// x *= 5; // x = x * 5;
// console.log(x);

// x /= 2; // x = x / 2;
// console.log(x);

// x %= 4; // x = x % 3;
// console.log(x);

//03/04/2025

// string operator  +  concatination

const presidentFirstName = "Donald";

const presidentLastName = "Trump";

console.log(presidentFirstName + "        " + presidentLastName);

// unary operator
console.log(+"10"); // convert string into number
console.log(typeof +"10"); // convert string into number

console.log(+true); // 1
console.log(+false); // 0
console.log(typeof +true); //1  convert boolean into number 1

console.log(typeof -false); //0  convert boolean into number 0
console.log(typeof -null); // number convert null into number 0
console.log();

let y = 100;
console.log(y++); // post increament //print karega 100 lekin value 101 -> post
console.log(++y); // pre increament  // value = 102

console.log(y--); // post decreament // print = 102  // value =101
console.log(y--); // post decreament // print = 101 // value 100

console.log(--y); // pre decreament // 99
console.log(--y); // pre decreament // 98

console.log(!0); //

console.log(!1); //

// operator precedence table

let speed = 120;
let distance = 500;

let time = distance / speed;
console.log(time);

let viratAge = 36;
let sachinAge = 51;

let average = (viratAge + sachinAge) / 2;
console.log(average);

console.log(3 * 4 + 2);

// template literals
console.log(
  `we have sachin tendulkar whos age is ${sachinAge} we have virat and his age is ${viratAge}`
);
console.log(
  "we have sachin tendulkar whos age is ${sachinAge} we have virat and his age is viratAge"
); // THIS DOES NOT WORK

const GringottsWizardingBankCredit = 50000;
const shoppingExpence = 2300;
const firstName = "Harry";
const schoolName = " Hogwarts School of Witchcraft and Wizardry";

const wizard = ` My name is  ${firstName}   I study in ${schoolName}  I went for shopping flying broom it coted me  ${shoppingExpence} Now I have  ${
  GringottsWizardingBankCredit - shoppingExpence
} left in my Bank accounts`;

console.log(wizard);

//multiline string

const str = `hello how \
are you
Khana kha ke jaba ha`;
console.log(str);
