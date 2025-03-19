class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Linkedlist {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size == 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.head==null){
            this.head = node;
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.head == null){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node;
            this.tail = node    
        }

        this.size++
    }

    removeFromFrond(){
        let removedNode 
        if(this.size === 0 ){
            return null
        }else{
         removedNode = this.head;
         this.head = this.head.next  
        }
        this.size--
        return removedNode.value
    }

    print(){
        let currt = this.head;
        let listValue = ""
        while(currt){
            listValue+=currt.value + " -> "
            currt = currt.next
        }
        console.log(listValue + "null")
    }
}

module.exports = Linkedlist
