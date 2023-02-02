let inputOddEven = prompt("scegli pari o dispari");

if (inputOddEven != "pari" && inputOddEven != "dispari") {
  alert("Scelta non valida");
} else {
  const inputNumber = parseInt(prompt("Numero tra 1 e 5"));

  if (inputNumber <= 5 && inputNumber >= 0 && inputNumber == !isNaN) {
    const myRandomNumber = generateRandomNumber(1, 5);
    const somma = myRandomNumber + inputNumber;
    if (
      (isEven(somma) && inputOddEven == "pari") ||
      (!isEven(somma) && inputOddEven == "dispari")
    ) {
      alert("Hai vinto");
    } else {
      alert("hai perso");
    }
  } else {
    console.warn("Numero non valido");
  }
}

function generateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (min - max + 1)) + min;
  return randomNumber;
}

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}
