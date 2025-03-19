// function selectioSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let smll = i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[smll]){
//                 smll = j
//             }
//         }
//         let temp = arr[i];
//         arr[i]=arr[smll];
//         arr[smll] = temp;
//     }
//     return arr
// }

 let arr = [65,32,12,46,78,1]
// console.log(selectioSort(arr))

function largestnum(arr){
    let temp = 0
    for(let i=0;i<arr.length;i++){
        let smll = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[smll]){
                smll = j;
            }
        }
        temp = arr[smll]
    }
    return temp
}

console.log(largestnum(arr))

