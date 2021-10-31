
// Implement a function that takes in an array of opening and closing brackets and return true if the opening brackets have correctly 
// placed pairs of opening/closing brackets

// [   [ , [ , [ , ] , ] , ]   ]   => TRUE
// [   [ , { , ] , }           ]   => FALSE



function ValidParen(array){
    if(array === undefined){
        return false
    }
    let map = {
        "[" : "]",
        "{" : "}",
        "(" : ")"
    }
    

    let stack = [];
    let i = 0

    while(i < array.length){

        if(array[i] in map){

            stack.push(array[i])
            i++

        } else if(!(array[i] in map)){

            let last = stack.pop()
            if(map[last] === array[i]){
                i++
            } else {
                return false
            }
        }
    }
    if(stack.length === 0){
        return true
    }
}

console.log(ValidParen(["[","[","[","]","]","]"]))

console.log(ValidParen(["[","{","[","]","}", "]"]))
console.log(ValidParen(["[","{","}","]","[", "]"]))
console.log(ValidParen(["[","{","[","}"]))
console.log(ValidParen())




