// class HashTable{
//     constructor(size){
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash(key){
//         let total = 0;
//         for(let i=0;i<key.length; i++){
//             total += key.charCodeAt(i);
//         }
//         return total % this.size 
//     }

//     set(key,value){
//         const index = this.hash(key);
//         this.table[index] = value
//     }

//     get(key){
//         const index = this.hash(key);
//         return this.table[index];
//     }

//     remove(key){
//         const index = this.hash(key);
//         this.table[index]= undefined;
//     }

//     display(){
//         for(let i=0;i< this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i , this.table[i])
//             }
//         }
//     }

// }

// const table = new HashTable(50);
// table.set("name","Felwin")
// table.set("age",19);

// table.display()

// console.log("",table.get("age"))




/////////////////////////////////////////////////////HASH TABLE WITH PRAVENTING COLLISHING USING CHAINING 
// class HashTable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }
    
//     hash(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }
    
//     set(key, value) {
//         const index = this.hash(key);
//         let bucket = this.table[index];
//         if (!bucket) {
//             this.table[index] = [[key, value]];
//         } else {
//             let sameKey = bucket.find(item => item[0] === key);
//             if (sameKey) {
//                 sameKey[1] = value; // Update existing key
//             } else {
//                 bucket.push([key, value]); // Add new key-value pair
//             }
//         }
//     }
    
//     get(key) {
//         const index = this.hash(key);
//         let bucket = this.table[index];
//         if (!bucket) {
//             return "Key not found";
//         } else {
//             let sameKey = bucket.find(item => item[0] === key);
//             if (sameKey) {
//                 return sameKey[1];
//             }
//             return "Key not found";
//         }
//     }
    
//     remove(key) {
//         const index = this.hash(key);
//         let bucket = this.table[index];
//         if (bucket) {
//             let sameKeyIndex = bucket.findIndex(item => item[0] === key);
//             if (sameKeyIndex !== -1) { // If key exists
//                 let removedValue = bucket[sameKeyIndex][1];
//                 bucket.splice(sameKeyIndex, 1); // Remove the item from bucket
//                 if (bucket.length === 0) { // Clean up empty bucket
//                     this.table[index] = undefined;
//                 }
//                 return removedValue;
//             }
//         }
//         return "Key not found";
//     }
    
//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(`Index ${i}: ${JSON.stringify(this.table[i])}`);
//             }
//         }
//     }
// }

// // Test the implementation
// const table = new HashTable(5);
// table.set("name", "felwin");
// console.log(table.get("name")); // Output: "felwin"
// table.set("mane", "felwinnn");
// table.set("age", "22");
// console.log(table.get("mane")); // Output: "felwinnn"
// console.log(table.remove("age")); // Output: "22"
// table.display(); // Output: Index 1: [["mane","felwinnn"]], Index 2: [["name","felwin"]]
// console.log(table.get("age")); // Output: "Key not found"

////////////////////////////////////////////////////////Hash table with Linear probing/////////////;
// class HashTableLinear{
//     constructor(size){
//         this.table = new Array();
//         this.size = size;
//     }

//     hash(key){
//         // let total = 0;
//         // for(let i=0;i<key.length;i++){
//         //     total+=key.charCodeAt()
//         // }
//         return key % this.size
//     }

//     insert(key,value){
//         let index = this.hash(key);

//         while(this.table[index] !== undefined && this.table[index][0] !== key){
//             index = (index+1)%this.size
//         }
//         this.table[index] = [key,value];
//     }

//     get(key){
//         let index = this.hash(key);

//         while(this.table[index]!==undefined){
//             if(this.table[index][0]==key){
//                 return this.table[index][1];
//             }
//             index = (index+1) % this.size
//         }
//         return undefined;
//     }

//     remove(key){
//         let index = this.hash(key);

//         while(this.table[index]!== undefined){
//             if(this.table[index][0]==key){
//                 this.table[index]=undefined;
//                 return true
//             }
//             index = (index+1)%this.size;
//         }
//         return false
//     }
//     display() {
//         console.log(this.table);
//       }
// }

// const hashTable = new HashTableLinear(7);
// hashTable.insert(10, "Apple");
// hashTable.insert(20, "Banana");
// hashTable.insert(30, "Cherry");
// hashTable.insert(17, "Mango"); 
// hashTable.display();
// console.log(hashTable.get(10)); // Output: Apple
// console.log(hashTable.get(30)); // Output: Cherry
// console.log(hashTable.get(17)); // Output: Mango
// hashTable.remove(20);
// hashTable.display();

////////////////////////////////////////////////////////Hash table with Quadratic probing/////////////;
