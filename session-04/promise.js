//Example of Synchronous 
console.log("pooja");
console.log("jaipur");  //exexute task line by line 

//Example of Asynchronous 
console.log("start");

setTimeout(() => {
    console.log(" Inside setTimeout - Asynchronous Task");
}, 2000);

console.log("End");
// output  -   start
             //End
        //Inside setTimeout - Asynchronous Task


 // Callback 

function message(name,callback){
    setTimeout(() => {
        console.log(`hello, ${name}`)
        callback();
    }, 2000);
}
function message2(){
    console.log("nice");
} 
message("pooja",message2);
// output - hello, pooja
//nice

// callback hell
console.log("start");

setTimeout(() => {
    console.log("1 step")
    setTimeout(()=>{
        console.log("2 step")
        setTimeout(() => {
            console.log("3 step")
            setTimeout(() => {
                console.log("4 step")
            }, 2000);
        }, 2000);
    },2000);
}, 2000);

console.log("end");

//  using modern javaScript avoid  callback hell  using by promise

let promise = new promise ((resolve,reject)=>{
  resolve("Task completed");
  });
  promise.then(data=>console.log(data));
  
  function fetchdata(){
    return new promise((resolve,reject)=>{
     setTimeout(()=>{
    let succes = true;
    if(succes){
    Resolve ({name:"pooja",city: "jaipur"})
    }else{
    Reject ("failed")
    }},2000);
    });
    }
    fetchdata()
    .then((result)=>{
    console.log("fulfilled",result);
    })
               . catch((error)=>{
    console.log("not fulfilled",error)
    })
    
    // Async and Await
    // JavaScript में async और await को asynchronous operations को आसान और readable बनाने के लिए use किया जाता है। यह Promises का ही advanced version है,
    //  जिससे हमें .then() और .catch() के बिना asynchronous कोड लिखने की सुविधा मिलती है।

    async function  fetchdata(){
      let response = await ("https://jsonplaceholder.typicode.com/todos/1")
      let data = await response.json();
      console.log(data);
      }
      fetchdata();
      