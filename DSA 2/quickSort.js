//////impliment the quick sort in js //////////////////// 
function quickSort(arr){
    if(arr.length <=0){
        return arr
    }

    const pivot = arr[0];
    const left = [];
    const rigth = [];

    for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            rigth.push(arr[i])
        }
    }

    return [...quickSort(left),pivot,...quickSort(rigth)]

}
let arr = [20,14,35,3,7,5,8]

console.log(quickSort(arr));