// import "./styles.css";

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

// console.log(getRandomGuesses(numberToGuess));

// document.getElementById("playerNumber").innerHTML = `${playerNumber}`;

function getNumber(numberToGuess) {
  let tryies = 5;
  
  while (tryies > 0) {
  
    playerNumber = prompt(`${tryies} try. Enter your number:`);
    if (playerNumber != null) {
      let div = document.createElement("div");
      let textNumber = document.createTextNode(`${playerNumber}`);
      div.appendChild(textNumber);
      document.getElementById("playerNumber").appendChild(div);
      if (playerNumber == numberToGuess) {
        alert("You guessed it right!");
        document.getElementById("triesLeft").innerText = `You guessed it right in ${5-tryies} tryies!` 
        break;
      } else { if (playerNumber > numberToGuess) {
        alert(`You have ${tryies-1} tries left. Try a LOWER number`);
      } else {
       alert(`You have ${tryies-1} tries left. Try a HIGHER number`);
      }
      }
    } else break;
    document.getElementById("triesLeft").innerHTML = `You had ${tryies-1} tries left.`;
    tryies--;
  }

  if (tryies === 0) {
    alert(`You have lost. The number was ${numberToGuess}`);
    document.getElementById("app").innerHTML = `Guessing number was ${numberToGuess}`;
  }
  
}

let playerNumber = "";

document.getElementById("firstNumber").innerHTML = `${chosenNumberFirst}`;
document.getElementById("thirdNumber").innerHTML = `${chosenNumberThird}`;
setTimeout(() => getNumber(numberToGuess), 3000);
