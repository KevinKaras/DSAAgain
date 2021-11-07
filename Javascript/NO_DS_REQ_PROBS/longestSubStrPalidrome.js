// find largest substr palindrome


function isPalindrome(str){
    let split = str.split("")
    let revd = split.reverse()
    let final = revd.join("")
    return str === final
}


function findLargestPalindrome(str){
    let best_len = 0;
    let best_str = ""
    let n = str.length
    for(let L = 0; L < n; L++){
        for(let R = L; R < n; R++){
            let testStrLen = R - L + 1
            let testStr = str.substr(L, testStrLen)
            if(isPalindrome(testStr) && testStrLen > best_len){
                best_str = testStr
                best_len = testStrLen
            }
        }
    }
    return best_str
}