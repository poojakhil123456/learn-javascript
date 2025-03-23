//javaScript Variable Declaration Sysntex

var oldType="this is var variable";
console.log(oldType);   // output - this is var variable

let newType="this is let variable";
console.log(newType);  // output - this is let variable

const fixedType="this is const variable";
console.log(fixedType);  // output - this is const variable


// Memory allocation 
let namee ="pooja";//Store in a Stack Memory
console.log(namee);    // output - pooja

let user={name:"pooja"};//Store in a Heap Memory
console.log(user);    // output - {name: 'pooja'}

//Lexical Scope
function outer() {
        let a = "Hello";
    
        function inner() {
            let b = "World";
            console.log(a, b); // ✅ "Hello World" (inner can access outer's variables)
        }
    
        inner();
    }
    
    outer();
// output  -  Hello World 

// block scope 
// (let,const)
{
    let x = 10;
    const y = 20;
    console.log(x);
    console.log(y); // (Accessible inside the block)
}
// output - 10




//Variable Hoisting
console.log(a); //(hoisted, but not initialized)
var a = 10;
// output - undefined 

console.log(b); //  ReferenceError: Cannot access 'b' before initialization
let b = 20;