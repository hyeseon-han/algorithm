/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a','e','i','o','u'];
    const strVowels = [];
    const strVowelsIdx = [];
    let answer = [];
    for(let i = 0; i < s.length; i ++){
        const lowerStr = s[i].toLowerCase();
        if(vowels.includes(lowerStr)){
            strVowelsIdx.push(i);
            strVowels.push(s[i]);
        }else{
            answer.push(s[i]);
        }
    }
    const reversed = strVowels.reverse();
    strVowelsIdx.forEach((ele,idx) => {
        answer.splice(ele, 0, reversed[idx]);
    })

    return answer.join('');
    
};