// Set myAge to your age as a number
let myAge = 28;

// This variable accounts for the early years of a dog's life
let earlyYears = 2;

// Multiply earlyYears by 10.5 to account for the first two years
earlyYears *= 10.5;

// Subtract 2 from myAge to account for the early years already calculated
let laterYears = myAge - 2;

// Calculate the number of dog years for the later years
laterYears *= 4;

// Add earlyYears and laterYears together to get myAgeInDogYears
let myAgeInDogYears = earlyYears + laterYears;

// Convert your name to lowercase using the toLowerCase() method
let myName = "John".toLowerCase();

// Display name and age in dog years using string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
