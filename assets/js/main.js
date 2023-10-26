// =====================================
//     allgemeine Variablen definition
// =====================================

// input radios

const radioNetZuBrut = document.body.querySelector('#nettoZuBrutto');
const radioBrutZuNet = document.body.querySelector('#bruttoZuNetto');
const neunzehn = document.body.querySelector('#neunZehn');
const sieben = document.body.querySelector('#sieBen');

const inputBetrag = document.body.querySelector('#betrag-input').value;


// output Texte

const steuerText = document.body.querySelector('#steuerDef-output');
const bruttoNettoBetrag = document.body.querySelector('#text-output');

// Ergebnis outputs

const mwstOutput = document.body.querySelector('#mwst-output');
const resultOutput = document.body.querySelector('#result-output');

// Button

const berechne = document.body.querySelector('#calculate');

// ================= UMSETZUNG mit js click event

const steuerRechner = () => {
    const radioNetZuBrut = document.body.querySelector('#nettoZuBrutto');
    const radioBrutZuNet = document.body.querySelector('#bruttoZuNetto');
    const neunzehn = document.body.querySelector('#neunZehn');
    const sieben = document.body.querySelector('#sieBen');
    const inputBetrag = document.body.querySelector('#betrag-input').value;
    const steuerText = document.body.querySelector('#steuerDef-output');
    const bruttoNettoBetrag = document.body.querySelector('#text-output');
    const mwstOutput = document.body.querySelector('#mwst-output');
    const resultOutput = document.body.querySelector('#result-output');

    if(radioNetZuBrut.checked && neunzehn.checked) {
        let bruttoBetrag = inputBetrag * 1.19;
        resultOutput.textContent = Math.round(bruttoBetrag * 100) / 100;
        mwstOutput.textContent = Math.round((bruttoBetrag - inputBetrag) * 100) / 100;
    } else if (radioNetZuBrut.checked && sieben.checked) {
        let bruttoBetrag = inputBetrag * 1.07;
        resultOutput.textContent = Math.round(bruttoBetrag * 100) / 100;
        mwstOutput.textContent = Math.round((bruttoBetrag - inputBetrag) * 100) / 100;
    } else if (radioBrutZuNet.checked && neunzehn.checked) {
        let nettoBetrag = inputBetrag / 1.19;
        resultOutput.textContent = Math.round(nettoBetrag * 100) / 100;
        mwstOutput.textContent = Math.round((inputBetrag - nettoBetrag) * 100) / 100;
    } else if (radioBrutZuNet.checked && sieben.checked) {
        let nettoBetrag = inputBetrag / 1.07;
        resultOutput.textContent = Math.round(nettoBetrag * 100) / 100;
        mwstOutput.textContent = Math.round((inputBetrag - nettoBetrag) * 100) / 100;
    } else {
        console.log("error");
    }
}

berechne.addEventListener('click', steuerRechner);

// Function damit sich Text ändert, wenn MwSt. abgezogen werden soll

function bruttoNettoChange() {
    steuerText.innerHTML = "Bruttobetrag (Preis inkl. MwSt.) in €<span>*</span>";
    bruttoNettoBetrag.textContent = "Nettobetrag";

    if (radioBrutZuNet.checked) {
        steuerText.innerHTML = "Bruttobetrag (Preis inkl. MwSt.) in €<span>*</span>";
        bruttoNettoBetrag.textContent = "Nettobetrag";
    } else {
        steuerText.innerHTML = "Nettobetrag (Preis ohne MwSt.) in €<span>*</span>";
        bruttoNettoBetrag.textContent = "Bruttobetrag";
    }
}
