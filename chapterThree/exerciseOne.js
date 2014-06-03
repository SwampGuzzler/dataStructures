// Write a function that inserts an element into a list only if the element to 
// be inserted is larger than any of the elements currently in the list. Larger 
// can mean either greater than when working with numeric values, or further 
// down in the alphabet, whenworking with textual values.

function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = []; // initializes an empty array to store list elements
	this.append = append;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

var newItem = 0;
var list = new List();

for(var i = 0; i < list.length; i++) {
  if (newItem > this.dataStore[i]) {
    list.append(newItem);
    console.log(list);
    return true;
  }
  return false;
}