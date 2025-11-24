/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const answer = new Array(candies.length).fill(true);

    for(let i = 0; i < answer.length; i++){
        const target = candies[i];
        const sum = target + extraCandies;
        for(let j = 0; j < candies.length; j++){
            if(sum < candies[j]){
                answer[i] = false;
                break;
            }
        }
    }

    return answer;
};