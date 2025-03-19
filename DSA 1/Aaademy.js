class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructot() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    prepend(value) {
        const node = new Node(value)
        if (this.head == null) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head;
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.head === null){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node
        }
        this.size++
    }

    printForword() {
        if (this.size == 0) {
            console.log("List is empty");
        } else {
            let curr = this.head;
            let list = "";
            while (curr) {
                list += `${curr.value}<->`;
                curr = curr.next;
            }
            console.log(list);
        }
    }

    printBackWord() {
        if (this.size == 0) {
            console.log("List is empty");
        } else {
            let curr = this.tail
            let list = ""
            while (curr) {
                list += `${curr.value}<->`;
                curr = curr.prev;
            }
            console.log(list);
        }
    }
}

const list = new LinkedList()

list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.printForword()
list.printBackWord()
