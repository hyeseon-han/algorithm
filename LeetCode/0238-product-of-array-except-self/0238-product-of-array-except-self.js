/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(nums.length).fill(1);

    let left = 1;
    // left
    for(let i = 1; i < n; i++){
        left*= nums[i-1];
        answer[i] *= left;
    }

    // right
    let right = 1;
    for(let i = n-2; i >= 0; i--){
        right *= nums[i+1];
        answer[i] *= right;
    }

    return answer;
};