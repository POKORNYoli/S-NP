console.log('funguje');

const MINIMUM = 13;

const jmenoUzivatele = window.prompt('Jak ti mám říkat?', 'hafo');
window.alert(`Ahoj, ${jmenoUzivatele}!`);

let vekUzivatele = window.prompt('Kolik ti je let?');

if (vekUzivatele === MINIMUM) {
    window.alert('Vítej!');
}

else if (vekUzivatele > MINIMUM) {
    window.alert(`Minimální věk jsi překonal o ${vekUzivatele - MINIMUM}let. Vítej!`);
}

else {
    if (!isNaN(vekUzivatele)) {
  window.alert(`Do dosažemí minimálního věku ti zbývá ${MINIMUM - vekUzivatele} let!`);
}
else {
   window.alert(`Výraz ${vekUzivatele} není číslo!`);
}

vekUzivatele = window.prompt(`Jaký je tvůj opravdový věk?`, 20);
}