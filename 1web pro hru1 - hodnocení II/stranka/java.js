document.querySelector('.logo').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('skryte');
});

// Funkce pro zavření popupu
function closePopup() {
  var overlay = document.querySelector('.popup-overlay');
  overlay.style.display = 'none';
}

console.log('funguje');

const MINIMUM = 100;
const jmenoUzivatele = window.prompt('Jak ti mám říkat?', 'Anonyme');
window.alert(`Ahoj, ${jmenoUzivatele}!`);
let vekUzivatele = window.prompt('Kolik ti je let?');
window.confirm(`Takže ti je ${vekUzivatele} let?`);
window.alert(`Abych tě pustil na web, musíš počkat ještě ${MINIMUM - vekUzivatele} let!`);
vekUzivatele = window.prompt(`Ne, vážně, kolik ti je?`);
window.alert(`Můžeš na web, je ti o ${vekUzivatele - MINIMUM} víc než minimum ${MINIMUM} let!`);