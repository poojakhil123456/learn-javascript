this commit for Session-4

i have learnt about loops, Why loops are important in JavaScript and How loops work behind the scenes .

Loops are essential in JavaScript because they allow us to execute a block of code multiple times without unnecessary repetition. Instead of writing the same code repeatedly, 
we use loops to handle tasks dynamically.


Types of Loops in JavaScript - for, while, do...while, and forEach Loops 

1. for Loop - A for loop is used when you know exactly how many times you need to repeat a task. It’s structured in three parts:

2. while Loop - A while loop continues running as long as a given condition remains true. It’s useful when the number of iterations
   is unknown at the start.

3. do...while - A do...while loop executes the code at least once, even if the condition is false.

4. forEach Loop - The forEach loop is specifically designed for arrays. It automatically loops through each element without requiring an explicit condition.

Control Flow in JavaScript 

Control flow is the core logic of any JavaScript program. It determines how code executes based on conditions. Without control flow, a program would run line by line without making any decisions,
making it incapable of handling real-world scenarios where logic depends on user input, system state, or data conditions.
Control flow is used everywhere in programming, from form validation, authentication, API responses, user interactions, and business logic.

Using if, else, and switch for Decision-Making

1. The if statement executes a block of code only if a condition is true. If the condition is false, JavaScript skips the block.
2. Executes one block if the condition is true, otherwise, executes another block.
3. When there are multiple possible outcomes, we use else if statements.
4. When checking multiple possible values of a single variable, a switch statement is often cleaner and more efficient than using multiple if...else if statements.

Dom (Document Object Module) in JavaScript 

The Document Object Model (DOM) is a programming interface that represents an HTML or XML document as a tree structure. It allows JavaScript to dynamically manipulate the content,
structure, and style of a web page.
1. Selecting Elements
JavaScript provides several methods to select elements in the DOM:

// Select by ID
let elementById = document.getElementById("myId");

// Select by Class
let elementsByClass = document.getElementsByClassName("myClass");

// Select by Tag Name
let elementsByTag = document.getElementsByTagName("p");

// Select using CSS Selectors
let elementByQuery = document.querySelector(".myClass"); // Selects first match
let allElementsByQuery = document.querySelectorAll("div"); // Selects all matches

2. Modifying Elements:
JavaScript allows you to modify elements dynamically:

let element = document.getElementById("myElement");
element.innerHTML = "New Content"; // Changes inner HTML
element.style.color = "red"; // Changes CSS styles
element.classList.add("new-class"); // Adds a new class

callback function 
A callback function in JavaScript is a function that is passed as an argument to another function and is executed later. 

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 1000);
}

function processData() {
    console.log("Processing data...");
}

fetchData(processData);

output - Data fetched
         Processing data...

callback hell - Callback Hell (also known as Pyramid of Doom) happens in JavaScript when multiple nested callbacks are used, making the code difficult to read, understand, and maintain.

It usually occurs in asynchronous JavaScript when you have multiple dependent operations, and each operation requires a callback function. 

Solution - Use Promises or Async/Await for better readability, maintainability, and debugging.

High order function 
A function that takes another function as an argument or returns a function.

Common Higher-Order Functions in JavaScript
JavaScript has many built-in higher-order functions, such as:

map() – Transforms each element in an array.

filter() – Returns elements that meet a condition.

reduce() – Combines elements into a single value.

forEach() – Loops through an array (without returning a new one).