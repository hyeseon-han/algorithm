/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let answer = '';

    const arr1 = [...word1];
    const arr2 = [...word2];
    
    while(arr1.length + arr2.length !==0){
        answer += arr1.shift() ?? '';
        answer += arr2.shift() ?? '';
    }
    
    return answer;
};