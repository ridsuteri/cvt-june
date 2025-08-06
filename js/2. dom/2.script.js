const input = document.getElementById("input");
const btn = document.getElementById("action-btn");

const rollBtn = document.getElementById('roll-btn');
const diceNumber = document.getElementById('dice-number');

function convertToSeconds() {
  // 1. read what is written inside the input
  let age = Number(input.value);

  if (age && age > 0) {
    console.log("age in numbers", age);
    // 2. convert that number in seconds (using your math )
    age = 365 * 24 * 60 * 60 * age;
    console.log("age in seconds", age);

    // 3. show the converted number as an alert
    alert(`your age in seconds: ${age}`);
  }
  else{
    alert('not a valid age')
  }
}

function rollADice(){
    const randomNo = Math.floor(Math.random()*10);
    const dice = randomNo%7 == 0 ? 6 : randomNo%7
    // console.log(dice)
    diceNumber.innerText = dice
}

btn.addEventListener("click", convertToSeconds);
rollBtn.addEventListener('click', rollADice)