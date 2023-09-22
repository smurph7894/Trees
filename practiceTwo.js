class Node {
    constructor (data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor (){
        this.root = null;
    }

    insert(data){
        let newNode = new Node(data);
        if(this.root === null){
            this.root = newNode;
        }
        this.insertNode(node, newNode);
    }

    insertNode(node, newNode){
        if(newNode < node.data){
            if(node.left === null){
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if(node.right === null){
                node.right = newNode;
            }else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    remove(data){
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, valueToRemove){
        if(node===null){
            return null;
        }
        else if(valueToRemove < node.data){
            node.left = this.removeNode(node.left, valueToRemove);
            return node;
        }
        else if(valueToRemove < node.data){
            node.right = this.removeNode(node.right, valueToRemove);
            return node;
        }
        else{
            if(node.left === null && node.right === null){
                node =node.right;
                return node;
            }
            if(node.left === null){
                node = node.right;
                return node;
            }
            else if(node.right === null){
                node = node.left;
                return node;
            }
            let aux = this.findMin(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    getRoot(){
        return this.root;
    }

    findMin(node){
        if(node.left ===null){
            return node;
        } else{
            return this.findMin(node.left);
        }
    }

    preOrder(node){
        if(node !==null){
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    inOrder(node){
        if( node !==null){
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }

    postOrder(node){
        if( node !== null){
            this.postOrder(this.left);
            this.postOrder(this.right);
            console.log(node.data);
        }
    }

    search(node, data){
        if(node === null){
            return null;
        }
        else if(data < node.data){
            return this.search(node.left, data);
        }
        else if(data > node.data){
            return this.search(node.right, data);
        }
        else{
            return node;
        }
    }



}