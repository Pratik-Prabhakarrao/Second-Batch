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

// const presidentFirstName = "Donald";

// const presidentLastName = "Trump";

// console.log(presidentFirstName + "        " + presidentLastName);

// // unary operator
// console.log(+"10"); // convert string into number
// console.log(typeof +"10"); // convert string into number

// console.log(+true); // 1
// console.log(+false); // 0
// console.log(typeof +true); //1  convert boolean into number 1

// console.log(typeof -false); //0  convert boolean into number 0
// console.log(typeof -null); // number convert null into number 0
// console.log();

// let y = 100;
// console.log(y++); // post increament //print karega 100 lekin value 101 -> post
// console.log(++y); // pre increament  // value = 102

// console.log(y--); // post decreament // print = 102  // value =101
// console.log(y--); // post decreament // print = 101 // value 100

// console.log(--y); // pre decreament // 99
// console.log(--y); // pre decreament // 98

// console.log(!0); //

// console.log(!1); //

// // operator precedence table

// let speed = 120;
// let distance = 500;

// let time = distance / speed;
// console.log(time);

// let viratAge = 36;
// let sachinAge = 51;

// let average = (viratAge + sachinAge) / 2;
// console.log(average);

// console.log(3 * 4 + 2);

// // template literals
// console.log(
//   `we have sachin tendulkar whos age is ${sachinAge} we have virat and his age is ${viratAge}`
// );
// console.log(
//   "we have sachin tendulkar whos age is ${sachinAge} we have virat and his age is viratAge"
// ); // THIS DOES NOT WORK

// const GringottsWizardingBankCredit = 50000;
// const shoppingExpence = 2300;
// const firstName = "Harry";
// const schoolName = " Hogwarts School of Witchcraft and Wizardry";

// const wizard = ` My name is  ${firstName}   I study in ${schoolName}  I went for shopping flying broom it coted me  ${shoppingExpence} Now I have  ${
//   GringottsWizardingBankCredit - shoppingExpence
// } left in my Bank accounts`;

// console.log(wizard);

// //multiline string

// ("My name is harry Potter \n\
//   I studty in Hogwarts School of Witchcraft and Wizardry \n\
//    and my address is house \n\
// at 4 Privet Drive, Little Whinging, Surrey ");

// const str = `hello how
// are you
// Khana kha ke jaba ha`;
// console.log(str);

// 04/04/2025
//Type conversion and type coercion
// type conversion -- is done by developer

// let n = "35";
// console.log(typeof n);
// let stringN = Number(n); // this does not mutate or change the original value
// console.log(stringN, typeof stringN);
// console.log(typeof n);

// let no = 200;
// console.log(typeof no);
// let stringN0 = String(n); // this does not mutate or change the original value
// console.log(stringN0, typeof stringN0);
// console.log(typeof no);

// let villageName = "Bhind";

// let villageNameNumber = Number(villageName);

// console.log(villageNameNumber);

// console.log(typeof NaN); // type - -NUMBER EVEN THOUGH IT SAY NOT A NUMBER THAT MEANS IT IS AN INVALID NUMBER

// // number to boolean
// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(5)); // false
// console.log(Boolean(-5)); // false

// // Truthy and falsy value
// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false
// console.log(Boolean(" ")); //   false
// console.log(Boolean(undefined)); //   false
// console.log(Boolean(null)); //   false
// console.log(Boolean(NaN)); //   false
// console.log(Boolean(false)); //   false

// // Truthy value
// console.log(Boolean("a")); //   true
// console.log(Boolean(-2)); //   true
// console.log(Boolean(9)); //   true
// console.log(Boolean("#")); //   true

// // type coercion

// let adderess = "Adarsh colony , Gole ka mandir" + 474005; // this is same as "Adarsh colony , Gole ka mandir" + "474005"
// console.log(adderess);

// console.log("100" + "5");
// console.log("100" - "5"); // type coercion from string to number
// console.log("100" / "5");
// console.log("100" * "5");

// if ("") {
//   console.log("give me parle G");
// } else {
//   console.log("it's ok I am going to other shop");
// }

// 07/04/2025
// Conditional control structure /

// simple if

// if (" ") {
//   // this will convert to true and will execute the code
//   // blok of code
//   console.log("this is from the block of code");
// }

// if (undefined) {
//   //this will convert to false and will not execute the code
//   // blok of code
//   console.log("this is from the block of code");
// }

// if..else
//  synatx
// if (condition) {
//   // if condition is true this block will run
// } else {
//   // if condition is true this block will run
// }

// const kapilDevWickt = 2500;
// const rAshwin = 650;

// console.log(kapilDevWickt < rAshwin); // true

// if (kapilDevWickt > rAshwin) {
//   console.log("Kapil Dev is a great Bowler");
// } else {
//   console.log("R. Ashwin is a great Bowler");
// }

// if else if else if else
// <35 - fail  35-65 - C gread 65-75- B Gread >75-- A grade

// const marks = Number(prompt("Enter the marks of student to chek gread"));
// console.log(typeof marks);

// if (marks < 35) {
//   console.log(`Student is fail becoz ${marks} is below 35`);
// } else if (marks >= 35 && marks <= 65) {
//   console.log(`Student got C Gread ${marks} is between 35 to 65`);
// } else if (marks > 65 && marks <= 75) {
//   console.log(`Student got B Gread ${marks} is between 65 to 75`);
// } else {
//   console.log(`Student got A Gread ${marks} is above 75`);
// }

// nested if else

// console.log(81 % 2);

// let number = Number(prompt("Enter a number to chek if it is odd or even"));

// if (number > 0) {
//   if (number % 2 === 0) {
//     if (number < 10) {
//       console.log(`the ${number} is less than 10 and it is even`);
//     } else {
//       console.log(`the ${number} is grater than 10 and it is even`);
//     }
//   } else {
//     console.log(`the ${number} is odd`);
//   }
// } else {
//   console.log("the number enterd is less than zero hence cna't be checked ");
// }

//09/04/2025

// conditional control structure continue

// const month = Number(prompt("enter a number of month to chek it's name"));

// switch (month) {
//   case 1:
//     console.log("This is January");
//     break;
//   case 1 + 1:
//     console.log("This is february");
//     break;
//   case 3:
//     console.log("This is March");
//     break;
//   case 4:
//     console.log("This is April");
//     break;
//   case 5:
//     console.log("This is May");
//     break;
//   case 6:
//     console.log("This is June");
//     break;
//   case 7:
//     console.log("This is July");
//     break;
//   case 8:
//     console.log("This is August");
//     break;
//   case 9:
//     console.log("This is September");
//     break;
//   case 10:
//     console.log("This is October");
//     break;
//   case 11:
//     console.log("This is November");
//     break;
//   case 12:
//     console.log("This is December");
//     break;
//   default:
//     console.log("This is not any month");
// }

// if (month === 1) {
//   console.log("This is January");
// } else if (month === 2) {
//   console.log("This is february");
// } else if (month === 3) {
//   console.log("This is March");
// } else if (month === 4) {
//   console.log("This is April");
// } else if (month === 5) {
//   console.log("This is May");
// } else if (month === 6) {
//   console.log("This is June");
// } else if (month === 7) {
//   console.log("This is july");
// } else {
//   console.log(
//     "the month is grATER THAN 7 and I don't have information about it "
//   );
// }

// // Statement vs expression
// console.log(1 + 1); // expression

// //Statement
// function add(a, b) {
//   addition = a + b;
//   return addition;
// }

// console.log(add(3, 6));

// const odiVitatcentury = 51;
// const testVitatcentury = 30;
// const sacinOdiCentury = 49;
// console.log(
//   `virat has ${odiVitatcentury} century in ODI and ${testVitatcentury} century in test and it's total is ${
//     odiVitatcentury + testVitatcentury
//   } `
// );

// // following code will not run as it expects expession
// // console.log(
// //   `virat has ${odiVitatcentury} century in ODI and ${testVitatcentury} century in test and it's total is ${
// //     odiVitatcentury + testVitatcentury
// //   }  and schin has ${sacinOdiCentury} ${if(odiVitatcentury>sacinOdiCentury){
// //     console.log("virat is graat");

// //   }}
// // );

// console.log(
//   `virat has ${odiVitatcentury} century in ODI and ${testVitatcentury} century in test and it's total is ${
//     odiVitatcentury + testVitatcentury
//   }  and schin has ${sacinOdiCentury} ${
//     odiVitatcentury > sacinOdiCentury ? "virat is great" : "sachin is great"
//   }`
// );

// // Ternary operator/ statement

// // if (odiVitatcentury > sacinOdiCentury) {
// //   console.log("virat is great");
// // } else {
// //   console.log("Sachin is great");
// // }

// odiVitatcentury < sacinOdiCentury
//   ? console.log("virat is not great") // this part will print if condition is true
//   : console.log("Sachin is  very very grat"); // this will print if condition is false

// 10/04/2025
// STRICT MODDE

// "use strict";
// height = 23;
// console.log(height);

// const else = "ABC"

// const private = "Aman";
// console.log(private);

// const interface = "marut";
// console.log(interface); //Uncaught SyntaxError: Unexpected strict mode reserved word (at first.js:551:7)

// let isAccountHolder = false;
// const isMemberOFClub = true;
// if (isMemberOFClub) isAccountholder = true;
// if (isAccountHolder) console.log("congrats");

// function checkThis() {
//   console.log(this);
// }

// console.log(checkThis()); // this is undefined in strict mode
// console.log(checkThis()); // this points to window object in sloppy mode

// 12/04/2025
// Function in Js

// const playerName = "Rojer Federer";

// console.log(playerName);

// function decleration
// this keyword points to undefined in strict mode and points to window object in sloppy mode
// function print() {
//   const print = "Printing T shirt";
//   console.log(print); // this will run
//   return print; // we have to return something from function to get something out of function
// }

// const runFunction = print(); // Function calling/ Function invoking/ Function running
// // storing a invoked function in variable is called as value capturing

// console.log(runFunction);

// ////////

// // calling function before initilisation
// console.log(washingMachin("SurfExcel", 25, 5)); //function hoisting

// function washingMachin(washingliquid, water, cloths) {
//   // parameter of function
//   if (washingliquid === "tide") {
//     console.log("Barish me white ho to tide ho");
//   } else if (washingliquid === "nirma") {
//     console.log("Dudh si safedi Nirma se aaye");
//   } else if (washingliquid === "fena") {
//     console.log("Fena hi lena ");
//   } else {
//     console.log("Sadharan ditergent Powder");
//   }

//   washingProcess = `we have total ${cloths} cloths and we have ${water} liter of water and we have ${washingliquid}`;
//   return washingProcess;
// }

// console.log(washingMachin("fena", 25, 5)); // end user  // we give argument in place of parameter And order of parameter should match with the arguments
// console.log(washingMachin(25, 5, "tide"));

// // console.log(dhulaiMachin("Ghadi", 50, 10)); // Error : finction expression can not be called befor initialisation

// let dhulaiMachin = function (washingliquid, water, cloths) {
//   // parameter of function
//   if (washingliquid === "tide") {
//     console.log("Barish me white ho to tide ho");
//   } else if (washingliquid === "nirma") {
//     console.log("Barish me white ho to tide ho");
//   } else if (washingliquid === "fena") {
//     console.log("Fena hi lena ");
//   } else {
//     console.log("Sadharan ditergent Powder");
//   }

//   washingProcess = `we have total ${cloths} cloths and we have ${water} liter of water and we have ${washingliquid}`;
//   return washingProcess;
// };

// console.log(dhulaiMachin("Ghadi", 50, 10)); // Error : finction expression can not be called befor initialisation

// // Arrow function ES2015

// // const addition = (a, b) => {
// //   return [a + b, a * b]; // if there is multiple things to return then we return all things in array i.e., []
// // };

// const addition = (a, b) => a + b;
// const square = (a) => a * a; // if there is single input we can eliminate () and if output is in single line we can eliminate {} and retun
// // arrow function does not have it's own This keyword
// // arrow function is not even hoisted
// console.log(addition(88, 12));

// console.log(square(25));

// const chekThis = () => {
//   console.log(this); // arrow function does not have this keyword of it's own it always point to it's lexical paernt or grandparent or ultimately to the window object
// };

// console.log(chekThis());
// 8;

// // 14/04/2025
// // variable Hoisting -- Jhanda behaviour

// console.log(car1); // var hoist but not value only variable  // undefined
// console.log(car2); // undefined

// var car1 = "Kia sonet"; // variable declaration and we are initialising it's value
// var car2; // only declering variable not initialising

// // console.log(car3); // let does not Hoist
// // let car3 = "Tata Punch";

// // console.log(car4);  // variable with const do not hoist
// // const car4 = "Mercedes GLS";

// // programming for calculator

// // decleration

// function calculator(num1, num2) {
//   let addition = num1 + num2;
//   let subtraction = num1 - num2;
//   let multiplication = num1 * num2;
//   let division = num1 / num2;
//   let squareOfFirstNo = num1 * num1;
//   let squareOfSecondNo = num2 * num2;

//   return [
//     addition,
//     subtraction,
//     multiplication,
//     division,
//     squareOfFirstNo,
//     squareOfSecondNo,
//   ];
// }

// const num1 = Number(prompt("Enter first number"));
// const num2 = Number(prompt("Enter second number"));

// const doCalculation = calculator(num1, num2); // end user  // real argument
// console.log(doCalculation);

// Array

// const cricketTeam = `MSD` ,'virat ,"Rohit Sharma";// we can't store multiple value in single variale

// we need a data structure to store multiple values  -- Array

// const cricketTeam = [
//   // array literaal
//   "MSD",
//   "Virat",
//   "Rohit",
//   "Rishab pant",
//   "Hardik Pandya",
//   "Nirmal",
//   "Aman",
//   "Marut",
// ];

// console.log(cricketTeam);
// console.log(typeof cricketTeam); // object

// // second way to create array

// const team = new Array("Yuvraj", "Abhishek"); // Array constructor

// console.log(team);

// // 16/04/2025
// // Array operation

// console.log(cricketTeam[0]);
// console.log(cricketTeam[2]);
// console.log(cricketTeam[5]);

// console.log(cricketTeam.length);

// // Modify an array
// cricketTeam[0] = "Riky ponting";
// console.log(cricketTeam);

// // cricketTeam = ["Riky ponting", "Steve smith", "Shane watson", "Glane maxwell"]; // we can't reassign the complet array we can just change the individual element of the array

// // console.log(cricketTeam);

// // push
// cricketTeam[8] = "sandeep Sharma";
// console.log(cricketTeam);

// cricketTeam.push(5);
// console.log(cricketTeam);

// // unshift
// cricketTeam.unshift(true);
// cricketTeam.unshift([3, true, "Sunil chetri"]);
// console.log(cricketTeam);

// // accessing the nested element of array

// console.log(cricketTeam[0][2]);

// // pop
// console.log(cricketTeam.pop()); // removes the last element and return the poped element
// console.log(cricketTeam);

// // shift
// console.log(cricketTeam.shift());

// console.log(cricketTeam);

// //concat

// const combinedTeam = cricketTeam.concat(team);

// console.log(combinedTeam);

// // Join

// console.log(cricketTeam.join("$"));

// //slice

// const playingEleven = cricketTeam.slice(); // if no argument is pssed complete array is copied
// const playingEleven1 = cricketTeam.slice(2); // if only start index value is given then new array returs the value from start index to end
// const playingEleven2 = cricketTeam.slice(2, 6); // if  start index and end index value is given then new array returs the value from start index to end index-1

// console.log(playingEleven);
// console.log(playingEleven1);
// console.log(cricketTeam);

// console.log(playingEleven2);

// //splice

// cricketTeam.splice(2, 1);
// console.log(cricketTeam);

// cricketTeam.splice(
//   2,
//   3,
//   "Danial victory",
//   "Michel stark",
//   "dale stane",
//   "jaspreet bumrah"
// );
// console.log(cricketTeam);

// // indexOf

// console.log(cricketTeam.indexOf("Danial victory"));

// //include

// console.log(cricketTeam.includes("dale stane"));
// console.log(cricketTeam.includes("Wasim Akram"));

////
//17/04/2025
// Object

// Problem with array

const viratKohli = [
  "Virat",
  "Anushka",
  "Kohli",
  82,
  150,
  "Delhi",
  "India",
  "Royal Challenger Banglore",
  "Noida",
  "Audi",
]; // Here we don't know what each value stands for

// Object

// const obj ={key :value}

const viratObj = {
  firstName: "Virat",
  spouce: "Anushka",
  lastName: "kohli",
  debutYear: 2008,
  retiremnt: 2024,
  centuries: 82,
  halfCentury: 150,
  ranjeeTeam: "Delhi",
  nationalTeam: "India",
  iplTeam: "RCB",
  city: ["Noida", "Mumbai", "Banglore", "london"],
  brandEndorsement: {
    car: { premium: "Audi", hatchback: "Brezza", entylevel: "alto" },
    hospitality: "8X",
    textile: "puma",
  },

  calcTotalYearPlayed: function () {
    // if there is function in object it is called method
    this.totalyear = this.retiremnt - this.debutYear;
  },
};

console.log(viratKohli);

console.log(viratObj);

// How to access value
console.log(viratObj.iplTeam);
console.log(viratObj["spouce"]); // expression --> vaLUE

const name = "Name"; // name is researved keyword at the same time this is the only keyword that can be used as a variable name but recomended -don't do it

console.log(viratObj["first" + name]);
console.log(viratObj["last" + name]);

// console.log(viratObj."first" + name);  // dot notation do not work with dynamic value or expression

//making method/function in object

viratObj.calcTotalYearPlayed(); // activate method by calling it

console.log(viratObj.totalyear);

//18/04/2025

viratObj.isFarmOwner = true;
viratObj["isIdlyEater"] = false;

console.log(viratObj);

console.log(viratObj.city[2]);

console.log(viratObj.brandEndorsement.textile);
console.log(viratObj.brandEndorsement["hospitality"]);
console.log(viratObj.brandEndorsement.car.premium);
console.log(viratObj["brandEndorsement"]["car"]["hatchback"]);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// looping structure

console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");
console.log("Hello My name is Nirmal, I live in Gwalior");

console.log(1);
console.log(2);
console.log(3);
console.log(4);

// //for loop
// for(initilisation; condition, increament/decrement){
// //block of code  --> repeate
// }

for (let i = 10; i < 100; i++) {
  console.log(i);
}

console.log("//////////////////////////////////////////////");

for (i = 50; i > 0; i--) {
  console.log(`Hello I live in Gwalior ${i}`);
}
