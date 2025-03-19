// ///////////////////////////////////////stack using linked List /////////////
// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// } 

// class Stack {
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     push(value){
//         const node = new Node(value);
//         if(this.head===null){
//             this.head = node
//         }else{
//             node.next = this.head;
//             this.head = node
//         }
//         this.size++
//     }

//     pop() {
//         if (!this.head) {
//             return "The Stack is Empty";
//         }
//         let poppedNode = this.head;
//         this.head = this.head.next;
//         this.size--;
//         return poppedNode.value;
//     }
    
//     peek(){
//         return this.head ? this.head.value : "The Stack is Empty"
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     print(){
//         let currt = this.head;
//         let stackValue = ""
//         if(!this.head){
//             console.log("The Stack is Empty")
//         }else{
//             while(currt){
//                 stackValue+=currt.value+" -> ";
//                 currt = currt.next
//             }
//             console.log(stackValue+ "null")

//         }
//     }
// }

// const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// stack.print()




////////////////////Stack Using array//////////////////////////////
// class Stack {
//     constructor() {
//         this.stack = []
//     }
//     push(value) {
//         this.stack.push(value)
//     }
//     pop() {
//         this.stack.pop()
//     }
//     peek() {
//         return this.stack[this.stack.length - 1]
//     }
//     getSize() {
//         return this.stack.length
//     }
//     print() {
//         console.log(stack)
//     }
// }

// const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.print()
// stack.pop()
// stack.print()
// console.log(stack.peek());


//Q7: Write a function to reverse a string using a stack in JavaScript.

