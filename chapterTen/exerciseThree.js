//Add a max() function to the BST class that finds the maximum value in a BST.

function max() {
    var current = this.root;
    while (!(current.right == null)) {
        current = current.right;
    }
    return current.data;
}