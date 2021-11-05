// given two strings, check if one string is a permutation of another

let str1 = "xyz"

let str2 = "yxz"


function checkIfPerm(str1, str2){

    let lowStr1 = str1.toLowerCase()
    let lowStr2 = str2.toLowerCase()
    let finalStr1 = [...lowStr1].sort()
    let finalStr2 = [...lowStr2].sort()

    for(let i = 0; i < finalStr1.length; i++){

        
        if(finalStr1[i] !== finalStr2[i]){
        return false
        } 
    }

    return true


}

console.log(checkIfPerm(str1, str2))