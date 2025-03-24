// loops in javascript
// 1. for Loop 
let fruits = ["apple","mango","banana"];
for(let i = 0; i< fruits.length; i++){
    console.log(fruits[i]);
}    // output - 
// apple  
// mango  
// banana

//  2. while loop
let i = 1;
while (i <= 3) {
  console.log("Count:", i);
  i++; 
}  // output -  count: 1        count: 2                 count: 3

// do while 
let j = 10;
do {
  console.log("This will run at least once!");
} while (j < 5);
// output -  this will run at least once!

// for in 
let colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index, ":", colors[index]);
}      // output - 0:red           1 : green                 2 : blue

// for of 
let goodname = "Alice";

for (let char of goodname) {
  console.log(char);
}             //output - A     l          i          c          e

// foreach loop 
let fruitss = ["Apple", "Banana", "Cherry"];

fruitss.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
//output- 0: Apple
        //1: Banana
        //2: Cherry


      //1.Example :- without control flow
//
let age=18;
console.log("you can do vote");
console.log("you can't  do  vote");  

// with  using control flow(if condition)

let userage = 20;

if (userage >= 18) {
  console.log("You are eligible to vote.");
}  
// output -  You are eligible to vote.


// if else condition
let num = 7;

if (num % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}
// output - Odd number

// if...else if...else 
let marks = 85;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 80) {
  console.log("Grade: B");
} else if (marks >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
//  output - Grade: B

// switch condition

let day = 3;

switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
        case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend or Invalid Day");

}
// output - Wednesday


