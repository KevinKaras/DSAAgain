// [1, 3, 4, 5] 
// amount = 7
// answer = 2

function coinChange(array, amount){

    let dp = []
    for(let i = 0; i < amount + 1; i++){
        dp.push(amount+1)
    }
    
    dp[0] = 0 

    for(let i = 1; i < (amount + 1); i++){
        
        for(let j = 0; j < array.length; j++){
            

            if((i - array[j]) >= 0){
                dp[i] = Math.min(dp[i], 1 + dp[i - array[j]])
                
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