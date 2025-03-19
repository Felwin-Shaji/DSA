class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinledList{
    constructor(value){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    prepend(value){
        const node = new Node(value)
        console.log(node)
        if(this.head==null){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head
             this.head = node
        }
    }

    append(value){
        const node = new Node(value)
        if(this.head==null){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeFormFrond(){
        let removedNode 
        if(this.size==0){
            return null
        }else{
            removedNode = this.head
            this.head = this.head.next
        }
        this.size--
        return removedNode.value
    }

    removeFormEnd(){
        let removedNode
        if(this.size== 0 ){
            return null
        }
        let value = this.tail.value
        if(this.size===1){
            this.head = null
            this.tail = null
        }else{
            let prev = this.head
            while(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null;
            this.tail = prev
        }
        this.size--
    }


}

const list = new LinledList()
