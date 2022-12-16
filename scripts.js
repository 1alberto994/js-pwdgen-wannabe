const name=prompt("Qual'è il tuo nome?");
console.log("il nome dell'utente è:", name);
console.log("nameModificabile");
const surname=prompt("Qual'è il tuo cognome?");
console.log("il cognome dell'utente è:", surname);
const color=prompt("Qual'è il tuo colore preferito?");
console.log("il colore preferito dell'utente è", color);
const number= 21;
dati= name + surname + color + number;
console.log(dati);
document.getElementById("dati").innerHTML=dati;

