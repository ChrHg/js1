// Assignment JS.25c

"use strict";

console.log("Sandhedstabel for konjunktion");
console.log("var1\tvar2\tvar1 && var2");

let var1 = true;
let var2 = true;
let conjunction = var1 && var2;
console.log(var1 + "\t" + var2 + "\t" + conjunction);

var2 = false;
conjunction = var1 && var2;
console.log(var1 + "\t" + var2 + "\t" + conjunction);

var1 = false;
var2 = true;
conjunction = var1 && var2;
console.log(var1 + "\t" + var2 + "\t" + conjunction);

var2 = false;
conjunction = var1 && var2;
console.log(var1 + "\t" + var2 + "\t" + conjunction);