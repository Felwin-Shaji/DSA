class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    prepent(value) {
        const node = new Node(value);
        // console.log(node)
        if (this.head == null) {
            this.head = node;
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    appent(value) {
        const node = new Node(value)
        console.log(node)
        if (this.head == null) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next !==null) {
                prev = prev.next;
            }
            prev.next = node
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return 
        } 

        if(index === 0){
            this.prepent(value)
        }else {
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            } 
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removedNode
        if(index === 0){
            removedNode = this.head;
            this.head = this.head.next;
        }else{
            let current = this.head;
            while(current){
                 current = current.next
            }
        }
        this.size--
        return removedNode.value

    }

    removeValue(value){
        if(this.size==0){
            return null
        }
        let removedNode
        if(this.head.value == value){
            this.head = this.head.next
            this.size--
            return value
        }else{
            let prev = this.head;
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                removedNode = prev.next
                prev.next = removedNode.next 
                this.size--
                return value
            }
            return null
        }
    }

    search(value){
        if(this.size==0){
            return `the list is Empty`
        }
        let index = 0;
        let curr = this.head;
        while(curr){
            if(curr.value == value){
                return `the ${value} is at ${index}`
            }
            curr = curr.next
            index++
        }
        return `there is no such element in the list`
    }
    
    reaverse(){ 
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next;
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    print() {
        if (this.size == 0) {
            console.log("The list is Empty")
        } else {
            let current = this.head;
            let listValues = ""
            while (current) {
                listValues += current.value + " -> "
                current = current.next
            }
            console.log(listValues + "null");
        }
    }
}

let arr = [1,3,4,5,6,7,8]
const list = new LinkedList()

for(let i=0;i<arr.length;i++){
    list.appent(arr[i])
}

list.print()
 list.reaverse()
// list.removeFrom(4)
list.print()
