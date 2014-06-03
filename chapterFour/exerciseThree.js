// An example of a real-world stack is a Pez dispenser. Imagine that your virtual Pez
// dispenser is filled with red, yellow, and white colors and you don’t like the yellow
// ones. Write a program that uses a stack (and maybe more than one) to remove the
// yellow ones without changing the order of the other candies in the dispenser.

function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}

function push(element) {
	this.dataStore[this.top++] = element;
}
function peek() {
	return this.dataStore[this.top-1];
}
function pop() {
	return this.dataStore[--this.top];
}
function clear() {
	this.top = 0;
}
function length() {
	return this.top;
}

var pezDispenser = new Stack();
var yellow = new Stack();
var white = new Stack();
var red = new Stack();

pezDispenser.push("Yellow");
pezDispenser.push("Red");
pezDispenser.push("White");
pezDispenser.push("Yellow");
pezDispenser.push("Red");
pezDispenser.push("White");
pezDispenser.push("Red");
pezDispenser.push("Yellow");

function removeYellows(pezDispenser,yellow,white,red) {



}