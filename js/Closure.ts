function outerFunction() {
    let count = 0;
  
    function innerFunction() {
      count++;
      console.log(count);
    }
  
    return innerFunction;
  }
  
  let myFunction = outerFunction(); 
  myFunction(); // Outputs: 1
  myFunction(); // Outputs: 2

//   Closures are functions inside a function.
//    Closure functions have access to parent function variables, even after the parent 
//   function has returned. Closure is a crucial part of asynchronous JavaScript.