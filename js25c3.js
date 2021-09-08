// Assignment JS.25c3

"use strict";

console.log("Sandhedstabel for konjunktion");
console.log("var1\tvar2\tvar3\tvar1 && var2 && var3");

let var1 = true;
let var2 = true;
let var3 = true;
let conjunction = var1 && var2 && var3;
console.log(var1 + "\t" + var2 + "\t" + var3 + "\t" + conjunction);

var2 = false;
conjunction = var1 && var2 && var3;
console.log(var1 + "\t" + var2 + "\t" + var3 + "\t" + conjunction);

var2 = true;
var3 = false;
conjunction = var1 && var2 && var3;
console.log(var1 + "\t" + var2 + "\t" + var3 + "\t" + conjunction);

var2 = false;
conjunction = var1 && var2 && var3;
console.log(var1 + "\t" + var2 + "\t" + var3 + "\t" + conjunction);

var1 = false;
var2 = true;
var3 = true;
conjunction = var1 && var2 && var3;
console.log(var1 + "\t" + var2 + "\t" + var3 + "\t" + conjunction);

var2 = false;
conjunction = var1 && var2 && var3;
console.log(var1 + "\t" + var2 + "\t" + var3 + "\t" + conjunction);

var2 = true;
var3 = false;
conjunction = var1 && var2 && var3;
console.log(var1 + "\t" + var2 + "\t" + var3 + "\t" + conjunction);

var2 = false;
conjunction = var1 && var2 && var3;
console.log(var1 + "\t" + var2 + "\t" + var3 + "\t" + conjunction);