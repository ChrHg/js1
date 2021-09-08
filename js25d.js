// Assignment JS.25d

"use strict";

console.log("Sandhedstabel for disjunktion");
console.log("var1\tvar2\tvar1 || var2");

let var1 = true;
let var2 = true;
let disjunction = var1 || var2;
console.log(var1 + "\t" + var2 + "\t" + disjunction);

var2 = false;
disjunction = var1 || var2;
console.log(var1 + "\t" + var2 + "\t" + disjunction);

var1 = false;
var2 = true;
disjunction = var1 || var2;
console.log(var1 + "\t" + var2 + "\t" + disjunction);

var2 = false;
disjunction = var1 || var2;
console.log(var1 + "\t" + var2 + "\t" + disjunction);