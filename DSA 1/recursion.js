////////////////////////////////////////////////////////////////////////Fibonacci  (1)
// function recursiveFibonacci(n){
//     if(n < 2 ){
//         return n
//     }
//     return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)

// }

// console.log(recursiveFibonacci(0));  // 0
// console.log(recursiveFibonacci(3));  // 1
// console.log(recursiveFibonacci(6));  // 8

//////////////////////////////////////////////////////////////////////////factorial  (2)
// function factorial(n){
//     if(n<=1){
//         return n
//     }

//     return n*factorial(n-1)
// }

// console.log(factorial(4)); 
////////////////////////////////////////////////////////////////////////////////print n to 1  (3)
// function nToOne(n){
//     if(n<=1){
//         console.log(n)
//         return n
//     }
//     console.log(n," ,");
//     return nToOne(n-1)
// }

// nToOne(5)

// function nToOne(n) {
//     if (n <= 1) {
//         console.log(n); // Print last number without a comma
//         return;
//     }
//     process.stdout.write(n + ", "); // Print numbers in one line
//     nToOne(n - 1);
// }

// nToOne(5);

// function printNToOne(n) {
//     if (n < 1) return;  // Base condition: Stop when n is less than 1
//     console.log(n);  // Print the current number
//     printNToOne(n - 1);  // Recursive call with n-1
// }

// printNToOne(5);

////////////////////////////////////////////////////////////////////////////Sum of First N Natural Numbers  (4)

// function sum(n){
//     if(n<1){
//         return n
//     }
//     return n+sum(n-1);
// }

// console.log(sum(4))


////////////////////////////////Reverse a String
// function reverse(str){ 
//    if(str == ""){
//     return str
//    }

//    return reverse(str.slice(1))+str[0]
// }

// console.log(reverse("hello"));



//////////////////////////////////////////////////////////////////////////Power of a Number  (5)
// function pwrOfNo(n,x){
//     if(x<=1){
//         return n;
//     }
//     return n*pwrOfNo(n,x-1);
// }

// console.log(pwrOfNo(2,3))

////////////////////////////////////////////////////////////Check if a string is a palindrome using recursion  (6)

// function palindrome(str, start = 0, end = str.length - 1) {
//     if (start >= end) return true
//     if(str[start]!=str[end]) return false
//     return  palindrome(str, start + 1, end - 1)
// }
// console.log(palindrome("oo"))


//Binery Search 

// function binerySearch(arr,target,start = 0,end = arr.length-1){
//     if(start >end){
//         return -1
//     }

//     let middle = Math.floor((start+end)/2)

//     if(arr[middle]== target){
//         return middle
//     }else if(arr[middle] < target){
//         return binerySearch(arr,target,start = middle+1,end)
//     }else{
//         return binerySearch(arr,target,start,end = middle-1)
//     }

// }
// let arr = [1,2,3,4,5,6,7,8]
// let target = 5
// console.log(binerySearch(arr,target))


function factorial(n){
    if(n<=1){
        return n;
    }
    return n*factorial(n-1);
}
console.log(factorial(4));




