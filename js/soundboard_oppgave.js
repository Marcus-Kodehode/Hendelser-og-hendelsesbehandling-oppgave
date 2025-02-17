import { sounds } from "./sounds.js";  // Importer lydene fra sounds.js-filen

//*1.1. Catch the html element with id drumkit:
const drumkit = document.getElementById("drumkit");  // Fange drumkit-elementet

//*1.2. console.log the drumkit element:
console.log(drumkit);  // Logg drumkit-elementet til konsollen for å forsikre oss om at vi har fått tak i det

//*2. Write a console log for the fetched sounds so you know how the structure is and how you can use it */
console.log(sounds);  // Logg lydene for å se strukturen

//*2.2. Write a console log for the fetched sounds keys so you know to use the different parts of the data */
console.log(Object.keys(sounds[0]));  // Logg nøklene i første lydobjekt for å vite hvordan vi kan referere til dataene (f.eks. "name" og "file")

//*3. Finish the function below to create a functioning soundboard:
function drumComponent(sound) {
    // 3.1: Lag en knapp for å spille lyden
    const buttonEl = document.createElement("button");
    buttonEl.textContent = sound.name;  // Setter knappens tekst til lydenavnet (f.eks. "Applaus")

    // 3.2: Lag et audio-element for lyden
    const audioEl = document.createElement("audio");
    audioEl.src = sound.file;  // Setter lydfilens kilde (URL) fra "sounds.js"
    audioEl.id = sound.name;   // Setter ID på lydfilen til knappens navn

    // 3.3: Legger til event listener på knappen, som stopper andre lyder og spiller den valgte lyden
    buttonEl.addEventListener("click", () => {
        // Stopp alle lyder
        const allAudio = document.querySelectorAll("audio");
        allAudio.forEach((audio) => {
            audio.pause();  // Stopp lyden
            audio.currentTime = 0;  // Sett lyden tilbake til starten
        });

        // Spill av den valgte lyden
        audioEl.play();

        // Stopp lyden etter 10 sekunder (kan endres til ønsket tid)
        setTimeout(() => {
            audioEl.pause();  // Stopp lyden etter 10 sekunder
            audioEl.currentTime = 0;  // Tilbakestill lyden til starten
        }, 10000);
    });

    return { buttonEl, audioEl };  // Returner både knapp og lyd-element for videre behandling
}

// Funksjon for å generere knappene og gruppere de tre nye knappene på en ny rad
function createDrumKit() {
    // Opprett en div for de tre nye knappene (for å gruppere dem på en egen linje)
    const newRow = document.createElement("div");
    newRow.style.display = "flex";  // Bruk Flexbox for å organisere knappene horisontalt
    newRow.style.flexWrap = "wrap"; // Sørg for at knappene brytes til neste linje hvis nødvendig
    newRow.style.justifyContent = "center";  // Sentrer knappene på linjen

    // Generere knapper for de gamle og nye lydene
    sounds.forEach((sound, index) => {
        const { buttonEl, audioEl } = drumComponent(sound);  // Generer knapp og audio-element for hver lyd

        // Hvis lyden er en av de tre nye (index >= 6), legg den til i den nye raden
        if (index >= 6) {
            newRow.appendChild(buttonEl);  // Legg til knappen i den nye raden
            newRow.appendChild(audioEl);   // Legg til audio-elementet i den nye raden
        } else {
            // Ellers legg knappene for de gamle lydene direkte til drumkit
            drumkit.appendChild(buttonEl);  
            drumkit.appendChild(audioEl);
        }
    });

    // Legg til den nye raden med de 3 nye knappene i drumkit
    drumkit.appendChild(newRow);  // Legger den nye raden med de tre nye knappene til drumkit
}

// Kall funksjonen for å generere knappene
createDrumKit();  // Kaller funksjonen som genererer og legger til knappene på siden



// Import av lyder: Koden importerer en sounds-array fra sounds.js, som inneholder informasjon om navn og filbaner til lydene.

// drumComponent funksjonen: Denne funksjonen tar en lyd (et objekt fra sounds-arrayen), lager en knapp og et audio-element for lyden, og legger til en click event listener på knappen for å spille av lyden. Når knappen klikkes, stopper alle andre lyder, og den aktuelle lyden spilles. Lyden stoppes etter 10 sekunder (du kan endre dette tallet).

// Generering av knapper: Funksjonen createDrumKit går gjennom alle lydene i sounds-arrayen og kaller på drumComponent for å generere knappene og lyd-elementene. De nye knappene (de som er på rad 2) grupperes i en egen div (med en flex layout) slik at de vises på en ny linje under de gamle knappene.

// CSS: Flexbox brukes til å organisere knappene i to rader. Den første raden har de gamle knappene, og den andre raden har de nye knappene.


