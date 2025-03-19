const map = new Map([["a", 1], ["b", 2]]);                // a & b are the keys and 1 & 2 are the corresponding value 

map.set("c",3)                                            // to insert a new element to the map , "c" is the kay and 3 is the value 
                                     
console.log(map.has("c"))                                 // it check whether the kay has exist in the map or not 

map.delete("c")                                           //to delete a spesific element form map , 

console.log(map.size)                                    // this property gives the size of the map

map.clear()                                              // is will clear the entire map 

for(let [key,value] of map){
    console.log(key ," : ", value)                       // iteration is more easy than object
}

