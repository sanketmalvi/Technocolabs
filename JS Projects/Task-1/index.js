// Explanation: This line of code initializes a variable named kelvin and sets it equal to 293, representing the temperature in Kelvin.

const kelvin = 293;

// Explanation: This line of code subtracts 273 from the kelvin variable to convert Kelvin to Celsius and stores the result in another variable named celsius.

let celsius = kelvin - 273;

// Explanation: This line of code initializes a variable named fahrenheit to store the temperature in Fahrenheit after conversion from Celsius.
let fahrenheit = celsius * (9/5) + 32;

// Explanation: This line of code uses the .floor() method from the Math object to round down the Fahrenheit temperature to the nearest integer.
fahrenheit = Math.floor(fahrenheit);

// Explanation: This line of code logs the temperature in Fahrenheit to the console using string interpolation.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Extra Practice: Convert Celsius to the Newton scale and round down the result.
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);