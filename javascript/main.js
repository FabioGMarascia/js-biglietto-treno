const km = prompt("Numero chilometri da percorrere");
const anni = prompt("Età del passeggero");
const prezzo_base = km * 0.21;
let sconto;
let prezzo_scontato;
let prezzo_arrotondato;

if (anni < 18) {
  sconto = prezzo_base * 0.2;
  prezzo_scontato = prezzo_base - sconto;
  prezzo_arrotondato = prezzo_scontato.toFixed(2);
  console.log(prezzo_arrotondato);
} else if (anni > 65) {
  sconto = prezzo_base * 0.4;
  prezzo_scontato = prezzo_base - sconto;
  prezzo_arrotondato = prezzo_scontato.toFixed(2);
  console.log(prezzo_arrotondato);
} else {
  prezzo_arrotondato = prezzo_base.toFixed(2);
  console.log(prezzo_arrotondato);
}

document.getElementById(
  "prezzo-biglietto"
).innerHTML = `Il prezzo del biglietto è: ${prezzo_arrotondato}€`;
