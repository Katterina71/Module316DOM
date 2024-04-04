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
    if (playerNumber != null) {
      let div = document.createElement("div");
      let textNumber = document.createTextNode(`${playerNumber}`);
      div.appendChild(textNumber);
      document.getElementById("playerNumber").appendChild(div);
      if (playerNumber == numberToGuess) {
        alert("You guessed it right!");
        document.getElementById("triesLeft").innerText = `You guessed it right! ${tryies} tryies left!` 
        break;
      } else { if (playerNumber > numberToGuess && (tryies-1) !==0) {
        alert(`You have ${tryies-1} tries left. Try a LOWER number`);
      } else if (playerNumber < numberToGuess && (tryies-1) !==0) {
       alert(`You have ${tryies-1} tries left. Try a HIGHER number`);
      }
      }
    } else break;
    document.getElementById("triesLeft").innerHTML = `You had ${tryies-1} tries left.`;
    tryies--;
    if (tryies === 1) {
      alert(` ${indexInArray+1} sequence number in Fibonacii series.`);
    }
  }

  if (tryies === 0) {
    alert(`You have lost. The number was ${numberToGuess}`);
    document.getElemen
}
}

let playerNumber = "";

for (let i=0; i < series.length; i++) {
  let divFibonacci = document.createElement('div');
  let FibonacciNumber = document.createTextNode(`${series[i]}`);
  divFibonacci.style.color = "purple";
  divFibonacci.style.backgroundColor = "white";
  divFibonacci.style.border = "2px, solid, purple;";
  divFibonacci.style.paddingInline = "10px";
  divFibonacci.style.display = "inline";
  divFibonacci.style.marginInline = "2px";
  divFibonacci.appendChild(FibonacciNumber);  // Changed `div` to `divFibonacci`
  document.getElementById("fibonacci").appendChild(divFibonacci);
}


// document.getElementById("numberToGuess").innerHTML = `${numberToGuess}`;
setTimeout(() => getNumber(numberToGuess, indexInArray), 3000);
