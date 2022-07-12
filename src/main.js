// stappenplan

// stap 1: importeer de data, zodat deze toegankelijk is op deze pagina
// stap 2: maak een verwijzing naar ons input veld, output veld en het formulier zodat deze beschikbaar is op deze pagina.
// stap 3: Voeg een event listener aan voor onze submit button (formulier)
// stap 4: Creëer een functie die de waarde van elke letter in je naam opzoekt in de 'database'(valueOfNumbers) en het totaal samenvoegt.
// stap 5: Creëer een functie die het totaal terugbrengt naar 1 digit (dus 7 + 8 = 15 --> 1 + 5 = 6)
// stap 6: Creëer een functie die de single digit opzoekt in de 'database' (meaningOfNumbers) en dit als één element injecteert in de DOM



// stap 1
import numbers from "./assets/data/numbers";
import meaningOfNumbers from "./assets/data/meaningOfNumbers";

// stap 2
const input = document.getElementById('fullName');
const submit = document.getElementById('submit');
const card = document.getElementById('card');

// stap 3
submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('werkt dit?')
    getNameValue( input.value, numbers)
})

// stap 4
function getNameValue(str, obj) {
    let output = 0;
    for (let value of str.toLowerCase()) {
        console.log(obj[value]);
        if ( obj[value] ) {
            output = output + obj[value];
        }
    }
    return (output)
}