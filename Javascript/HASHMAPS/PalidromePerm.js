// given a string, check to see if it is a permutation of a palindrome
// ignore casing or non-letter characters

const { on } = require("events")
const { send } = require("process")

let input = "taco cat"


function checkPermPali(inStr){

    let seen = new Map()
    let i = 0
    while(i < inStr.length){

        let cur = inStr[i]
        
        if(cur === " "){
            i++
            continue
        }
        console.log("cur", cur)

        if(!seen.has(cur) && cur !== " "){
            seen.set(cur, 1)
            i++
        } else {
            seen.set(cur, seen.get(cur) + 1)
            i++
        }


    }

    let onlyOne = 0
    seen.forEach((key, value) => {
        
        if(onlyOne === 0 && key === 1){
            onlyOne += 1
        } else if(onlyOne > 0 && key === 1){
            
            return false
        }

    })
    console.log(onlyOne, seen)
    if(onlyOne ){
        return true
    }


}

console.log(checkPermPali("racecar"))