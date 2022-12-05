// Trees To Do 1
// Let’s build a basic Binary Search Tree. These challenges start with the following reference definitions:

class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    

    //Add
    add(val){
        if (this.root === null){
            this.root = new BTNode(val);
        }
        else {
            this.insert(val, this.root);
        }
    }
    insert(val, node) {
        if (val === node.val){
            newNode = new BTNode(val);
            newNode.left = node.left;
            node.left = newNode;
        }
        else if (val < node.val){
            if ( node.left === null){
                node.left = new BTNode(val);
            }
            else {
                this.insert(val, node.left);
            }
        }
        else {
            if(node.right === null) {
                node.right = new BTNode(val);
            }
            else{
                this.insert(val, node.right);
            }
        }
    }

    //search for value
    contains(value) {
        return this.findValueinBT(value, this.root);
    }
    findValueinBT(val, node){
        if (node === null) {
            return false;
        }        
        else if (val === node.val){
            return true;
        }
        else if ( val < node.val ){
            return this.findValueinBT(val, node.left);
        }
        else if ( val > node.val ){
            return this.findValueinBT(val, node.right);
        }
        else {
            return false;
        }
    }

    // find smallest number
    min(){
        return this.smallestValue(this.root);
    }
    smallestValue(node) {
        if(node === null) {
            return null;
        }
        else if ( node.left === null ){
            return node.val;
        }
        else {
            return this.smallestValue(node.left);
        }
    }

    max(){
        return this.largestValue(this.root);
    }
    largestValue(node){
        if(node === null){
            return node.val;
        }
        else if ( node.right === null ){
            return node.val;
        }
        else {
            return this.largestValue(node.right);
        }
    }

    size(){
        return this.countNodes(this.root);
    }
    countNodes(node){
        if (node === null){
            return 0;
        }
        else if ( node.right === null && node.left === null ){
            return 1;
        }
        else {
            const right = this.countNodes(node.right);
            const left = this.countNodes(node.left);
            return left + right + 1;
        }
    }

    isEmpty(){
        if (this.root === null){
            return true;
        }
        else {
            return false;
        }
        // or return this.root === null (returns true or false)
    }

    sumAll(){
        return this.sumNodes(this.root);
    }
    sumNodes(node){
        if (node === null){
            return 0;
        }
        else if ( node.right === null && node.left === null ){
            return node.val;
        }
        else {
            const right = this.sumNodes(node.right);
            const left = this.sumNodes(node.left);
            return left + right + node.val;
        }
    }

    printInOrder(){
        this.inOrder(this.root);
    }
    inOrder(node){
        if( node === null){
            return;
        }
        if (node.left != null){
            this.inOrder(node.left);
        }
        console.log(node.val);
        if (node.right != null){
            this.inOrder(node.right);
        }
    }

    printPreOrder(){
        this.preOrder(this.root);
    }
    preOrder(node){
        if( node === null){
            return;
        }
        console.log(node.val);
        if (node.left != null){
            this.preOrder(node.left);
        }
        if (node.right != null){
            this.preOrder(node.right);
        }
    }

    printPostOrder(){
        this.postOrder(this.root);
    }
    postOrder(node){
        if( node === null){
            return;
        }
        if (node.left != null){
            this.postOrder(node.left);
        }
        if (node.right != null){
            this.postOrder(node.right);
        }
        console.log(node.val);
    }

}

// BST.prototype.toString= ()=>{return "hello";};

treeOne = new BST();

treeOne.add(5);
treeOne.add(1);
treeOne.add(2);
treeOne.add(3);
treeOne.add(4);
treeOne.add(9);
treeOne.add(11);
treeOne.add(13);
treeOne.add(15);

// console.log(treeOne.contains(9));
// console.log(treeOne.contains(20));

// console.log("min", treeOne.min());
// console.log("max", treeOne.max());
// console.log("size", treeOne.size());

// // console.log("inOrder");
// // treeOne.printInOrder();

// console.log("PostOrder");
// treeOne.printPostOrder();

// console.log("PreOrder");
// treeOne.printPreOrder();
console.log("sum", treeOne.sumAll());

// BST: Add
// Create an add(val) method on the BST object to add new value to the tree. This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate values.

// BST: Contains
// Create a contains(val) method on BST that returns whether the tree contains a given value. Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.

// BST: Min
// Create a min() method on the BST class that returns the smallest value found in the BST.

// BST: Max
// Create a max() BST method that returns the largest value contained in the binary search tree.

// BST: Size
// Write a size() method that returns the number of nodes (values) contained in the tree.

// BST: Is Empty
// Create an isEmpty() method to return whether the BST is empty (whether it contains no values).