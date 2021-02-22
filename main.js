
// Array te doen lijst taken 

let takenLijst = [];
// variabelen voor het bijhouden van de data

// event listener voor bevestigen van formulier
const todoForm = document.getElementById('form');

todoForm.addEventListener('submit', function(event){
// voorkom standaard gedrag van formulier.
event.preventDefault();

// ophalen van input element
const todoInput = document.getElementById('input_todo');
// ophalen van fout bericht
const foutBericht = document.getElementById('error-msg');

// controleert of er waarde is
if (todoInput.value) {
// stuur inkomende waarde naar een functie. Dat het toevoegt

voegTaakToe(todoInput.value);
} else {

foutBericht.innerHTML = 'text kan niet leeg zijn!';
foutBericht.style.display = 'block';  

 }
})

function voegTaakToe(input) {
console.log(input);
}