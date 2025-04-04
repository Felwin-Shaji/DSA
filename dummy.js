class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.rigth = null;
    }
}

class Bst{
    constructor(){
        this.root = null;
    }

    insert(value){
        const node = new Node(value);
        if(this.root==null){
            this.root = node;
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value < root.value){
            if(root.left==null){
                root.left = node;
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.rigth==null){
                root.rigth = node
            }else{
                this.insertNode(root.rigth,node)
            }
        }
    }

    search
}

const bst = new Bst()

bst.insert(20);
bst.insert(10);
bst.insert(45);
bst.insert(27);

console.log(bst.root);
