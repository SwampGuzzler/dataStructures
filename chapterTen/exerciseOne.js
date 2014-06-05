// Add a function to the BST class that counts the number of nodes in a BST.

function numberNodes() {   
    curr = this.root;
        // if it's null, it doesn't exist, return 0 
    if (curr === null) {
        return 0;
    } else {
        var count = 1;
        while (curr != null) {
            // count myself + my left child + my right child
            if (curr.left != null && curr.right != null) {
                count = count + 2;
            } else if (curr.left != null && curr.right === null) {
                count = count + 1;
            } else if (curr.right != null && curr.left === null) {
                count = count + 1;
            } else {
                count = count;
            }
            console.log(count);
            //return 1 + curr.left + curr.right;
            //if (curr.left === null) {
            curr = curr.right;
            if (curr.right === null) {
                curr = this.root;
                curr = curr.left;
                if (curr.left != null && curr.right != null) {
                count = count + 3;
                } else if (curr.left != null && curr.right === null) {
                    count = count + 2;
                } else if (curr.right != null && curr.left === null) {
                    count = count + 1;
                } else {
                    count = count;
                }
                console.log(count);
                curr = curr.left;
            }
        }
    }
    return count;
}