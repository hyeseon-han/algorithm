/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split(' ');
    console.log(arr);
    let answer = '';
    arr.forEach(ele => answer += ele.trim());
    for(let i = 0; i < arr.length; i++){
        if(i > 0){
            answer += ' ';
        }
        answer += arr[i].trim();
    }
};