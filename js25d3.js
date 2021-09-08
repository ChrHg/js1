// Assignment JS.25d3

"use strict";

console.log("Sandhedstabel for disjunktion");
console.log("var1\tvar2\tvar3\tvar1 || var2 || var3");

let var1 = true;
let var2 = true;
let var3 = true;
let disjunction = var1 || var2 || var3;
console.log(var1 + "\t" + var2 + "\t" + var3 + "\t" + disjunction);

var2 = false;
disjunction = var1 || var2 || var3;
console.log(var1 + "\t" + var2 + "\t" + var3 + "\t" + disjunction);

var2 = true;
var3 = false;
disjunction = var1 || var2 || var3;
console.log(var1 + "\t" + var2 + "\t" + var3 + "\t" + disjunction);

var2 = false;
disjunction = var1 || var2 || var3;
console.log(var1 + "\t" + var2 + "\t" + var3 + "\t" + disjunction);

var1 = false;
var2 = true;
var3 = true;
disjunction = var1 || var2 || var3;
console.log(var1 + "\t" + var2 + "\t" + var3 + "\t" + disjunction);

var2 = false;
disjunction = var1 || var2 || var3;
console.log(var1 + "\t" + var2 + "\t" + var3 + "\t" + disjunction);

var2 = true;
var3 = false;
disjunction = var1 || var2 || var3;
console.log(var1 + "\t" + var2 + "\t" + var3 + "\t" + disjunction);

var2 = false;
disjunction = var1 || var2 || var3;
console.log(var1 + "\t" + var2 + "\t" + var3 + "\t" + disjunction);