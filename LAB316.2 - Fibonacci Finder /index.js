import "./styles.css";

// // Fibonacci sequence
// const n = 40;

// let series = new Array(n);
// series.fill(0);
// series[0] = 0;
// series[1] = 1;
// for (let i = 2; i < n; i++) {
//   series[i] = series[i - 1] + series[i - 2];
// }
// console.log(series);

// // Get Random  Number
// function getRandomInt(min, max) {
//   const minCeiled = Math.ceil(min);
//   const maxFloored = Math.floor(max);
//   return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
// }

// const indexInArray = getRandomInt(10, n - 2);
// const chosenNumber = series[indexInArray];
// console.log(chosenNumber);
// const numberToGuess = series[indexInArray + 2];
// console.log(numberToGuess);

// let playerNumber = prompt("Choose your number: ");

// function mainGaming(playerNumber, numberToGuess) {
//   let gameOver = false;
//   for (let i = 0; i < 3; i++) {
//     if (playerNumber === numberToGuess) {
//       console.log("You win!");
//       gameOver = false;
//       break;
//     } else if (playerNumber < numberToGuess) {
//       console.log("TRY A HIGHER NUMBER");
//       playerNumber = prompt("Choose your number: ");
//     } else if (playerNumber > numberToGuess) {
//       console.log("TRY A LOWER NUMBER");
//       playerNumber = prompt("Choose your number: ");
//     }
//     gameOver = true;
//   }
//   if (gameOver) {
//     console.log(`You do not have any more tries! Number was: ${numberToGuess}`);
//   }
//   console.log("Do you want to play again?");
// }

// console.log(mainGaming(playerNumber, numberToGuess));
// // console.log (numberToGuess);

// // HTML
// document.getElementById("firstNumber").innerHTML = `${chosenNumber}`;
// document.getElementById("playerNumber").innerHTML = `${playerNumber}`;




// Fibonacci sequence
const n = 30;

//Fibonacci sequence
let series = new Array(n);
series.fill(0);
series[0] = 0;
series[1] = 1;
for (let i = 2; i < n; i++) {
  series[i] = series[i - 1] + series[i - 2];
}

// Get Random  Number
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const indexInArray = getRandomInt(10, n - 2);
const chosenNumberFirst = series[indexInArray];
const chosenNumberThird = series[indexInArray + 2];
console.log(chosenNumberFirst);
console.log(chosenNumberThird);
const numberToGuess = series[indexInArray + 1];
console.log(numberToGuess); // Create your game here!

// Create four more numbers here
// function getRandomGuesses(numberToGuess) {
//   const variety = 4;
//   const guess = Math.round(Math.random() * variety);
//   console.log(guess);
//   let varityArray = [];
//   for (let i = 0; i < variety; i++) {
//     let varityNumber = Math.round(Math.random);
//     varityArray.push(varityNumber);
//     console.log(varityNumber);
//   }
//   varityArray[guess] = numberToGuess;
//   return varityArray;
// }



function getNumber(numberToGuess) {
  let tryies = 5;
  while (tryies > 0) {
    tryies--;
    playerNumber = prompt(`You have ${tryies} tries left. Enter your number:`);
    if (playerNumber != null) {
      document.getElementById("playerNumber").innerHTML = `${playerNumber}`;
      if (playerNumber == numberToGuess) {
        alert("You guessed it right!");
      } else {
        alert(`You have ${tryies} tries left`);
      }
    } else break;
  }
}

let playerNumber = "";

document.getElementById("firstNumber").innerHTML = `${chosenNumberFirst}`;
document.getElementById("thirdNumber").innerHTML = `${chosenNumberThird}`;
setTimeout(() => getNumber(numberToGuess), 2000);
