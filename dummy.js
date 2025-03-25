class MaxHeap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value);
        this.bubbleUp(this.heap.length-1)
        }

    bubbleUp(index){
        while(index>0){
                let parentIndex = Math.floor((index-1)/2);
                if(this.heap[parentIndex]<=this.heap[index]) break;
                [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]];
                index = parentIndex
        }
    }

    delete(){
        if(this.heap.length===0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    heapifyDown(index){
        while(true){
            let largest = index;
            let left = (2*index)+1;
            let rigth = (2*index)+2;
            if(left<this.heap.length && this.heap[left]<this.heap[largest]){
                largest = left
            }
            if(rigth<this.heap.length && this.heap[rigth]<this.heap[largest]){
                largest = rigth;
            }
            if(largest==index) break;

            [this.heap[index],this.heap[largest]] = [this.heap[largest],this.heap[index]];
            index = largest
        }
    }
}

const max = new MaxHeap();

max.insert(10);
max.insert(20);
max.insert(30);
max.insert(10);
max.insert(6);
max.delete()
console.log(max.heap)