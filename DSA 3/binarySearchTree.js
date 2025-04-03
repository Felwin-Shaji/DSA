class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    Insert(value){
        const node = new Node(value); 
        if(this.isEmpty()){
            this.root = node;
        }else{
            this.insertNode(this.root,node);
        }
    }

    insertNode(root,node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node;
            }else{
                this.insertNode(root.right,node)
            }
        }       
    }

    search(root,value){
        if(!root){
            return false;
        }else{
            if(root.value === value){
                return true
            }else if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }        
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(root){//// BFS(Breadht first Search)
        let queue = []
        queue.push(this.root);
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    minValue(root){
        if(!root.left){
            return root.value
        }else{
            return this.minValue(root.left)
        }
    }

    maxValue(root){
        if(!root.right){
            return root.value
        }else{
            return this.maxValue(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root===null) return root;

        if(value < root.value){
            root.left = this.deleteNode(root.left,value); 
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value);
        }else{
            if(!root.left && !root.right){
                return null
            }

            if(!root.left){
                return root.rigth
            }else if(!root.right){
                return root.left
            }

            root.value = this.min(root.rigth);
            root.rigth = this.deleteNode(root.rigth,root.value)
        }
        return root;
    }

}

const bst = new BinarySearchTree()
// console.log(bst.isEmpty())
bst.Insert(10);
bst.Insert(5);
bst.Insert(15);
bst.Insert(3);
bst.Insert(7);

bst.levelOrder()
// console.log(JSON.stringify(bst, null, 2));


//1..find closest element 
//2.is BST
//3.2nd largest
//4.kth largest 


