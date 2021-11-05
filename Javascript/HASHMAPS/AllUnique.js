// check to see if a sentence or string input has a unique set of characters without duplicates

function checkUniqueString(string){
    let seen = new Map()
    let newArray = string.split("")

    for(let i = 0; i < newArray.length; i++){

        let cur = newArray[i]

        if(!seen.has(cur)){
            seen.set(cur, 1)
        } else {
            console.log(seen)
            return false
        }

    }
    console.log(seen)
    return true

}

console.log(checkUniqueString("true"))

console.log(checkUniqueString("This is false"))

console.log(checkUniqueString("is true"))

console.log(checkUniqueString("isnt not true"))