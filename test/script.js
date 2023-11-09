console.log('funguje');

const MINIMUM = 13;

const jmenoUzivatele = window.prompt('Jak ti mám říkat?', 'Anonyme');
window.alert(`Ahoj, ${jmenoUzivatele}!`);

let vekUzivatele = window.prompt('Kolik ti je let?');

if (vekUzivatele === MINIMUM) {
    window.alert('Vítej na webu!');
}

else if (vekUzivatele > MINIMUM) {
    window.alert(`Minimální věk jsi překonal o ${vekUzivatele - MINIMUM}let. Vítej na webu!`);
}

else {
    if (!isNaN(vekUzivatele)) {
  window.alert(`Do dosažemí minimálního věku ti zbývá ${MINIMUM - vekUzivatele} let!`);
}
else {
   window.alert(`Výraz ${vekUzivatele} není číslo!`);
}

vekUzivatele = window.prompt(`Jaký je tvůj skutečný věk?`, 13);
}