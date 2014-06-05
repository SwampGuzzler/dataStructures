// Add a min() function to the BST class that finds the minimum value in a BST.

function min() {
	var current = this.root;
	while (!(current.left == null)) {
		current = current.left;
	}
	return current.data;
}