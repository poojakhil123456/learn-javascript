// Arithmetic Operators
let a = 10;
let b = 3;

console.log(a+b);  // output:  10+3 = 13
console.log(a-b); // output : 10-3 = 7
console.log(a*b); // output: 10*3 = 30
console.log(a/b); // output : 10/3 = 3.333
console.log(a%b); // output : 10%3 = 1
     
// Assignment Operators 
let x = 8;

console.log(x+= 4);    // output : 12
console.log(x-=4);     // output : 8
console.log(x*=2);     // output : 16
console.log(x/=2);     // output : 8
console.log(x%=3);     // output : 2

// Comparison Operators

console.log(2=="2");   // true
console.log(2==="2");  // false
console.log(2!="2");   // false
console.log(2!=="2");  // true
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(5 >= 5);   // true
console.log(1 <= 1);   // true

// Logical Operators
let c = 3;

console.log(c> 5 && c<6);  // false
console.log(c > 2 || c >10)  //  true
console.log(!c < 10)  // true

//Bitwise Operator

console.log(3 & 2);  // 2
console.log(3 | 2);  // 3 
console.log( 3 ^ 2); //1
console.log(~3); //-4
console.log(3 << 1); // 6   
console.log(8 >> 1); //  4

//Ternary Operator

let age = 16;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Output: Minor

//Typeof Operator

console.log(typeof 2); // number
console.log(typeof null);  // object
console.log(typeof "0");  // string
console.log(typeof NAN);  // number 

// dot operator
// object property ko acces krta h 
const person = {
    name: "Amit",
    age: 25
  };                                        
  
  console.log(person.name); // Output: Amit
  console.log(person.age);  // Output: 25


//   Nullish Coalescing (??)
let namee = null;
let defaultName = "pooja";

let displayName = namee ?? defaultName;
console.log(displayName); // Output: pooja

// Optional Chaining (?.)
const user = {
    name: "Rahul",
    address: {
      city: "Delhi",
      country: "India"
    }
  };

  
  console.log(user?.address?.city);    // Output: "Delhi" 
  console.log(user?.address?.zipcode); // undefined

//   Spread Operator (...)
let personalDetails = { name: "pooja", city: "jaipur" };
let jobDetails = { designation: "developer", company: "softraw" };

let completeProfile = { ...personalDetails, ...jobDetails };
console.log(completeProfile);

// {name: 'pooja', city: 'jaipur', designation: 'developer', company: 'softraw'}
  
// Delete (delete) 
let userdetails = {name:"pooja",city:"jaipur",addresss:"vaishali",phoneno:"12345"}
delete userdetails.phoneno;

console.log(userdetails);
//  name: 'pooja', city: 'jaipur', addresss: 'vaishali' }