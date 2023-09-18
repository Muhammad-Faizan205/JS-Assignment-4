// ----------------------------- Arrays -----------------------------

// ---------------------------------------- chapter 17 - 20 --------------------------------------------


// ------- Ques 3

// for (let i = 1; i <= 10; i++) {
//     document.write(i, "<br>");
//   }
  

// ------- Ques 4

// var userInput = +prompt("Enter a number to generate a multiplicatio table");

// var userInputLength = +prompt("Enter lenght");

// for (var i = 1; i <= 15; i++) {
//     document.write(userInput + "x" + i + "=" + userInputLength * i, "<br>")
// }


// ------- Ques 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//   document.write(fruits[i], "<br>");
// }

// ------- Ques 6

// a. Counting
// var counting = "";
// for (let i = 1; i <= 15; i++) {
//     counting += i + ", ";
// }
// document.getElementById("counting").textContent = counting;

// // b. Reverse counting
// var reverseCounting = "";
// for (let i = 10; i >= 1; i--) {
//     reverseCounting += i + ", ";
// }
// document.getElementById("reverseCounting").textContent = reverseCounting;

// // c. Even
// var even = "";
// for (let i = 0; i <= 20; i += 2) {
//     even += i + ", ";
// }
// document.getElementById("even").textContent = even;

// // d. Odd
// var odd = "";
// for (let i = 1; i <= 19; i += 2) {
//     odd += i + ", ";
// }
// document.getElementById("odd").textContent = odd;

// // // e. Series:
// var series = "";
// for (let k = 1; k <= 10; k++) {
//     series += (2 * k) + "k, ";
// }
// document.getElementById("series").textContent = series;


// ------- Ques 7

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");

// var userInputLower = userInput.toLowerCase();

// var found = A.includes(userInputLower);

// if (found) {
//   console.log(userInput + "is found in the list.");
//   alert(userInput + "is found in the list.");
// } else {
//   console.log(userInput + "is not found in the list.");
//   alert(userInput + "is not found in the list.");
// }


// ------- Ques 8

// var A = [24, 53, 78, 91, 12];

// var largest = A[0];

// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
// }
// console.log("The largest number in the array is: + " largest);


// ------- Ques 9

// var A = [24, 53, 78, 91, 12];

// var smallest = A[0];

// for (let i = 1; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i];
//   }
// }
// console.log("The smallest number in the array is: + " smallest);


// ------- Ques 10

// var multiplesOf5 = "";

// for (var i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     multiplesOf5 += i + ", ";
//   }
// }
// console.log("Multiples of 5 from 1 to 100: + "multiplesOf5);



// ----------------------------------------------- End -------------------------------------------