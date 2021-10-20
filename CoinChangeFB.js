// [1, 3, 4, 5] 
// amount = 7
// answer = 2

function coinChange(array, amount){

    let dp = []
    for(let i = 0; i < amount + 1; i++){
        dp.push(amount+1)
    }
    console.log("dp", dp)
    dp[0] = 0 

    for(let i = 1; i < (amount + 1); i++){
        console.log("i", i)
        for(let j = 0; j < array.length; j++){
            console.log("j", j)

            if((i - array[j]) >= 0){
                dp[i] = Math.min(dp[i], 1 + dp[i - array[j]])
                console.log("current dp", dp[i])
            }

        }


    }
    if(dp[amount] != amount + 1){
        return dp[amount]
    } else {
        return -1
    }
    
}


console.log(coinChange([3, 5], 7))