let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true; // Change this value to test different scenarios
let runnerAge = 25; // Change this value to test different scenarios

if (registeredEarly && runnerAge > 18) {
  raceNumber += 1000;
}

if (runnerAge > 18) {
  if (registeredEarly) {
    console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
  } else {
    console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
  }
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  console.log("Please see the registration desk.");
}
