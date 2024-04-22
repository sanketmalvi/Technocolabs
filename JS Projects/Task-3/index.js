// Define userName variable
let userName = 'sanket';

// Ternary expression to greet user
userName !== '' ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Define userQuestion variable
let userQuestion = "What would you like to ask the Magic Eight Ball?";

// Log user's question
console.log(`${userName !== '' ? userName + ' asks: ' : ''}${userQuestion}`);

// Generate random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

// Define eightBall variable
let eightBall = '';

// Control flow to assign eightBall a reply
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy, try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Cannot predict now';
}

// Log Magic Eight Ball's answer
console.log(`The Magic Eight Ball says: ${eightBall}`);
