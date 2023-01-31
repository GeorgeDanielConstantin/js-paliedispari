function palindromo(parola) {
  const lettere = parola.length;

  for (let i = 0; i < lettere / 2; i++) {
    if (parola[i] !== parola[lettere - 1 - i]) {
      return "La parola non è palindroma";
    }
  }
  return "La parola è palindroma";
}

const parolaInput = prompt("Scrivi una parola: ");

const risposta = palindromo(parolaInput);

console.log(risposta);
