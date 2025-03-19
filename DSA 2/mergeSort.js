function mergSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    console.log(mid);
    

    console.log(arr.slice(mid));
    let left = mergSort(arr.slice(0,mid));
    let right = mergSort(arr.slice(mid));

    

    return merge(left,right);

}

function merge(left,rigth){
    let sortedArr = []

    while(left.length && rigth.length){
        if(left[0]<rigth[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(rigth.shift())
        }
    }
    return [...sortedArr,...left,...rigth]; 
}
let arr= [ 38,27,43,3,9,82,10]
console.log(mergSort(arr));
