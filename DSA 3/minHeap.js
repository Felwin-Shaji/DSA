class MaxHeap{
    constructor(){
        this.heap = [];
    }

    insert(value){
        this.heap.push(value);
        this.bubbleUp(this.heap.length-1)
    }

    bubbleUp(index){
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2);
            if(this.heap[parentIndex]<=this.heap[index]) break;
            this.swap(index,parentIndex);
            index = parentIndex
        }
    }

    deleteRoot(){
        if(this.heap.length === 0 ) return null;
        if(this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root
    }

    heapifyDown(index){
        while(true){
            let largest  = index;
            let left = (2*index)+1;
            let right = (2*index)+2;
            if(left<this.heap.length && this.heap[left]<this.heap[largest]){
                largest = left;
            }
            if(right<this.heap.length && this.heap[right]<this.heap[largest]){
                largest = right;
            }
            if(largest === index) break;
``
            this.swap(index,largest);
            index = largest
        }
    }

    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }

    printHeap(){
        console.log(this.heap);
    }
}