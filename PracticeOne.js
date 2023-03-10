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

    // height(){
    //     return this.treeheight(this.root);
    // }
    // treeheight(node){
    //     if (node === null){
    //         return 0;
    //     }
    //     else if ( node.right === null && node.left === null ){
    //         return 1;
    //     }
    //     else {
    //         const right = this.treeheight(node.right);
    //         const left = this.treeheight(node.left);
    //         if (right == left ){
    //             return left + 1 ;
    //         }
    //         else if (right > left) {
    //             return right + 1;
    //         }
    //         else { 
    //             return left + 1;
    //         }
    //     }
    // }

    // height v2
    height(){
        if ( this.root != null) {
            return this.heightOfTree(this.root, 1);
        }
        else {
            return 0;
        }
    }
    heightOfTree(node, depth){
        if ( node.left === null && node.right === null ) {
            return depth;
        }
        else if ( node.left === null ){
            const nextDepth = depth + 1;
            const right = this.heightOfTree(node.right, nextDepth);
            return right;
        }
        else if ( node.right === null ){
            const nextDepth = depth + 1;
            const left = this.heightOfTree(node.left, nextDepth);
            return left;
        }
        else {
            const nextDepth = depth + 1;
            const right = this.heightOfTree(node.right, nextDepth);
            const left = this.heightOfTree(node.left, nextDepth);
            if ( right === left ){
                return left;
            }
            else if ( right > left ) {
                return right;
            }
            else {
                return left;
            }
        }
    }
    // height(){
    //     return this.root !== null ? this.heightOfTree(this.root, 1) : 0;
    // }
    // heightOfTree(node, depth){
    //     if (node.left === null && node.right === null) {
    //         return depth;
    //     } else {
    //         const right = node.right ? this.heightOfTree(node.right, depth + 1) : 0;
    //         const left = node.left ? this.heightOfTree(node.left, depth + 1) : 0;
    //         return right > left ? right : left;
    //     }
    // }

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

    isBalanced(){
        if ( this.root != null) {
            let values = this.branchHeights(this.root, 1,1);
            if (values[0] === values[1]){
                return true;
            }
            else if ( values[0] + 1 === values [1]) {
                return true;
            }
            else if ( values[0] - 1 === values [1]) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return 0;
        }
    }
    branchHeights(node, rDepth, lDepth){
        const nextRDepth = rDepth + 1;
        const nextLDepth = lDepth + 1;
        if ( node.left === null && node.right === null ) {
            return [rDepth, lDepth];
        }
        else if ( node.left === null ){
            const right = this.branchHeights(node.right, nextRDepth, lDepth);
            return [right[0], lDepth];
        }
        else if ( node.right === null ){
            const left = this.branchHeights(node.left, rDepth, nextLDepth);
            return [rDepth, left[1]];
        }
        else {
            const right = this.branchHeights(node.right, nextRDepth, nextLDepth);
            const left = this.branchHeights(node.left,nextRDepth, nextLDepth);
            return [ right[0], left[1]];
        }
    }

}

// BST.prototype.toString= ()=>{return "hello";};

let treeOne = new BST();
treeTwo = treeOne;
treeThree = treeTwo;

// treeOne = null;
// treeThree = null;
// treeTwo = null;

treeOne.add(5);
treeOne.add(1);
treeOne.add(2);
treeOne.add(3);
treeOne.add(4);
treeOne.add(9);
treeOne.add(11);
treeOne.add(13);
treeOne.add(15);

treeOne.printInOrder();

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
// console.log("sum", treeOne.sumAll());

// console.log("height", treeOne.height());
// console.log("isBalanced", treeOne.isBalanced());


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

// Tree Two
// BST: Height
// Build a height() method on the BST object that returns the total height of the tree – the longest sequence of nodes
// from the root node to leaf node.

// BST: Is Balanced
// Write isbalanced() method to indicate whether a BST is balanced. For this challenge, consider a tree balanced when all 
// nodes are balanced. A BTNode is balanced if heights of its left subtree and right subtree differ by at most one.

// Array to BST
// Given an array that is sorted in ascending order, return a BST object that is height-balanced.

// Closest Common Ancestor
// Given a BST and two contained values, return the value of the closest common ancestor node. For each node, the chain up 
// to root (including self) represents that node’s ancestry. Return the value of the node in both ancestor chains that is closest to both.
