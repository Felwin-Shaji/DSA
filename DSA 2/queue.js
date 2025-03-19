///////////////////////////////Queue using Linked list 


///////////////////////////////Queue using array
// class Queue{
//     constructor(){
//         this.items = [];
//     }
//     enqueue(element){
//         this.items.push(element)
//     }

//     dequeue(){
//         return this.items.shift();
//     }

//     isEmpty(){
//         return this.items.length === 0; 
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0];
//         }else{
//             return null
//         }
//     }

//     getSize(){
//         return this.items.length
//     }

//     print(){
//         console.log(this.items.toString())
//     }
// }

// const queue = new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)
// queue.enqueue(60)
// queue.print()

/////////////Queue using stack////////////
// class Queue{
//     constructor(){
//         this.stack1 = [];
//         this.stack2 =[];
//     }

//     emqueue(value){
//         this.stack1.push(value)
//     }

//     dequeue(){
//         if(this.stack2.length===0){
//             if(this.stack1.length ===0){
//                 return "Stack is Empty"
//             }

//             while(this.stack1.length > 0){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2.pop()
//     }
// }

///////////////////////stack using queue/////////
class StackUsingQueue{
    constructor(){
        this.q1 = [];
        this.q2 = [];
    }

    push(value){
        this.q1.push(value);

        while(this.q1.length > 0){
            this.q2.push(this.q1.shift())
        }
        [this.q1,this.q2] = [this.q2,this.q1]
    }

    display(){
        console.log(q1);
    }
}

const stack = new StackUsingQueue()
stack.push(29)
stack.display()