// Assignment JS.202

"use strict";

let cpr = Number(window.prompt("Indtast CPR-nummer"));
let female = cpr % 2 === 0;
console.log("Personen er en kvinde: " + female);