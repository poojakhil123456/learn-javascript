Variable 

A variable is a container used to store data in JavaScript. It allows you to store, modify, and retrieve values in your program.

we have 3 types of variables

Var :- we can redeclare and reassign value
Let :- we can reassign value but not redeclare
Const:-it fixed we can't redeclare and reassign

Memory allocation
JavaScript uses two main memory areas.

Stack Memory :- Store Primitive type of value like(Number , String , Boolean, bigint)
Heap Memory:-Strore NonPrimitive Type of Value like(object,Array,Function)

Lexical Scope:-It means that a function can access variables from its parent function, but not vice versa.
Global Scops:- Accesable Anywhere
Block Scops:-Accesable Within the Block({})
Function Scope:-Accesable Within The Function

Variable Hoisting - 
Hoisting is a special memory management technique in JavaScript, where variables and functions are automatically moved to memory before their declaration. This means you can access a variable or function even before its declaration without any error.

Naming Convention
camelCase :- for using variable name and function
PascalCase:- for using Class name
snake_case:-it used for make variable constant and method unchangable

What is stack
stack is faster structure memory allocation and store primitive data and its fixed
and its faster to compare to heap

Key Features 
-store a primitive data type like(number ,String,boolean)
-it store data LIFO order last and first out form

What is heap
heap memory is a dynamically allocation method and javaScript used complex data structure and heap is slower then stack

Key Features 
-heap store a reference data like object, array, function.
-slower the stack requires extra lookup time.