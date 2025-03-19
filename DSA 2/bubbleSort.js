function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let flag = 0
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]<arr[j+1]){
                temp = arr[j]
                arr[j]=arr[j+1];
                arr[j+1]=temp
                flag = 1
            }
        }
        if(flag==0){
            break
        }
    }
    console.log(arr)
}

let arr = [1,3,2,51,4,6,5,6]
bubbleSort(arr)