function maxSubArray(nums) {
    let ans = nums[0];
    let cur_sum=0;
    
    for(let i=0;i<nums.length;i++){
        if (cur_sum<0) cur_sum=0;
        
        cur_sum+=nums[i];
        if(cur_sum>ans) ans=cur_sum;
    }
    
    return ans;
    
}