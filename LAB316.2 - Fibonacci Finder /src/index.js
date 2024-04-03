// import "./styles.css";

// Fibonacci sequence
const n = 20;

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

const indexInArray = getRandomInt(0, n);
const numberToGuess = series[indexInArray];



function getNumber(numberToGuess, indexInArray) {
  let tryies = 3;
  
  while (tryies > 0) {
    playerNumber = prompt(`${tryies} try. Enter your number:`);
    tryies--;
    if (playerNumber != null) {
      let div = document.createElement("div");
      let textNumber = document.createTextNode(`${playerNumber}`);
      div.appendChild(textNumber);
      document.getElementById("playerNumber").appendChild(div);
      if (tryies === 1) {
        alert(`it's a ${indexInArray} sequence number in Fibonacci sequence`);
      }
      if (playerNumber === numberToGuess) {
        alert("You guessed it right!");
        document.getElementById("triesLeft").innerText = `You guessed it right in ${5-tryies} tryies!` 
        break;
      } else { if (playerNumber > numberToGuess && tryies !==0 ) {
        alert(`You have ${tryies} tries left. Try a LOWER number`);
      } else if (playerNumber < numberToGuess && tryies !==0){
       alert(`You have ${tryies} tries left. Try a HIGHER number`);
      }
      else break;
      }
    } else break;
    document.getElementById("triesLeft").innerHTML = `You had ${tryies} tries left.`; 
  }
  if (tryies === 0) {
    alert(`You have lost. The number was ${numberToGuess}`);
    document.getElementById("app").innerHTML = `Guessing number was ${numberToGuess}`;
  }
}

let playerNumber = "";


// document.getElementById("thirdNumber").innerHTML = `${chosenNumberThird}`;
setTimeout(() => getNumber(numberToGuess, indexInArray), 3000);
