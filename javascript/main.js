const km = prompt("Numero chilometri da percorrere");
const anni = prompt("Età del passeggero");
let prezzo_base = km * 0.21;
let sconto;
let prezzo_scontato;

if (anni < 18) {
  sconto = prezzo_base * 0.2;
  prezzo_scontato = prezzo_base - sconto;
  console.log(prezzo_scontato);
} else if (anni > 65) {
  sconto = prezzo_base * 0.4;
  prezzo_scontato = prezzo_base - sconto;
  console.log(prezzo_scontato);
} else {
  console.log(prezzo_base);
}
