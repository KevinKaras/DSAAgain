// Make a function that takes an array with the array having as many unique values as the length of the array
// ex: [1, 2, 3, 4]
// When given an array like [1, 3, 3, 4]
// return the number in the array that is a duplicate, added with the number that it should've been

function findDup(arr){
    let seen = new Map()
    let dupe;
    let missing;

    for(let i = 0; i < arr.length; i++){
        let current = arr[i]

        if(!seen.has(current)){
            seen.set(current, 1)
        } else {
            seen.set(current, seen.get(current) + 1)
        }
    }
    
    for(let j = 1; j <= arr.length; j++){
        
        if(seen.get(j) === undefined){
            missing = j
        } else if(seen.get(j) === 2){
            dupe = j
        }
    }
    return missing + dupe
}

let arr = [1,3,3,4,5,6,7,8,9,10]

console.log(findDup(arr))  // 5