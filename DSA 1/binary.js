// function binarySearch(nums, target) {
//     let start = 0
//     let end = nums.length -1
//     while (start <= end) {
//         let middle = Math.floor((end + start) / 2);
//         if (nums[middle] === target) {
//             return middle
//         } else if (nums[middle] < target) {
//             start = middle + 1
//         } else {
//             end = middle - 1
//         }
//     }
//     return -1
// }

// console.log(binarySearch([1, 2, 4, 6, 8, 10, 11, 34], 8));


//Find the first occurrence of a target element in a sorted array with duplicate values.
function binarySearchFirst(nums, target) {
    let start = 0, end = nums.length - 1, first = -1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (nums[middle] === target) {
            first = middle;
            end = middle - 1;
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return first;
}

function binarySearchLast(nums, target) {
    let start = 0, end = nums.length - 1, last = -1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (nums[middle] === target) {
            last = middle;
            start = middle + 1;
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return last;
}
function countOccurrences(nums, target) {
    let first = binarySearchFirst(nums, target);
    let last = binarySearchLast(nums, target);
    return first === -1 ? 0 : last - first + 1;
}
let arr = [1, 2, 2, 2, 3, 3, 3, 4, 5, 6];
console.log(countOccurrences(arr, 3)); 
console.log(countOccurrences(arr, 2))
console.log(countOccurrences(arr, 5)); 
console.log(countOccurrences(arr, 7)); 


///////////////////////////linear Search
//O(n)t
//O(1)s
// function linearSearch(nums,target){
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] === target){
//             return `${i} ___ ${nums[i] }`
//         }
//     }
//     return -1
// }

// console.log(linearSearch([2,3,4,1,5,6,7],5))