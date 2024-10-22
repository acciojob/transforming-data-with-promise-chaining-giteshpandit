//your JS code here. If required.
// Function to create a promise that resolves after a delay
function delayPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

// Function to handle the promise chaining
function performOperations() {
  // Get the input value from the input field
  const inputValue = Number(document.getElementById("ip").value);
  
  // Get the output div
  const output = document.getElementById("output");
  
  // First promise to resolve the input value after 2 seconds
  delayPromise(inputValue, 2000)
    .then((result) => {
      output.innerText = `Result: ${result}`;
      return delayPromise(result * 2, 1000);  // Multiply by 2
    })
    .then((result) => {
      output.innerText = `Result: ${result}`;
      return delayPromise(result - 3, 1000);  // Subtract 3
    })
    .then((result) => {
      output.innerText = `Result: ${result}`;
      return delayPromise(result / 2, 1000);  // Divide by 2
    })
    .then((result) => {
      output.innerText = `Result: ${result}`;
      return delayPromise(result + 10, 1000); // Add 10
    })
    .then((finalResult) => {
      output.innerText = `Final Result: ${finalResult}`;  // Display final result
    })
    .catch((error) => {
      console.error("Error in promise chain:", error);
    });
}

// Add event listener to the button
document.getElementById("btn").addEventListener("click", performOperations);

