// Function Scope

function greeting() {
  let userName = "Oscar";
  console.log(userName);
  
  if(userName === "Oscar") {
    console.log(`Hello ${userName}`);
  }
}

greeting();
console.log(userName); //error reference userName is not defined