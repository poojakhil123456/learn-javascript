// function work?
function greet(){ // function declaration
    console.log("Hello ");
}

greet(); //function called 

// parameter Function
function aboutUser(sentence){
   return `Welcome ${sentence}!`;
}

let result=aboutUser("this is parametterized function");
console.log(result); // Welcome this is parametterized function!

// Function with Default Parameters

function greet(name = "neha") {
    console.log(`Hello, ${name}!`);
}
greet();        // Output: Hello, neha!
greet("sarita"); // output : Hello,sarita!

// example - total amount after tax and discount
function calculateFinalAmount(basePrice, taxRate, discount) {
    const tax = basePrice * taxRate;
    const discounted = basePrice - discount;
    return discounted + tax;
  }
  
  const total = calculateFinalAmount(500, 50, 100);
  console.log("Final amount:", total);

//   
function getGreeting(language) {
    if (language === "hindi") {
        return function(name) {
            console.log(`Namaste, ${name}`);
        };
    } else {
        return function(name) {
            console.log(`Hello, ${name}`);
        };
    }
}

const greet = getGreeting("hindi");
greet("Anjali");
// Namaste,Anjali


//   Assigning a Function to a Variable

let sayHi = function(){
    console.log("this function stored in a variable");
};
  sayHi();

//  callback 

// Let’s say you run a food delivery startup . You want to apply discounts to different types of customers.

// You can pass a function that calculates discounts, based on who the customer is.

function applyDiscount (amount, discountfunction){
    console.log(amount);
  discountfunction();
}
const studentDiscount = function(amount){
    return amount * 0.9;
}
const FinalAmount = applyDiscount(500,studentDiscount);
    console.log(`final amount is ${FinalAmount}`);

    // Returning a Function from Another Function
    function createMsg(name){
        return function createMsg2(msg){
         console.log(`${msg},${name}`);
        }
 }
const createMsg3 = createMsg("pooja");
createMsg3("hello");

// Storing Functions in Data Structures
const action = [ 
    function (){ console.log("action1");},
    function (){console.log("action2");}
  ];
  action[0](); // action1
  action[1](); // action2

  // inside an object: 
const creat1 = {
    add : function(a,b){return a+b;} ,
    substraction : function(c,d){return c-d;}      
  }
  
  console.log(creat1.add(2,4));
  console.log(creat1.substraction(5,3));


  const handler = {
    onlogin : function(){console.log("form login");},
    onlogout : function(){console.log("form logout");}
  }
  handler.onlogin(); 

 // Closure एक function के अंदर function (nested function) होता है, जो अपने parent function के variables को याद रखता है,
//  भले ही parent function खत्म हो जाए।


function outer(){
    let msg = "hello, i am a Closure ";
  
    function inner(){
        console.log(msg);     
    }
    return inner;
  }
  const myfun = outer();
  myfun(); // hello, i am a Closure  

function outer1(){
    let count = 0;

    function inner1(){
        count++;
        console.log("counting is ",count);
    };
    return inner1;
}  
const finall = outer1();
finall();
finall();
finall();

function createAccount(){
    let balance = 1000;
    
    function creatededAmount(amount){
     balance+=amount;
     console.log(balance);
    }
    return creatededAmount;
    }
    const finalBalance = createAccount();
    finalBalance(500);

    // Traditional Function?

    function greet(name) {
        console.log("Hello,", name);
    }

    // Arrow Function?
    const deliverOrder = customer => {
        console.log("Delivering to", customer);
    };


    function Clock() {
        this.time = 0;
    
        setInterval(() => {
            this.time++;
            console.log(this.time);
        }, 1000);
    }