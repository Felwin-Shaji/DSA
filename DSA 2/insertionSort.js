function insertionSort(arr){
    for(let i=1;i<arr.length;i++){        
        let temp = arr[i];
        let j = i-1
        while(j<=arr.length && arr[j]>temp){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1] = temp
    }
    console.log(arr)
}

let arr = [1,4,3,5,2,9,8]
insertionSort(arr)

