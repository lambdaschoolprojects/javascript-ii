// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function outside() {
    let here = "outside";
    function inside() {
        console.log(here);
    }
}

// ==== Challenge 2: Create a counter function ====
const counter = () => {
    let count = 0;
  // Return a function that when invoked increments and returns a counter variable.
    return function doCount() {
        return count++;
    }
};
// Example usage:
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
             