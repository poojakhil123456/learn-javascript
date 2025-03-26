This commit for Session-5

i have learn about why JavaScript Execution is Important ,

JavaScript runs inside web browsers and follows a specific process to execute code.
If we understand Execution Context, Call Stack, and Asynchronous Execution, we can quickly identify errors and fix them!

1. Debugging Becomes Easier
2. Performance Optimization
3. Handling Asynchronous Code Correctly

How JavaScript Runs in a Browser vs. Node.js

1. Browser (Client-Side Execution)
    - JavaScript code is executed inside a browser using engines like V8 (Chrome, Edge), SpiderMonkey (Firefox), and WebKit (Safari).
    - The DOM (Document Object Model) is accessible for handling web pages.
    - JavaScript interacts with APIs like Fetch, setTimeout, and event listeners.
2. Node.js (Server-Side Execution)
    - JavaScript runs on the server side using the V8 engine (without a browser).
    - Unlike browsers, there is no DOM, but you can work with file systems, databases, and network requests.
    - The event-driven, non-blocking architecture of Node.js makes it ideal for real-time applications.

 JavaScript is a Single-Threaded Language
 JavaScript is called single-threaded because it can execute only one task at a time in a single execution thread. This means it follows a synchronous execution model by default.

 Synchronous - By default, JavaScript is synchronous, meaning it executes one task at a time in a sequential manner.
 
 Asynchronous - asynchronous programming, JavaScript can handle tasks without blocking the main thread.

 Execution Context, Call Stack, and Memory Heap in JavaScript
 
 Function Hoisting
 1. Function Declarations (Fully Hoisted)
 Functions declared with function are fully hoisted.

 2. Function Expressions (Not Hoisted)
Functions stored in variables are NOT fully hoisted

 an Execution Context - An Execution Context (EC) is the environment in which JavaScript code runs.
Every time JavaScript executes a script or function, a new Execution Context is created.
 
 Types of Execution Contexts
 1️⃣ Global Execution Context (GEC)
 2️⃣ Function Execution Context (FEC)

 Call Stack - The Call Stack is a data structure used by JavaScript to keep track of function execution. It follows the LIFO (Last In, First Out) principle, meaning the last function added is the first to be removed.

 Memory Heap - The Memory Heap is the place where JavaScript allocates and manages memory for variables, objects, and functions during execution.
