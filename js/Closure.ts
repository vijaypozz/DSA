function outerFunction() {
  let count = 0;

  function innerFunction() {
    count++;
    console.log(count);
  }

  return innerFunction;
}

console.log(outerFunction());

let myFunction = outerFunction();
myFunction(); // Outputs: 1
myFunction(); // Outputs: 2

//   Closures are functions inside a function.
//    Closure functions have access to parent function variables, even after the parent 
//   function has returned. Closure is a crucial part of asynchronous JavaScript.

function counter() {
  // Private variable
  let count = 0;

  return function () {
    // Access and modify the private variable
    count++;
    return count;
  };
}

console.log(counter());

const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());

(function main() {
  var userName = "Sean";

  console.log(name());

  function name() {
    return userName;
  }
}
)();