// given a string, replace all the spaces in the string with %20

function replaceAllSpaces(inStr) {

    let returnArray = inStr.split("")
    for(let i = 0; i < returnArray.length; i++){
        if(returnArray[i] === " "){
            returnArray[i] = "%20"
        }
    }
    return returnArray.join("")

}

console.log(replaceAllSpaces("Hel lo"))