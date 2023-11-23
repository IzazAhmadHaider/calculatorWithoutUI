function calculate(userInput) {
    try {
      // Check if the input contains only digits and valid operators
      if (/^[0-9+\-*/.() ]+$/.test(userInput)) {
        // Convert the user input to a string and then evaluate it
        const result = eval(String(userInput));
  
        if (isFinite(result)) {
          return result;
        } else {
          return "Invalid input";
        }
      } else {
        return "Invalid input";
      }
    } catch (error) {
      return "Error";
    }
  }
  
//   // Example usage:
  const userInput = prompt("Enter a mathematical expression:");
  const result = alert(calculate(userInput));
  
  console.log(result);
  