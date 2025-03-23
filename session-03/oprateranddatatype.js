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

// rest operator
function sum(...numbers){
return numbers.reduce((Acc , num )=>Acc+num);
}
console.log(sum(10,20,30,40));
// output - 100;

// Comma Operator (,)
let counting = (1,2,3);
console.log(counting);
// output - 3

// datatype in  js
// primitive datatype
// 1. string 
 let fruit = "apple";
 console.log(fruit); // output - apple

//  2. number
let amount=1230.90;
let finalGst=amount * 0.18;
let finalAmount=amount + finalGst;   // output - 1650

//  3. bigint
let bignum = BigInt("90004783949999999999");
console.log(bignum);  //output - 90004783949999999999n

//  4. boolean
let p = 10;
let m = 20;

console.log(p > m);  // false
console.log(p < m);  // true

// 5. Symbol
let userid = Symbol("id");
let obj = {
  user : "pooja",
  city: "delhi",
  age : "20",
  [userid] : 100
}
console.log(obj);  // { user: 'pooja', city: 'delhi', age: '20', [Symbol(id)]: 100 }

//Refrence Data Type in javaScript (Store in heap memory)
// 1. Object
let persons = {
  name: "Amit",
  age: 30,
  city: "Delhi"
};

console.log(persons.name);  // Output: Amit

//  2. array 
let arr1 = [1, 2, 3];
let arr2 = arr1; 

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
 
// 3. function
function greet() {
  console.log("Hello!");
}

let newGreet = greet;  
newGreet();  // Hello!
