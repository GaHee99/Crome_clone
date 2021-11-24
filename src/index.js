const randomnumber = document.querySelector("#Random input");
const Guessdomnumber = document.querySelector("#Guess input");
const PlayBtn = document.querySelector("#guessbtn");
const Content = document.querySelector("#content h3");

function generateRandom(min, max) {
  var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return ranNum;
}
/*
function setfunction(event) {
  event.preventDefault();
  const value = randomnumber.value;
  return value;
}*/
function Randomfunction(event) {
  const RandomValue = generateRandom(0, randomnumber.value);
  const Guessvalue = parseInt(Guessdomnumber.value, 10);
  if (Guessvalue === RandomValue) {
    Content.innerText = `You chose : ${Guessvalue}, the machine chose ${RandomValue}.
  You win!`;
  } else {
    Content.innerText = `You chose : ${Guessvalue}, the machine chose ${RandomValue}.
  You lost!`;
  }
}

//randomnumber.addEventListener("click", setfunction);
PlayBtn.addEventListener("click", Randomfunction);
